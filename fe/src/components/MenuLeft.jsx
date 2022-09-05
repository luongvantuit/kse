import React from "react";
import { useEffect } from "react";
import "../public/css/menu-left.css";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import NoteAlt from "@mui/icons-material/NoteAlt";
import AvTimer from "@mui/icons-material/AvTimer";
import Leaderboard from "@mui/icons-material/Leaderboard";
import Groups from "@mui/icons-material/Groups";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

export default function MenuLeft() {
  const [openBrowse, setOpenBrowse] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  useEffect(() => {
    const url = "http://localhost:8080/api/users/role";
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(url, {
      methods: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.role === 'admin') {
          setAdmin(true);
        }
      })
  }, []);

  return (
    <div className="menu-left">
      <Paper sx={{ maxWidth: "100%", height: "100%" }}>
        <MenuList className="option">
          <MenuItem className="option1">
            <Link to={"/app/homepage"}>
              <div className="menu-item">
                <AvTimer sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  Chấm công
                </ListItemText>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className="option2">
            <Link to={"/app/requests"}>
              <div className="menu-item">
                <NoteAlt sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  Đơn từ
                </ListItemText>
              </div>
            </Link>
          </MenuItem>

          <Divider />

          <span className="text"> Quản lí </span>

          {admin && (
            <MenuItem className="option3" onClick={() => setOpenBrowse(!openBrowse)}>
              <div className="menu-item">
                <ArticleIcon sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  Phê duyệt
                </ListItemText>
                <div style={{ marginLeft: "6vw" }}>
                  {openBrowse ? <ExpandLess /> : <ExpandMore />}
                </div>
              </div>
            </MenuItem>
          )}
          <Collapse in={openBrowse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/app/browse-menus">
                <ListItemButton sx={{ pl: 7 }}>
                  <ListItemText primary="Chấm công bù" />
                </ListItemButton>
              </Link>
              <Link to="/app/form-on-leave">
                <ListItemButton sx={{ pl: 7 }}>
                  <ListItemText primary="Xin nghỉ phép" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <MenuItem className="option3">
            <Link to={"/app/timesheet"}>
              <div className="menu-item">
                <Leaderboard sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  Bảng công
                </ListItemText>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className="option4">
            <Link to={"/app/personnel"}>
              <div className="menu-item">
                <Groups sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  {" "}
                  Nhân sự
                </ListItemText>
              </div>
            </Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
