import React from "react";
import { useState, useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../public/css/form-on-leave.css';

export default function FormOnLeave() {

   const [arrFrom, setArrFrom] = useState([]);
   const [arrTo, setArrTo] = useState([]);
   const [checked, setChecked] = useState(false);

   useEffect(() => {
      const url = "http://localhost:8080/api/form/form-OnLeaveAllUnChecked";
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setArrFrom(data.form)
         })
   }, [checked]);

   useEffect(() => {
      const url = "http://localhost:8080/api/form/form-OnLeaveAllChecked";
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setArrTo(data.form)
         })
   }, [checked]);

   const handleCheck = index => {
      document.getElementById(`test-${index}`).style.display = "none";
      if (index > -1) {
         const a = arrFrom.splice(index, 1);
         a[0].isChecked = true;
         // a[0].isCheckedSalary = document.getElementsByName(`checked-${index}`)[0].checked ? false : true;
         const vak = document.getElementsByName(`checked-${index}`)[0].checked;
         console.log('có lương hay ko?: ',vak ? false: true);
         console.log('a: ', a);
         const url = "http://localhost:8080/api/form/form-OnLeave";
         fetch(url, {
            method: "PUT",
            body: JSON.stringify({
               username: a[0].username,
               startDate: a[0].startDate,
               isChecked: a[0].isChecked,
               isCheckedSalary: vak ? false : true,
            }),
            headers: {
               "content-type": "application/json",
            }
         })
            .then(response => response.json())
            .then(data => console.log(data.success))
         setChecked(!checked);
      }
   }

   const [value, setValue] = useState("one");
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className="body-component-browse-menus">
         <TabContext value={value}
         >
            <TabList onChange={handleChange}
               sx={{
                  '& .MuiTabs-flexContainer': {
                     paddingLeft: '1rem',
                     paddingRight: '1rem',
                     borderRadius: '10px',
                     borderWidth: '1px',
                     borderColor: '#f4f4f5',
                     borderStyle: 'solid',
                     backgroundColor: '#f4f4f5',
                  }
               }}
            >
               <Tab
                  value="one" label="Chưa xử lí"
                  sx={{
                     fontSize: '1rem',
                  }}
               />
               <Tab value="two" label="Đã duyệt" className="title1"
                  sx={{
                     fontSize: '1rem',
                     marginLeft: '5rem'
                  }}
               />

            </TabList>

            <TabPanel className="unprocessed" value="one"
               sx={{
                  '& .MuiTabPanel-root': {
                     padding: '0px'
                  }
               }}
            >
               <div className="unprocessed-form-leave">
                  <div>
                     <span style={{ fontWeight: '500', fontSize: '1.2rem', marginLeft: '1rem' }}>Xin nghỉ phép</span>
                  </div>
                  <div className="unprocessed-form-leave-header">
                     <span className="unprocessed-form-leave-header-item-fullName">Nhân sự</span>
                     <span className="unprocessed-form-leave-header-item-time">Thời gian</span>
                     <span className="unprocessed-form-leave-header-item-reason">Lí do</span>
                     <span className="unprocessed-form-leave-header-item-department">Phòng ban</span>
                     <span className="unprocessed-form-leave-header-item-checked">Nghỉ phép không lương</span>
                     <span className="unprocessed-form-leave-header-item-unchecked">Nghỉ phép có lương</span>
                     <span className="unprocessed-form-leave-header-item-date">Số ngày nghỉ phép</span>
                     <span className="unprocessed-form-leave-header-item-icon">Phê duyệt</span>
                  </div>
                  <hr />
                  <div className="unprocessed-form-leave-body">

                     {arrFrom.map((data, index) => (
                        <div className="unprocessed-form-leave-body-item" id={`test-${index}`} key={index}>
                           <span className="unprocessed-form-leave-body-item-fullName">{data.fullName}</span>
                           <span className="unprocessed-form-leave-body-item-time">{`${data.endDate} - ${data.startDate} `}</span>
                           <span className="unprocessed-form-leave-body-item-reason">{data.reason}</span>
                           <span className="unprocessed-form-leave-body-item-department">{data.department}</span>
                           <span className="unprocessed-form-leave-body-item-checked">
                              <input
                                 type="radio"
                                 name={`checked-${index}`}
                                 className="check-box"
                              />
                           </span>
                           <span className="unprocessed-form-leave-body-item-unchecked">
                              <input
                                 defaultChecked={true}
                                 type="radio"
                                 name={`checked-${index}`}
                                 className="check-box"
                              />
                           </span>
                           <span className="unprocessed-form-leave-body-item-date">{data.countDate}</span>
                           <span className="unprocessed-form-leave-body-item-icon">
                              <CheckCircleOutlineIcon
                                 onClick={() => handleCheck(index)}
                                 className="icon-check"
                                 sx={{
                                    fontSize: '1.8rem',
                                 }}
                              />
                           </span>
                        </div>
                     ))}

                  </div>
               </div>
            </TabPanel>

            <TabPanel className="processed" value="two"
               sx={{
                  '& .MuiTabPanel-root': {
                     padding: '0px'
                  }
               }}
            >
               <div className="processed-form-leave">
                  <div>
                     <span style={{ fontWeight: '500', fontSize: '1.2rem', marginLeft: '1rem' }}>Xin nghỉ phép</span>
                  </div>
                  <div className="processed-form-leave-header">
                     <span className="processed-form-leave-header-item-fullName">Nhân sự</span>
                     <span className="processed-form-leave-header-item-time">Thời gian</span>
                     <span className="processed-form-leave-header-item-reason">Lí do</span>
                     <span className="processed-form-leave-header-item-department">Phòng ban</span>
                     <span className="processed-form-leave-header-item-checked">Nghỉ phép</span>
                     <span className="processed-form-leave-header-item-date">Số ngày nghỉ phép</span>
                  </div>
                  <hr />
                  <div className="processed-form-leave-body">
                     {arrTo.map((data, index) => (
                        <div className="processed-form-leave-body-item" key={index}>
                           <span className="processed-form-leave-body-item-fullName">{data.fullName}</span>
                           <span className="processed-form-leave-body-item-time">{`${data.endDate} - ${data.startDate}`}</span>
                           <span className="processed-form-leave-body-item-reason">{data.reason}</span>
                           <span className="processed-form-leave-body-item-department">{data.department}</span>
                           <span className="processed-form-leave-body-item-checked">{data.isCheckedSalary ? "Có lương" : "Không lương"}</span>
                           <span className="processed-form-leave-body-item-date">{data.countDate}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </TabPanel>

         </TabContext>
      </div>
   )
}