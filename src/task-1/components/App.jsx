import userData from '../user.json';
import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <>
      <Profile user={userData} />
    </>
  );
};

App.propTypes = {
  user: PropTypes.objectOf({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
