import React from "react";
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

export default function FormRequest() {
  const localeMap = {
    en: enLocale,
  };

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [locale] = React.useState("en");
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  const [timePickerValue, setTimePickerValue] = React.useState(new Date());

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

  const ReasonTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "gray",
      fontSize: "1rem",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
        width: "497px",
        height: "120px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& .MuiInputBase-input": {
      position: "relative",
      borderRadius: "5px",
      fontSize: "1rem",
    },
  });

  return (
    <div className="sub-menu" role="tablist">
      <div className="tab-menu">
        <TabContext value={value}>
          <TabList onChange={handleChange} centered>
            <Tab value="one" label="chấm công bù" />

            <Tab value="two" label="xin nghỉ phép" className="title1" />

            <Tab value="three" label="làm thêm giờ" className="title2" />
          </TabList>

          <TabPanel className="a" value="one">
            <div className="form-comp">
              <div className="jss4">
                <div className="jss5">
                  <span className="jss7">Tên phòng ban:</span>
                  <input type="text" className="jss10 rectangle-request" />
                </div>

                <div>
                  <span className="jss7 jss8">Họ và tên:</span>
                  <input
                    type="text"
                    className="jss10 rectangle-request rectangle1"
                  />
                </div>

                <div>
                  <ReasonTextField
                    className="jss11"
                    id="outlined-basic"
                    label="Lí do"
                    variant="outlined"
                  />
                </div>

                <div>
                  <span className="jss7 jss12">Người duyệt:</span>
                  <input
                    type="text"
                    className="jss10 rectangle-request rectangle2"
                  />
                </div>

                <div>
                  <span className="jss7 jss13">Thời gian chấm công bù:</span>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <DatePicker
                      value={datePickerValue}
                      onChange={(newValue) => setDatePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField className="calendar" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div>
                  <span className="jss7 jss14">Từ giờ:</span>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <TimePicker
                      value={timePickerValue}
                      onChange={(newValue) => setTimePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField className="starttime" {...params} />
                      )}
                    />
                  </LocalizationProvider>

                  <span className="jss7 jss15">Đến giờ:</span>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <TimePicker
                      value={timePickerValue}
                      onChange={(newValue) => setTimePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField
                          className="starttime endtime"
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div className="jss16">
                  <SentButton
                    className="btn-Sent"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon />}
                  >
                    {" "}
                    Gửi{" "}
                  </SentButton>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel className="b" value="two">
            <div className="form-leave">
              <div className="jss4 jss17">
                <div className="jss5">
                  <span className="jss7">Tên phòng ban:</span>
                  <input type="text" className="jss10 rectangle-request" />
                </div>

                <div>
                  <span className="jss7 jss8">Họ và tên:</span>
                  <input
                    type="text"
                    className="jss10 rectangle-request rectangle1"
                  />
                </div>

                <div>
                  <ReasonTextField
                    className="jss11"
                    id="outlined-basic"
                    label="Lí do"
                    variant="outlined"
                  />
                </div>

                <div>
                  <span className="jss7 jss12">Người duyệt:</span>
                  <input
                    type="text"
                    className="jss10 rectangle-request rectangle2"
                  />
                </div>

                <div>
                  <span className="jss7 jss13 texttime">
                    Thời gian nghỉ phép:
                  </span>

                  <span className="jss7 datefrom">Từ ngày:</span>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <DatePicker
                      value={datePickerValue}
                      onChange={(newValue) => setDatePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField
                          className="calendarfrom"
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>

                  <span className="jss7 datefrom dateto">Đến ngày:</span>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <DatePicker
                      value={datePickerValue}
                      onChange={(newValue) => setDatePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField
                          className="calendarfrom calendarto"
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div className="shiftToleave">
                  <span className="jss7 timeleavefrom texttime">
                    Ca nghỉ phép:
                  </span>

                  <button className="morning">Ca sáng </button>
                  <button className="morning afternoon">Ca chiều</button>
                </div>

                <div className="jss16">
                  <SentButton
                    className="btn-Sent jss16"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon />}
                  >
                    {" "}
                    Gửi{" "}
                  </SentButton>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel className="c" value="three">
            <div className="form-overtime">
              <div className="jss4">
                <div className="jss5">
                  <span className="jss7">Tên phòng ban:</span>
                  <input type="text" className="jss10 rectangle-request" />
                </div>

                <div>
                  <span className="jss7 jss8">Họ và tên:</span>
                  <input
                    type="text"
                    className="jss10 rectangle-request rectangle1"
                  />
                </div>

                <div>
                  <ReasonTextField
                    className="jss11"
                    id="outlined-basic"
                    label="Lí do"
                    variant="outlined"
                  />
                </div>

                <div>
                  <span className="jss7 jss12">Người duyệt:</span>
                  <input
                    type="text"
                    className="jss10 rectangle-request rectangle2"
                  />
                </div>

                <div>
                  <span className="jss7 jss13">Thời gian chấm làm thêm:</span>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <DatePicker
                      value={datePickerValue}
                      onChange={(newValue) => setDatePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField className="calendar" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div>
                  <span className="jss7 jss14">Từ giờ:</span>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <TimePicker
                      value={timePickerValue}
                      onChange={(newValue) => setTimePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField className="starttime" {...params} />
                      )}
                    />
                  </LocalizationProvider>

                  <span className="jss7 jss15">Đến giờ:</span>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={localeMap[locale]}
                  >
                    <TimePicker
                      value={timePickerValue}
                      onChange={(newValue) => setTimePickerValue(newValue)}
                      renderInput={(params) => (
                        <DateTimeTextField
                          className="starttime endtime"
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div className="jss16">
                  <SentButton
                    className="btn-Sent"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon />}
                  >
                    {" "}
                    Gửi{" "}
                  </SentButton>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
