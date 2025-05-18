import friends from '../friends.json';
import { FriendsList } from '../components/FriendsList/FriendsList';

export const App = () => {
  return (
    <>
      <FriendsList friends={friends} />
    </>
  );
};
