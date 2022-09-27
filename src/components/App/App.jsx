import user from 'data/user.json';
import data from 'data/data.json';
import { Profile, Statistics } from '../components';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={data} />
    </div>
  );
};
