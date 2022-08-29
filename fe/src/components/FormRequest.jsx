import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import enLocale from "date-fns/locale/en-NZ";
import { styled } from "@mui/material/styles";

import SendIcon from "@mui/icons-material/Send";

import "../public/css/form-request.css";
// import { style } from "@mui/system";

function FormRequest() {
  const token = JSON.parse(localStorage.getItem("token"));

  const localeMap = {
    en: enLocale,
  };

  const [personInfo, setPersonInfo] = useState({});
  const [reasonOne, setReasonOne] = useState("");
  const [reasonTwo, setReasonTwo] = useState("");

  const [bgBtnMorning, setBgBtnMorning] = useState({ backgroundColor: 'transparent' });
  const [bgBtnColorMorning, setBgBtnColorMorning] = useState(true);

  const [bgBtnAfternoon, setBgBtnAfternoon] = useState({ backgroundColor: 'transparent' });
  const [bgBtnColorAfternoon, setBgBtnColorAfternoon] = useState(true);

  const [value, setValue] = useState("one");

  const [locale] = React.useState("en");

  const [datePickerValueOne, setDatePickerValueOne] = React.useState(new Date());
  const [timePickerValueFromOne, setTimePickerValueFromOne] = React.useState(new Date());
  const [timePickerValueToOne, setTimePickerValueToOne] = React.useState(new Date());

  const [datePickerValueFromTwo, setDatePickerValueFromTwo] = React.useState(new Date());
  const [datePickerValueToTwo, setDatePickerValueToTwo] = React.useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmitOne = () => {
    const url = "http://localhost:8080/api/form/form-CompensatingTimekeeping";
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({
        fullName: personInfo.fullName,
        department: personInfo.department,
        approvedBy: personInfo.approvedBy,
        reason: reasonOne,
        onDate: datePickerValueOne.toString(),
        startTime: timePickerValueFromOne.toString(),
        endTime: timePickerValueToOne.toString(),
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  const handleSubmitTwo = () => {
    console.log(personInfo);
    const url = "http://localhost:8080/api/form/form-OnLeave";
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({
        fullName: personInfo.fullName,
        department: personInfo.department,
        approvedBy: personInfo.approvedBy,
        reason: reasonTwo,
        startTime: datePickerValueFromTwo.toString(),
        endTime: datePickerValueToTwo.toString(),
        morning: !bgBtnColorMorning,
        afternoon: !bgBtnColorAfternoon,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }


  useEffect(() => {
    const url = "http://localhost:8080/api/form/form-CompensatingTimekeeping";
    fetch(url, {
      method: "GET",
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.form_data);
        setPersonInfo({
          fullName: data.form_data.fullname,
          department: data.form_data.department,
          approvedBy: data.form_data.approvedBy,
        })
      }
      )
  }, [])

  const SentButton = styled(Button)({
    borderRadius: "5px",
    fontSize: "1.2rem",
    alignItems: "center",
    textaAlign: "center",
    color: "#FFFFFF",
    backGround: "#A855F7",
    border: "0.9px solid #A855F7",
  });

  const DateTimeTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "gray",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
        height: "50px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& .MuiInputBase-input": {
      position: "relative",
      borderRadius: "5px",
      fontSize: "1rem",
      padding: "10px",
    },
  });

  return (
    <div className="sub-menu" role="tablist">
      <TabContext value={value} >
      <TabList onChange={handleChange}
        sx={{
          '& .MuiTabPanel-root': {
            padding: '0px'
          }
        }}
      >
        <Tab
          value="one" label="chấm công bù"
          sx={{
            fontSize: '1rem',  marginLeft: '3.5rem',
            '& .MuiTabPanel-root': {
              padding: '0px',
            },
          }}
        />
        <Tab value="two" label="xin nghỉ phép" className="title1"
          sx={{
            marginLeft: '5rem', fontSize: '1rem',
            '& .MuiTabPanel-root': {
              padding: '0px'
            }
          }}
        />
      </TabList>

      <TabPanel className="a" value="one"
        sx={{
          '& .MuiTabPanel-root': {
            padding: '0px',
          },
        }}
      >
        <div className="form-1">
          <div className="property department">
            <span className="property-name department-name">Tên phòng ban:</span>
            <input
              value={personInfo.department}
              disabled
              type="text"
              className="property-text rectangle-request" />
          </div>

          <div className="property">
            <span className="property-name">Họ và tên:</span>
            <input
              value={personInfo.fullName}
              disabled
              type="text"
              className="property-text rectangle-request"
            />
          </div>

          <div className="property">
            <TextField
              value={reasonOne}
              id="outlined-basic"
              label="Lí do"
              variant="outlined"
              multiline
              rows={3}
              onChange={e => setReasonOne(e.target.value)}
            />
          </div>

          <div className="property">
            <span className="property-name">Người duyệt:</span>
            <input
              value={personInfo.approvedBy}
              disabled
              type="text"
              className="property-text rectangle-request"
            />
          </div>

          <div className="property">
            <span className="property-name" style={{ fontWeight: 'bold' }}>Thời gian chấm công bù:</span>
            <LocalizationProvider
              style={{ marginTop: '0.4rem' }}
              dateAdapter={AdapterDateFns}
              adapterLocale={localeMap[locale]}
            >
              <DatePicker
                value={datePickerValueOne}
                onChange={(newValue) => setDatePickerValueOne(newValue)}
                renderInput={(params) => (
                  <DateTimeTextField {...params} />
                )}
              />
            </LocalizationProvider>
          </div>

          <div className="time">
            <div className="time-property">
              <span className="property-name">Từ giờ:</span>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={localeMap[locale]}
              >
                <TimePicker
                  value={timePickerValueFromOne}
                  onChange={(newValue) => setTimePickerValueFromOne(newValue)}
                  renderInput={(params) => (
                    <DateTimeTextField {...params}
                      sx={{ width: '12rem', minWidth: '0.1rem', maxWidth: '16rem' }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="time-property">
              <span className="property-name">Đến giờ:</span>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={localeMap[locale]}
              >
                <TimePicker
                  value={timePickerValueToOne}
                  onChange={(newValue) => setTimePickerValueToOne(newValue)}
                  renderInput={(params) => (
                    <DateTimeTextField
                      sx={{ width: '12em', minWidth: '0.1rem', maxWidth: '16rem' }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="btn-send">
            <SentButton
              className="btn-Sent"
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              onClick={handleSubmitOne}
            >
              {" "}
              Gửi{" "}
            </SentButton>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="b" value="two"
        sx={{
          '& .MuiTabPanel-root': {
            padding: '0px',
          },
        }}
      >
        <div className="form-2">
          <div className="property department">
            <span className="property-name department-name">Tên phòng ban:</span>
            <input
              value={personInfo.department}
              disabled
              type="text"
              className="property-text rectangle-request" />
          </div>

          <div className="property">
            <span className="property-name">Họ và tên:</span>
            <input
              value={personInfo.fullName}
              disabled
              type="text"
              className="property-text rectangle-request"
            />
          </div>

          <div className="property">
            <TextField
              value={reasonTwo}
              id="outlined-basic"
              label="Lí do"
              variant="outlined"
              multiline
              rows={3}
              onChange={e => setReasonTwo(e.target.value)}
            />
          </div>

          <div className="property">
            <span className="property-name">Người duyệt:</span>
            <input
              value={personInfo.approvedBy}
              disabled
              type="text"
              className="property-text rectangle-request"
            />
          </div>
          <span style={{ fontWeight: "bold" }}>Thời gian nghỉ phép</span>
          <div className="time">
            <div className="time-property">
              <span className="property-name">Từ ngày:</span>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={localeMap[locale]}
              >
                <DatePicker
                  value={datePickerValueFromTwo}
                  onChange={(newValue) => setDatePickerValueFromTwo(newValue)}
                  renderInput={(params) => (
                    <DateTimeTextField {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="time-property">
              <span className="property-name">Đến ngày:</span>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={localeMap[locale]}
              >
                <DatePicker
                  value={datePickerValueToTwo}
                  onChange={(newValue) => setDatePickerValueToTwo(newValue)}
                  renderInput={(params) => (
                    <DateTimeTextField {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="time">
            <div className="time-property btn-morning">
              <Button
                className="time-property"
                style={bgBtnMorning}
                onClick={() => {
                  setBgBtnColorMorning(!bgBtnColorMorning);
                  bgBtnColorMorning ? setBgBtnMorning({ backgroundColor: 'aqua' }) : setBgBtnMorning({ backgroundColor: 'transparent' });
                }}
              >
                <span className="property-name">Ca sáng:</span>
                <span>8:00 - 12:00</span>
              </Button>
            </div>
            <div className="time-property btn-morning">
              <Button
                className="time-property"
                style={bgBtnAfternoon}
                onClick={() => {
                  setBgBtnColorAfternoon(!bgBtnColorAfternoon);
                  bgBtnColorAfternoon ? setBgBtnAfternoon({ backgroundColor: 'aqua' }) : setBgBtnAfternoon({ backgroundColor: 'transparent' });
                }}
              >
                <span className="property-name">Ca chiều:</span>
                <span>13:30 - 17:30</span>
              </Button>
            </div>
          </div>

          <div className="btn-send">
            <SentButton
              className="btn-Sent"
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              onClick={handleSubmitTwo}
            >
              {" "}
              Gửi{" "}
            </SentButton>
          </div>
        </div>
      </TabPanel>
    </TabContext>
    </div>
  );

}


export default FormRequest;