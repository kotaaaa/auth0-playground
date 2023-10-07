import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.email}</h2>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
      </div>
        ) : <button onClick={() => loginWithRedirect()}>Log in</button>
  );
};

export default Profile;
