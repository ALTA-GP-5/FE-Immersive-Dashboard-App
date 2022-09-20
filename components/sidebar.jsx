import Image from "next/image";
import { Group, Home, Person, Class } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import Logo from "../assets/logo1.png";

const Sidebar = () => {
  return (
    <div className="h-fullscreen">
      <Box className="border-4 h-full bg-stone-300 w-1/6" position="fixed">
        <Image src={Logo} alt="hilih" height={77} width={200} />
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>

              <ListItemText primary="Mentee" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>

              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Class />
              </ListItemIcon>

              <ListItemText primary="Class" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default Sidebar;
