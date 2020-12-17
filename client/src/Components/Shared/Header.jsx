import React from "react";
import Link from "react-router-dom/Link";
import { removeToken } from "../../services/auth";

import { EmojiSmileFill } from "react-bootstrap-icons";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="header">
      <Link to="/" className="home-link">
        <h3>StockOverflow</h3>
      </Link>
      {props.currentUser ? (
        <>
          <Dropdown as={ButtonGroup}>
            <img
              src={props.currentUser.image}
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
