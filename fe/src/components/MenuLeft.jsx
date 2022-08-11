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
        sx={{ maxWidth: "100%", height: "100%"}}
      >
        <MenuList className="option">
          <MenuItem className="option1">
            <AvTimer sx={{fontSize:'2.6rem'}}/>
            <ListItemText className="menu-name" sx={{fontSize:'1.4rem'}}>Chấm công</ListItemText>
          </MenuItem>

          <MenuItem className="option2">
            <NoteAlt sx={{fontSize:'2.6rem'}}/>
            <ListItemText className="menu-name" sx={{fontSize:'1.4rem'}}>Đơn từ</ListItemText>
          </MenuItem>

          <Divider />

          <span className="text"> Quản lí </span>

          <MenuItem className="option3">
            <Leaderboard sx={{fontSize:'2.6rem'}}/>
            <ListItemText className="menu-name" sx={{fontSize:'1.4rem'}}>Bảng công</ListItemText>
          </MenuItem>

          <MenuItem className="option4">
            <Groups sx={{fontSize:'2.6rem'}}/>
            <ListItemText className="menu-name" sx={{fontSize:'1.4rem'}}>Nhân sự</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
