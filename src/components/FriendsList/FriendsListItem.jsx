import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ friend }) => {
  const { name, avatar, isOnline } = friend;
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${css[isOnline ? 'online' : 'offline']}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
