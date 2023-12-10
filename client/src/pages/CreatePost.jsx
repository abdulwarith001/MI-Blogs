import React, {useState} from 'react'
import Wrapper from '../assets/wrappers/CreatePost'
import { Form } from 'react-router-dom'
import { Input, Textarea, Html5Editor } from '../components'

const CreatePost = () => {

  const [editorContent, setEditorContent] = useState("");

  const handleEditorDataChange = (data) => {
    setEditorContent(data);
    console.log(editorContent)
  };
  return (
    <Wrapper>
      <Form>
        <h4>Create new Post</h4>
        <div className="input-wrapper">
          <Input type="text" name="title" label="Title" />
          <Input type="file" name="cover" label="Cover Photo" />

          <br></br>
          <label>Content</label>
          <Html5Editor name='content' onDataChanged={handleEditorDataChange} />

          <button type="submit" className="btn">
            Publish
          </button>
        </div>
      </Form>
    </Wrapper>
  );
}

export default CreatePost