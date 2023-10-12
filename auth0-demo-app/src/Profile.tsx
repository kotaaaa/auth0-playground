import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  const onClickLogin = () => {
    loginWithRedirect()
  }

  const onClickLogout = () => { 
    logout({ logoutParams: { returnTo: window.location.origin } })
  }
  

  return (
    isAuthenticated && user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.email}</h2>
        <button onClick={onClickLogout}>
            Log Out
        </button>
      </div>
        ) : <button onClick={onClickLogin}>Log in</button>
  );
};

export default Profile;

