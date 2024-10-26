import { useState } from "react";
import Logo from "/src/assets/navbar/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Category, Info, Phone, Sell, Feedback } from "@mui/icons-material";

const navbar = () => {
  console.log(window.location);
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Features",
      icon: <Category />,
      path: "features"
    },
    {
      text: "About us",
      icon: <Info />,
      path: "about-us"
    },
    {
      text: "Pricing",
      icon: <Sell />,
      path: "pricing"
    },
    {
      text: "Feedback",
      icon: <Feedback />,
      path: "feedback"
    },
    {
      text: "Request a demo",
      icon: <Phone />,
      path: "demo-request"
    }
  ];

  return (
    <nav className="flex items-center	justify-between lg:min-h-40 sm:min-h-24 min-h-20">
      <a href="/">
        <img src={Logo} alt="Xpense" />
      </a>
      <div className="hidden md:flex">
        {menuOptions.map((item) => (
          <a
            key={item.text}
            href={`/` + item.path}
            className={`xl:mr-12 lg:mr-8 md:mr-4 text-[#292830] lg:text-lg md:text-sm ${
              item.path.startsWith("demo") ? "hidden" : ""
            }`}
          >
            {item.text}
          </a>
        ))}
      </div>
      <button className="hidden md:flex border border-[#ff7235] text-[#ff7235] rounded-lg lg:text-lg md:text-sm px-3.5 py-2 hover:bg-[#ff7235] hover:text-white">
        Request a demo
      </button>
      <div className="md:hidden">
        <HiOutlineBars3
          onClick={() => setOpenMenu(true)}
          className="text-2xl"
        />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        className="opacity-90"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                className="hover:bg-slate-500"
              >
                <a href={`/` + item.path}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      className="text-[#292830]"
                    />
                  </ListItemButton>
                </a>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default navbar;
