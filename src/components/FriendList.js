import React from "react";
import "../data/friends.json";
import styles from "../css/FriendsList.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map((friend) => (
      <li className={styles.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? styles.statusOnline : styles.statusOffline
          }
        ></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="170" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};


export default FriendList;
