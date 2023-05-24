import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
 
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <>
            {currentUser.img ? (
            <img 
                
                src={`../upload/${currentUser.img}`}
                width="50"
                height="50"
                alt="user profile img"
            />
            ):(
                <img 
                src="../upload/userimage.png"
                width="50"
                height="50"
                alt="user profile img"
            />  
            )}
            <span onClick={logout}>Logout</span>
            </>

            ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;