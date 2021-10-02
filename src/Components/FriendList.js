import React, { useState } from "react";
import FriendForm from "./FriendForm";
import Friend from "./Friend";
import FlipMove from "react-flip-move";
import "./FriendList.css";

function FriendList({ searchInput }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [friends, setFriends] = useState([]);

  // Logic for pagination
  const indexOfLastFriend = currentPage * 4;
  const indexOfFirstFriend = indexOfLastFriend - 4;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

  const nextPage = () => {
    setCurrentPage(Number(currentPage + 1));
    console.log(currentPage);
  };

  const prevPage = () => {
    setCurrentPage(Number(currentPage - 1));
    console.log(currentPage);
  };

  const addFriend = (friend) => {
    if (!friend.name.trim() == "") {
      const newFriends = [friend, ...friends];

      setFriends(newFriends);
    }
  };

  const deleteFriend = (id) => {
    const removedArr = [...friends].filter((friend) => friend.id !== id);

    setFriends(removedArr);
  };

  const favoriteToggle = (id) => {
    const newFriends = [...friends];
    for (const friend of newFriends) {
      if (friend.id == id) {
        friend.isFavorite = !friend.isFavorite;
      }
    }

    setFriends(newFriends);
  };

  return (
    <div className="friendList">
      <h1>Friends List</h1>
      <FriendForm addFriend={addFriend} />
      <FlipMove>
        {currentFriends
          .sort((a, b) => {
            if (a.isFavorite && b.isFavorite) return 0;
            else if (a.isFavorite == true && b.isFavorite == false) return -1;
            else return 1;
          })
          .filter((friend) => {
            if (searchInput == "") {
              return friend;
            } else if (
              friend.name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return friend;
            }
          })
          .map((friend) => (
            <Friend
              key={friend.id}
              friend={friend}
              favoriteToggle={favoriteToggle}
              deleteFriend={deleteFriend}
            />
          ))}
      </FlipMove>
      <div className="friendList__pageNumbers">
        {!(currentPage == 1) && (
          <button onClick={prevPage} className="friendList__prevButton">
            Previous
          </button>
        )}

        {friends.length > 4 && currentPage <= Math.floor(friends.length / 4) ? (
          <button onClick={nextPage} className="friendList__nextButton">
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default FriendList;
