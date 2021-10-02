import React, { useState } from "react";
import "./Friend.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { forwardRef } from "react";
import Modal from "./Modal";

const Friend = forwardRef(({ friend, deleteFriend, favoriteToggle }, ref) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div ref={ref} className="friend">
      <div key={friend.id}>
        {friend.name}
        <p className="friend__status">is your friend</p>
      </div>

      <div className="friend__icons">
        {friend.isFavorite ? (
          <StarRateIcon
            onClick={() => favoriteToggle(friend.id)}
            className="friend__iconsStarIcon"
          />
        ) : (
          <StarOutlineIcon
            fontSize="large"
            onClick={() => favoriteToggle(friend.id)}
            className="friend__iconsStarIcon"
          />
        )}

        <DeleteForeverIcon
          fontSize="large"
          onClick={() => setShowModal(true)}
          className="friend__iconsDeleteIcon"
        />
        <Modal
          deleteFriend={deleteFriend}
          id={friend.id}
          show={showModal}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
});

export default Friend;
