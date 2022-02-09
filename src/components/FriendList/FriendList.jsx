import styles from "./friendList.module.css";
import FriendListItem from "./FriendListItem"
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {

 const elements = friends.map(item => <FriendListItem key={item.id} {...item} />)      
  
     return (
      <ul className={styles.friend_list}>
        { elements }
         </ul>
   )
}

export default FriendList;

FriendList.defaultProps = {
    friends: []   
}

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