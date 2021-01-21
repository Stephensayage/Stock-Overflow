import React, { useContext } from "react";
import feed from "../../assets/news-feed.svg";
import profile from "../../assets/profile.svg";
import settings from "../../assets/settings.svg";
import { UserContext } from "../../Contexts/user_context";

export default function Sidebar() {
  const { user } = useContext(UserContext);

  return (
    <div className="sidebar sidebar-ctn">
      {user ? (
        <nav className="sidebar-nav">
          <ul className="sidebar-ul">
            <li className="sidebar-li">
              <a href="#" className="sidebar-link">
                <img src={feed} alt="" className="sidebar-icon feed" />
                <span>Feed</span>
              </a>
            </li>
            <li className="sidebar-li">
              <a href="#" className="sidebar-link">
                <img src={profile} alt="" className="sidebar-icon profile" />
                <span>Profile</span>
              </a>
            </li>
            <li className="sidebar-li">
              <a href="#" className="sidebar-link">
                <img src={settings} alt="" className="sidebar-icon settins" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      ) : null}

      <div className="legal">2021 Development by Stephen Sayage</div>
    </div>
  );
}
