import styles from "./friendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let color = isOnline ? "red" : "green";

  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: `${color}` }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
