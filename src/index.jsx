import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// data
import user from './data/user.json';
import stats from './data/stats.json';
import friends from './data/friends.json';

// components
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendsList } from './components/FriendsList/FriendsList';

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics data={stats} />
      <FriendsList friends={friends} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


// App.propTypes = {
//   user: PropTypes.objectOf({
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }).isRequired,
//   }),
// };