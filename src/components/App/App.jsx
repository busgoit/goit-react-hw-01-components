import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { Profile, Statistics, FriendList } from '../index';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
    </>
  );
};
