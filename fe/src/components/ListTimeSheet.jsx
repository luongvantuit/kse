import React from "react";
import { useState, useEffect } from "react";
import "../public/css/list-time-sheet.css";

import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SearchIcon from '@mui/icons-material/Search';

const token = JSON.parse(localStorage.getItem('token'));

export default function ListTimeSheet() {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [publicBoard, setPublicBoard] = useState([]);
  const [publicBoard1, setPublicBoard1] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8080/api/publicBoard/getPublicBoard";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        month: month,
      }
    })
      .then(response => response.json())
      .then(data => { 
        console.log(data.publicBoard);
        setPublicBoard(data.publicBoard);
        setPublicBoard1(data.publicBoard)
      })
  }, [month]);
  const onClickBefore = () => {
    setMonth(prev => {
      if (prev < 2) {
        setYear(year => year - 1);
        return prev = 12;
      } else {
        return prev - 1;
      }
    });
  }

  const onClickNext = () => {
    setMonth(prev => {
      if (prev > 11) {
        setYear(year => year + 1);
        return prev = 1;
      } else {
        return prev + 1;
      }
    });
  }

  const handleChangeFullName = e => {
    console.log(e.target.value);
    const newData = publicBoard1.filter(person => {
      return person.fullname.toLowerCase().search(e.target.value) !== -1;
    })
    console.log(newData);
    setPublicBoard(newData);
  }

  const handleChangeEmail = e => {
    console.log(e.target.value);
    const newData = publicBoard1.filter(person => {
      return person.username.toLowerCase().search(e.target.value) !== -1;
    })
    console.log(newData);
    setPublicBoard(newData);
  }

  const handleChangeDepartment = e => {
    console.log(e.target.value);
    const newData = publicBoard1.filter(person => {
      return person.department.toLowerCase().search(e.target.value) !== -1;
    })
    console.log(newData);
    setPublicBoard(newData);
  }

  return (
    <div className="list-timesheet-body-component">
      <div className="list-timesheet-body-header">
        <span className="list-timesheet-body-header-name">Danh sách chấm công</span>
        <div className="list-timesheet-body-header-right">
          <div className="list-timesheet-body-header-month-year">
            <button onClick={onClickBefore}>
              <NavigateBeforeIcon />
            </button>
            <span className="time">Tháng</span>
            <span className="time">{month}</span>
            <span className="time">/</span>
            <span className="time">{year}</span>
            <button onClick={onClickNext}>
              <NavigateNextIcon />
            </button>
          </div>

        </div>
      </div>
      <div className="thead">
        <div className="list-timesheet-body-search">
          <span>#</span>
          <div className="search-box">
            <TextField
              onChange={handleChangeFullName}
              label="Họ và tên"
              id="name"
              autoComplete="off"
              sx={{
                width: "8rem",
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
                width: "8rem",
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
                width: "8rem",
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
      <div className="list-timesheet-body-container">
        {publicBoard.map((data, index) => (
          <div className="list-timesheet-body-item" key={index}>
            <div className="list-timesheet-body-search">
              <span>{index + 1}</span>
              <div className="search-box">
                <span style={{
                  width: "8rem",
                }}>{data.fullname}</span>
              </div>
              <div className="search-box">
                <span style={{
                  width: "8rem",
                }}>{data.username}</span>
              </div>
              <div className="search-box">
                <span style={{
                  width: "8rem",
                }}>{data.department}</span>
              </div>
            </div>
            <div className="thread-span">
              <span className="list-timesheet-body-text-child">{data.workNumber}</span>
              <span className="list-timesheet-body-text-child">{data.holidaysNumber}</span>
              <span className="list-timesheet-body-text-child">{data.nghi_phep_co_luong}</span>
              <span className="list-timesheet-body-text-child">{data.nghi_phep_ko_luong}</span>
              <span className="list-timesheet-body-text-child">{data.sumWorkNumber}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
