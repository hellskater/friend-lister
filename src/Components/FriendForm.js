import React, { useState } from "react";
import "./FriendForm.css";

function FriendForm({ addFriend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addFriend({
      id: Math.floor(Math.random() * 10000),
      name: input,
      isFavorite: false,
    });

    setInput("");
  };

  return (
    <div className="friendForm">
      <form>
        <input
          placeholder="Enter Your Friend's Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="friendForm__input"
        />
        <button onClick={handleSubmit} className="friendForm__button">
          Add Friend
        </button>
      </form>
    </div>
  );
}

export default FriendForm;
