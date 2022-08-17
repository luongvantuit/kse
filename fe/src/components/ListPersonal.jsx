import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../public/css/list-personal.css";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";

export default function ListPersonal() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:8080/api/employeeManager')
    .then(response => response.json())
    .then(data => {setData(data.listPerson); console.log(data.listPerson)});
  }, []);
  return (
    <div className="body-component">
      <div className="body-header">
        <span>Danh sách nhân sự</span>
        <div className="body-header-right">
          <div>
            <button className="btn-add-personal">
              <Link to={"/addnew"}>
                <PersonAddIcon />
                <span>Thêm nhân sự</span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="thead">
        <div className="body-search-personnel">
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
        </div>
      </div>

      <div className="view">
        {data.map(person => (
          <div className="body-search-item-personnel" key={person.id}>
            <span className="item-personnel-id">{person.id}</span>
            <span className="item-personnel-fullname">{person.fullname}</span>
            <span className="item-personnel-username">{person.username}</span>
            <span className="item-personnel-department">{person.department}</span>
            <span className="item-personnel-staff">{person.role}</span>
            <span className="item-personnel-contract">{person.nameContract}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
