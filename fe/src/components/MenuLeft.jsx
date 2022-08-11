import React from "react";

import "../public/css/menu-left.css";

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import NoteAlt from '@mui/icons-material/NoteAlt';
import AvTimer from '@mui/icons-material/AvTimer';
import Leaderboard from '@mui/icons-material/Leaderboard';
import Groups from '@mui/icons-material/Groups'

export default function MenuLeft() {
  return (
    <div className="menu-left">
      <Paper
        sx={{ width: 240, maxWidth: "100%"}}
      >
        <MenuList className="option">
          <MenuItem className="option1">
            <AvTimer />
            <ListItemText className="menu-name">Chấm công</ListItemText>
          </MenuItem>

          <MenuItem className="option2">
            <NoteAlt />
            <ListItemText className="menu-name">Đơn từ</ListItemText>
          </MenuItem>

          <Divider />

          <span className="text"> Quản lí </span>

          <MenuItem className="option3">
            <Leaderboard />
            <ListItemText className="menu-name">Bảng công</ListItemText>
          </MenuItem>

          <MenuItem className="option4">
            <Groups />
            <ListItemText className="menu-name">Nhân sự</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
