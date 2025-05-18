import { FriendsListItem } from '../FriendListItem/FriendsListItem';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(item => (
        <FriendsListItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
