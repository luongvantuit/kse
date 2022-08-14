import React from "react";

import "../public/css/list-checkin.css";

import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function ListCheckIn() {
  return (
    <div className="body-component">
      <div className="body-header">
        <span className="body-header-name">Danh sách chấm công</span>
        <div className="body-header-right">
          <div className="body-header-month-year">
            <button>
              <NavigateBeforeIcon />
            </button>
            <span className="time">Tháng</span>
            <span className="time">2</span>
            <span className="time">/</span>
            <span className="time">2022</span>
            <button>
              <NavigateNextIcon />
            </button>
          </div>
          <div>
            <button className="btn-file-export">
              <ExitToAppIcon />
              <span>Xuất báo cáo</span>
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
