import React from "react";

import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import enLocale from "date-fns/locale/en-NZ";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import "../public/css/personal-information.css";
const localeMap = {
  en: enLocale,
};

const genders = [
  {
    value: "Nam",
    label: "Nam",
  },
  {
    value: "Nữ",
    label: "Nữ",
  },
  {
    value: "Không xác định",
    label: "Không xác định",
  },
];

const rooms = [
  {
    value: "Phòng ban 1",
    label: "Phòng ban 1",
  },
  {
    value: "Phòng ban 2",
    label: "Phòng ban 2",
  },
  {
    value: "Phòng ban 3",
    label: "Phòng ban 3",
  },
];

const works = [
  {
    value: "Toàn thời gian",
    label: "Toàn thời gian",
  },
  {
    value: "Bán thời gian",
    label: "Bán thời gian",
  },
];

const contractDurations = [
  {
    value: "Sáu tháng",
    label: "Sáu tháng",
  },
  {
    value: "Một năm",
    label: "Một năm",
  },
  {
    value: "Ba năm",
    label: "Ba năm",
  },
  {
    value: "Năm năm",
    label: "Năm năm",
  },
];

export default function PersonalInformation() {
  const [locale] = React.useState("en");
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  const [gender, setGender] = React.useState("Nam");
  const [room, setRoom] = React.useState("Phòng ban 1");
  const [work, setWork] = React.useState("Toàn thời gian");
  const [contractDuration, setContractDuration] = React.useState("Sáu tháng");
  const handleChange = (event) => {
    setGender(event.target.value);
    setRoom(event.target.value);
    setWork(event.target.value);
    setContractDuration(event.target.value);
  };
  
  return (
    <div className="personal-inf">
      <span className="personal-inf-name">Hồ sơ cá nhân</span>

      <div className="body-personal-inf-two">
        <div className="body-personal-inf-left">
          <button className="btn-personal-avatar">
            <AccountCircleIcon sx={{ fontSize: "10.4rem", color: "#BBBBBB" }} />
          </button>

          <div className="personal-inf-left-username">
            <p>Tên đăng nhập</p>
            <TextField
              variant="standard"
              disabled
              sx={{
                width: "14rem",
              }}
            />
          </div>

          <div className="personal-inf-left-password">
            <p>Mật khẩu</p>
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ModeEditIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        <div className="personal-inf-right">
          <span className="personal-inf-name">THÔNG TIN CÁ NHÂN</span>
          <div className="body-personal-inf-right">
            <div className="personal-inf-right-left">
              <p className="personal-inf-right-right-id">Mã nhân viên</p>
              <TextField
                variant="standard"
                disabled
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
              />

              <p className="personal-inf-right-right-MAC">Căn cước công dân</p>
              <TextField
                variant="standard"
                disabled
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
              />

              <p className="personal-inf-right-right-birth">Ngày sinh</p>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={localeMap[locale]}
              >
                <DatePicker
                  value={datePickerValue}
                  onChange={(newValue) => setDatePickerValue(newValue)}
                  renderInput={(params) => (
                    <TextField
                      variant="standard"
                      type="date"
                      sx={{
                        width: "16rem",
                        marginTop: "0.4rem",
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              <p className="personal-inf-right-right-room">Phòng ban</p>
              <TextField
                select
                value={room}
                onChange={handleChange}
                variant="standard"
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
              >
                {rooms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>

          <div className="personal-inf-right-right">
            <p className="personal-inf-right-right-gender">Giới tính</p>
            <TextField
              select
              value={gender}
              onChange={handleChange}
              variant="standard"
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <p className="personal-inf-right-right-work">Chế độ làm việc</p>
            <TextField
              select
              value={work}
              onChange={handleChange}
              variant="standard"
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            >
              {works.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>

      <div className="personal-inf-bottom">
        <span className="personal-inf-name">THÔNG TIN HỢP ĐỒNG</span>
        <div className="body-personal-inf-bottom">
          <div className="personal-inf-bottom-left">
            <p className="personal-inf-right-right-contract-form">
              Loại hợp đồng
            </p>
            <TextField
              variant="standard"
              select
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            />
            <p className="personal-inf-right-right-contract-duration">
              Thời hạn hợp đồng
            </p>
            <TextField
              select
              value={contractDuration}
              onChange={handleChange}
              variant="standard"
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            >
              {contractDurations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="personal-inf-bottom-right">
            <p className="personal-inf-right-right-contract-start-date">
              Ngày kí hợp đồng
            </p>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={localeMap[locale]}
            >
              <DatePicker
                value={datePickerValue}
                onChange={(newValue) => setDatePickerValue(newValue)}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    type="date"
                    sx={{
                      width: "16rem",
                      marginTop: "0.4rem",
                    }}
                  />
                )}
              />
            </LocalizationProvider>

            <p className="personal-inf-right-right-contract-end-date">
              Ngày hết hạn hợp đồng
            </p>

            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={localeMap[locale]}
            >
              <DatePicker
                value={datePickerValue}
                onChange={(newValue) => setDatePickerValue(newValue)}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    type="date"
                    sx={{
                      width: "16rem",
                      marginTop: "0.4rem",
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="btn-two">
        <button className="btn-exit">HỦY BỎ</button>
        <button className="btn-add">LƯU</button>
      </div>
    </div>
    
  );
}
