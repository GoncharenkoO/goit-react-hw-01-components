import styles from "./friendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends = [] }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ id, name, avatar, isOnline }) => {
      let color = isOnline ? "red" : "green";
      return (
        <li className={styles.item} key={id}>
          <span className={styles.status} style={{ backgroundColor: `${color}` }}></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      )
   })}
  </ul>
);

export default FriendList;


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};