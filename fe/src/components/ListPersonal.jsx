import React from "react";
import { Link } from "react-router-dom";

import "../public/css/list-personal.css";

import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
//import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function ListPersonal() {
  return (
    <div className="body-component">
      <div className="body-header">
        <span className="body-header-name">Danh sách nhân sự</span>
        <div className="body-header-right">
          <div>
            <button className="btn-add-personal">
              <Link to={"/addnew"}>
                <PersonAddIcon sx={{ fontSize: "1.7rem" }}/>
                <span>Thêm nhân sự</span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="thead">
        <div className="body-search-personal">
          <span>Mã NV</span>
          <div className="search-box">
            <TextField
              label="Họ và tên"
              id="name"
              autoComplete="off"
              sx={{
                width: "auto",
                maxWidth: "10rem",
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
                maxWidth: "10rem",
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
                maxWidth: "10rem",
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
              label="Chức vụ"
              variant="standard"
              autoComplete="off"
              sx={{
                width: "auto",
                maxWidth: "10rem",
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
              label="Loại hợp đồng"
              variant="standard"
              autoComplete="off"
              sx={{
                width: "14rem",
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
        
      </div>

      {/* <div className="veiw">
        <div className="thead">
          <div className="body-search">
            <span>1</span>
            <div className="search-box">
              <span>Nguyễn Văn A"</span>
            </div>
            <div className="search-box">
              <span>A@gmail.com.vn</span>
            </div>

            <div className="search-box">
              <span>Phòng ban A</span>
            </div>

            <div className="search-box">
              <span>Nhân viên</span>
            </div>

            <div className="search-box">
              <span>Thời vụ</span>
            </div>
          </div>
          
        </div>
      </div> */}
    </div>
  );
}
