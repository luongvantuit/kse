import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../public/css/list-personal.css";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';

export default function ListPersonal() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    fetch('http://localhost:8080/api/employeeManager/getEmployee', {
      method: 'GET',
      headers:{
        "accept": "application/json",
        "content-type": "application/json; charset=utf-8",
        Authorization: 'Bearer ' + token,
      }
    })
      .then(response => response.json())
      .then(data => {
        const result = data.listPerson.filter(function(person) {
          return person.username !== "admin123";
        })
        setData(result);
        setData1(result);
      });
  }, []);

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
        if (data.role === 'admin' || data.role ==="manager") {
          setAdmin(true);
        }
      })
  }, []);

  const handleChangeFullName = e => {
    console.log(e.target.value);
    const newData = data1.filter(person => {
      return person.fullname.toLowerCase().search(e.target.value) !== -1;
    })
    console.log(newData);
    setData(newData);
  }

  const handleChangeEmail = e => {
    console.log(e.target.value);
    const newData = data1.filter(person => {
      return person.username.toLowerCase().search(e.target.value) !== -1;
    })
    console.log(newData);
    setData(newData);
  }

  const handleChangeDepartment = e => {
    console.log(e.target.value);
    const newData = data1.filter(person => {
      return person.department.toLowerCase().search(e.target.value) !== -1;
    })
    console.log(newData);
    setData(newData);
  }

  return (
    <div className="list-personal-body-component">
      <div className="list-personal-body-header">
        <span style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Danh sách nhân sự</span>
        <div className="list-personal-body-header-right">
          <div>
            <button className="btn-add-personal">
              <Link to={"/app/addnew"}>
                <PersonAddIcon sx={{ fontSize: "1.7rem" }} />
                <span>Thêm nhân sự</span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="thead">
        <div className="list-personal-body-search-personnel">
          <span style={{ width: '1rem' }}>#</span>
          <div className="search-box">
            <TextField
              onChange={handleChangeFullName}
              label="Họ và tên"
              id="name"
              autoComplete="off"
              sx={{
                width: "10rem",
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
              onChange={handleChangeEmail}
              label="Email"
              variant="standard"
              autoComplete="off"
              sx={{
                width: "10rem",
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
              onChange={handleChangeDepartment}
              label="Phòng ban"
              variant="standard"
              autoComplete="off"
              sx={{
                width: "10rem",
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
                width: "10rem",
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
                width: "10rem",
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

          <div style={{ width: '1rem' }}>
            <span></span>
          </div>
        </div>
      </div>

      <div className="list-personal-view">
        {data.map(person => (
          <div className="list-personal-body-search-item-personnel" key={person.id}>
            <span className="item-personnel-id">{person.id}</span>
            <span className="item-personnel">{person.fullname}</span>
            <span className="item-personnel">{person.username}</span>
            <span className="item-personnel">{person.department}</span>
            <span className="item-personnel">{person.role}</span>
            <span className="item-personnel">{person.nameContract}</span>
            {admin && (
              <>
                <button onClick={() => {
                  console.log(person);
                  navigate(`/app/edit-personal/${person.username}`, {
                    state: {
                      person
                    }
                  })
                }}>
                  <EditIcon
                    sx={{ marginRight: '1rem' }}
                  />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
