import React, { useState } from "react";
import "./sidebar.css";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Intro",
      icon: <HomeOutlinedIcon />,
    },
    {
      path: "/about",
      name: "About",
      icon: <Person2OutlinedIcon />,
    },
    {
      path: "/experience",
      name: "Experience",
      icon: <BadgeOutlinedIcon />,
    },
    {
      path: "/skills",
      name: "Skills",
      icon: <IntegrationInstructionsOutlinedIcon />,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      icon: <WorkOutlinedIcon />,
    },
    {
      path: "/education",
      name: "Education",
      icon: <SchoolOutlinedIcon />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <ConnectWithoutContactOutlinedIcon />,
    },
  ];
  return (
    <div className="container">
      <div
        className="sidebar"
        style={{ width: isOpen ? "max-content" : "50px" }}
      >
        <div className="top-section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Swastik
          </h1>
          <div className="bars" style={{marginLeft: isOpen?'max-content':'0px'}}>
            <HorizontalSplitIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link-text" style={{display:isOpen?'block':'none'}}>{item.name}</div>
            </NavLink>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
