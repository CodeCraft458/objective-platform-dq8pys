import React, { useState } from "react";

function CreateNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (title && content) {
      onAddNote({
        title,
        content,
      });
      setTitle(""); // Reset title
      setContent(""); // Reset content
    }
  }

  return (
    <div className="create-note">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={handleContentChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
