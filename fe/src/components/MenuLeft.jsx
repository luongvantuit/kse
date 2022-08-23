import React from "react";
import { useEffect } from "react";
import "../public/css/menu-left.css";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";

import NoteAlt from "@mui/icons-material/NoteAlt";
import AvTimer from "@mui/icons-material/AvTimer";
import Leaderboard from "@mui/icons-material/Leaderboard";
import Groups from "@mui/icons-material/Groups";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';

export default function MenuLeft() {
  const [open, setOpen] = React.useState(false);
  const [openBrowse, setOpenBrowse] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

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
            <Link to={"/"}>
              <div className="menu-item">
                <AvTimer sx={{ fontSize: "2.6rem" }} />

                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  Chấm công
                </ListItemText>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className="option2">
            {/* <NoteAlt sx={{fontSize:'2.6rem'}}/> */}
            <Link to={"/requests"}>
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
              </div>
            </MenuItem>
          )}
          {openBrowse && (
            <div style={{ paddingLeft: '2rem' }}>
              <MenuItem className="option3" style={{ height: '2.6rem' }}>
                <Link to={"/browse-menus"}>
                  <div className="menu-item">
                    <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                      Chấm công bù
                    </ListItemText>
                  </div>
                </Link>
              </MenuItem>

              <MenuItem className="option3" style={{ height: '2.6rem' }}>
                <Link to={"/form-on-leave"}>
                  <div className="menu-item">
                    <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                      Xin nghỉ phép
                    </ListItemText>
                  </div>
                </Link>
              </MenuItem>
            </div>
          )}

          <MenuItem className="option3">
            <Link to={"/timesheet"}>
              <div className="menu-item">
                <Leaderboard sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  Bảng công
                </ListItemText>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className="option4">
            <Link to={"/personnel"}>
              <div className="menu-item">
                <Groups sx={{ fontSize: "2.6rem" }} />
                <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
                  {" "}
                  Nhân sự
                </ListItemText>
                <ListItemText
                  ref={anchorRef}
                  id="menu-name"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  sx={{ marginLeft: "14px" }}
                >
                  <ExpandMoreIcon className="jss178" />
                </ListItemText>
                <Menu
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleClose}>Phòng ban 1</MenuItem>
                  <MenuItem onClick={handleClose}>Phòng ban 2</MenuItem>
                  <MenuItem onClick={handleClose}>Phòng ban 3</MenuItem>
                </Menu>
              </div>
            </Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
