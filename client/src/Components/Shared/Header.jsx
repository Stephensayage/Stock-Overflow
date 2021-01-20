import React, { useContext } from "react";
import Link from "react-router-dom/Link";
import { removeToken } from "../../services/auth";

import { EmojiSmileFill } from "react-bootstrap-icons";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../Contexts/user_context";

export default function Header(props) {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="header">
      {user ? (
        <Link to="/homepage" className="home-link">
          <h3>StockOverflow</h3>
        </Link>
      ) : (
        <Link to="/" className="home-link">
          <h3>StockOverflow</h3>
        </Link>
      )}

      {user ? (
        <>
          <Dropdown as={ButtonGroup}>
            <img
              src={user.image}
              alt="profile-pic"
              className="profile-pic-header"
            />

            <Dropdown.Toggle
              className="toggle-drop"
              split
              variant="Primary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Link to="/profile">
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              </Link>
              <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <Link to="/signin">
          <EmojiSmileFill color={"lightGrey"} size={"36"} />
        </Link>
      )}
    </div>
  );
}
