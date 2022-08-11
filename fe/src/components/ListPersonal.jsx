import React from "react";

import "../public/css/list-personal.css";

import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
//import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function ListPersonal() {
  return (
    <div className="body-component">
      <div className="body-header">
        <span>Danh sách chấm công</span>
        <div className="body-header-right">
  
          <div>
            <button className="btn-add-personal">
              <PersonAddIcon />
              <span>Thêm nhân sự</span>
            </button>
          </div>
        </div>
      </div>

      <div className="thead">
        <div className="body-search">
          <span>#</span>
          <div className="search-box">
            <TextField
              label="Họ và tên"
              id="name"
              autoComplete="off"
              sx={{
                width: "auto",
                maxWidth: "6.4rem",
                height: "2rem",
                marginBottom: "2rem",
                marginLeft: "0.2rem",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div className="search-box">
            <TextField
              label="Email"
              variant="standard"
              autoComplete="off"
              sx={{
                width: "auto",
                maxWidth: "6.4rem",
                height: "2rem",
                marginBottom: "2rem",
                marginLeft: "0.2rem",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="search-box">
            <TextField
              label="Phòng ban"
              variant="standard"
              autoComplete="off"
              sx={{
                width: "auto",
                maxWidth: "6.4rem",
                height: "2rem",
                marginBottom: "2rem",
                marginLeft: "0.2rem",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="thread-span">
          <span className="thead-text-child">Số công đi làm</span>
          <span className="thead-text-child">Công nghỉ lễ</span>
          <span className="thead-text-child">Nghỉ phép có lương</span>
          <span className="thead-text-child">Nghỉ phép không lương</span>
          <span className="thead-text-child">Tổng công tính lương</span>
        </div>
      </div>
    </div>
  );
}
