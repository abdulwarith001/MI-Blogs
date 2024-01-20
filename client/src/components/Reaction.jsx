import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Reactions";
import Excellent from "../assets/images/icons8-fire.gif";
import Love from "../assets/images/icons8-heart.gif";
import Like from "../assets/images/icons8-like.gif";
import { useCreateReactionMutation } from "../slices/blogApiSlice";

const Reaction = ({ id }) => {
  const [reaction, setReaction] = useState("");
  const [create_reaction] = useCreateReactionMutation();
  const [payload, setPayload] = useState({});
  const [reactionNum, setReactionNum] = useState(null)


  useEffect(() => {
    const sendReaction = async () => {
      const res = await create_reaction(payload).unwrap();
      setReactionNum(res.reactions)
    };

    if (payload.reaction) {
      sendReaction();
    }
  }, [payload, create_reaction]);

  const createReaction = (react) => {
    setReaction((prevReaction) => {
      const newPayload = {
        reaction: react,
        postId: id,
      };
      setPayload(newPayload);
      return react;
    });
  };

  return (
    <Wrapper>
      <div className="img-wrapper" onClick={() => createReaction("excellent")}>
        <img src={Excellent} alt="Excellent" />
        <p>
          {reactionNum
            ? `Rated ${reactionNum.excellent} times`
            : "Excellent"}
        </p>
      </div>
      <div className="img-wrapper" onClick={() => createReaction("love")}>
        <img src={Love} alt="Love" />
        <p>
          {reactionNum ? `Rated ${reactionNum.love} times` : "Love this!"}
        </p>
      </div>
      <div className="img-wrapper" onClick={() => createReaction("like")}>
        <img src={Like} alt="Like" />
        <p>{reactionNum ? `Rated ${reactionNum.like} times` : "Like!"}</p>
      </div>
    </Wrapper>
  );
};

export default Reaction;
