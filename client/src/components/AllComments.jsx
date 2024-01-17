import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaFire, FaRegThumbsUp } from "react-icons/fa";
// import '../css/rating.css'
import Wrapper from "../assets/wrappers/Rating";
import { useCreateReactionMutation } from "../slices/blogApiSlice";
import Loader from './Loading'

const ItemTypes = {
  CARD: "card",
};

const DraggableCard = ({ id, icon, index, moveCard, value, reactions }) => {

  const [reaction, setReaction] = useState({like: reactions.like, love: reactions.love})
  const [, ref] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index, icon, value, reactions }, // Include 'text' property here
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="rateBtn">
      {icon}
      <span>
        {reaction[value]}
        {value}'s
      </span>
    </div>
  );
};

const Dustbin = ({postId}) => {
  const [droppedItem, setDroppedItem] = useState(null);
  const [create_reaction, {isLoading}] = useCreateReactionMutation();

  const createReaction = async (item) => {
    try {
      const payload = {
        reaction: item.value,
        postId 
      }
      await create_reaction(payload).unwrap();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      if (item) {
        setDroppedItem(item);
        createReaction(item)
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;

  let backgroundColor = "#FFFFFF";
  let cursor;
  if (isActive) {
    backgroundColor = "#00FF00"; // Green color when a card is dragged over the dustbin
  } else if (canDrop) {
    backgroundColor = "#FFFF00"; // Yellow color when a card can be dropped but is not over
  }

  return (
    <div ref={drop} className="basket" style={{ backgroundColor, cursor }}>
      {/* Dropzone */}
      {isLoading && <Loader text="Updating reaction" />}
      {/* {isLoading && <div>Loaded</div>} */}
      {droppedItem ? (
        <div className="icon">{droppedItem.icon}</div>
      ) : (
        "Dropzone"
      )}
    </div>
  );
};
const DragAndDrop = ({id, reactions}) => {
  const [cards, setCards] = useState([
    { id: 1, icon: <FaRegThumbsUp />, value: "like" },
    { id: 2, icon: <FaFire />, value: "love" },
  ]);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <div className="rates">
          {cards.map((card, index) => (
            <DraggableCard
              key={card.id}
              id={card.id}
              icon={card.icon}
              index={index}
              value={card.value}
              moveCard={moveCard}
              reactions={reactions}
            />
          ))}
        </div>
        <Dustbin postId={ id} />
      </Wrapper>
    </DndProvider>
  );
};

export default DragAndDrop;
