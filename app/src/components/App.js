// import logo from './logo.svg';
// import './App.css';
import user from "./Profile/user.json";
import { Profile } from "./Profile/Profile";

const rootStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 40,
  color: "#010101",
};

export const App = () => {
  return (
    <div style={rootStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
