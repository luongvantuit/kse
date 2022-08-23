import React from "react";
import { useState, useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../public/css/browse-menus.css';

export default function BrowseMenus() {

   const [arrFrom, setArrFrom] = useState([]);
   const [arrTo, setArrTo] = useState([]);

   const [checked, setChecked] = useState(false);

   useEffect(() => {
      const url = "http://localhost:8080/api/form/form-CompensatingTimekeepingAllUnChecked";
      fetch(url)
         .then(res => res.json())
         .then(data => {
            const form = data.form;
            const newForm = form.map(function (child) {
               return {
                  ...child,
                  date: `${new Date(child.onDate).getDate()}-${(new Date(child.onDate).getMonth() + 1)}`,
                  time: `${(new Date(child.startTime)).getHours()}h${(new Date(child.startTime)).getMinutes()}p - ${(new Date(child.endTime)).getHours()}h${(new Date(child.endTime)).getMinutes()}p`,
                  countTime: new Date((new Date(child.endTime)).getTime() - (new Date(child.startTime)).getTime()).toISOString().slice(11, 19),
               }
            }
            )
            // console.log('newFormUnChecked: ', newForm);
            setArrFrom(newForm)
         })
   }, [checked]);

   useEffect(() => {
      const url = "http://localhost:8080/api/form/form-CompensatingTimekeepingAllChecked";
      fetch(url)
         .then(res => res.json())
         .then(data => {
            const form = data.form;
            const newForm = form.map(function (child) {
               return {
                  ...child,
                  date: `${new Date(child.onDate).getDate()}-${new Date(child.onDate).getMonth()}`,
                  time: `${(new Date(child.startTime)).getHours()}h${(new Date(child.startTime)).getMinutes()}p - ${(new Date(child.endTime)).getHours()}h${(new Date(child.endTime)).getMinutes()}p`,
                  countTime: new Date((new Date(child.endTime)).getTime() - (new Date(child.startTime)).getTime()).toISOString().slice(11, 19),
               }
            }
            )
            // console.log('newFormChecked: ', newForm);
            setArrTo(newForm)
         })
   }, [checked]);

   const handleCheck = index => {
      document.getElementById(`test-${index}`).style.display = "none";
      if (index > -1) {
         const a = arrFrom.splice(index, 1);
         a[0].isChecked = true;
         console.log(a);
         const url = "http://localhost:8080/api/form/form-CompensatingTimekeeping";
         fetch(url, {
            method: "PUT",
            body: JSON.stringify({
               username: a[0].username,
               reason: a[0].reason,
               date: a[0].date,
               time: a[0].time,
               countTime: a[0].countTime,
               isChecked: a[0].isChecked,
            }),
            headers: {
               "content-type": "application/json",
            }
         })
            .then(response => response.json())
            .then(data => console.log(data.success))
         setChecked(!checked);
         // setArrTo(prev => prev.concat(a));
         // setArrFrom(arrFrom);
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
               <div className="unprocessed-form-browse">
                  <div>
                     <span style={{ fontWeight: '500', fontSize: '1.2rem', marginLeft: '1rem' }}>Chấm công bù</span>
                  </div>
                  <div className="unprocessed-form-browse-header">
                     <span className="unprocessed-form-browse-header-item-fullName">Nhân sự</span>
                     <span className="unprocessed-form-browse-header-item-date">Ngày</span>
                     <span className="unprocessed-form-browse-header-item-time">Thời gian</span>
                     <span className="unprocessed-form-browse-header-item-reason">Lí do</span>
                     <span className="unprocessed-form-browse-header-item-department">Phòng ban</span>
                     <span className="unprocessed-form-browse-header-item-countTime">Số giờ chấm bù</span>
                     <span className="unprocessed-form-browse-header-item-icon">Phê duyệt</span>
                  </div>
                  <hr />
                  <div className="unprocessed-form-browse-body">

                     {arrFrom.map((data, index) => (
                        <div className="unprocessed-form-browse-body-item" id={`test-${index}`} key={index}>
                           <span className="unprocessed-form-browse-body-item-fullName">{data.fullName}</span>
                           <span className="unprocessed-form-browse-body-item-date">{data.date}</span>
                           <span className="unprocessed-form-browse-body-item-time">{data.time}</span>
                           <span className="unprocessed-form-browse-body-item-reason">{data.reason}</span>
                           <span className="unprocessed-form-browse-body-item-department">{data.department}</span>
                           <span className="unprocessed-form-browse-body-item-countTime">{data.countTime}</span>
                           <span className="unprocessed-form-browse-body-item-icon">
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
               <div className="processed-form-browse">
                  <div>
                     <span style={{ fontWeight: '500', fontSize: '1.2rem', marginLeft: '1rem' }}>Chấm công bù</span>
                  </div>
                  <div className="processed-form-browse-header">
                     <span className="processed-form-browse-header-item-fullName">Nhân sự</span>
                     <span className="processed-form-browse-header-item-date">Ngày</span>
                     <span className="processed-form-browse-header-item-time">Thời gian</span>
                     <span className="processed-form-browse-header-item-reason">Lí do</span>
                     <span className="processed-form-browse-header-item-department">Phòng ban</span>
                     <span className="processed-form-browse-header-item-countTime">Số giờ chấm bù</span>
                  </div>
                  <hr />
                  <div className="processed-form-browse-body">
                     {arrTo.map((data, index) => (
                        <div className="processed-form-browse-body-item" key={index}>
                           <span className="processed-form-browse-body-item-fullName">{data.fullName}</span>
                           <span className="processed-form-browse-body-item-date">{data.date}</span>
                           <span className="processed-form-browse-body-item-time">{data.time}</span>
                           <span className="processed-form-browse-body-item-reason">{data.reason}</span>
                           <span className="processed-form-browse-body-item-department">{data.department}</span>
                           <span className="processed-form-browse-body-item-countTime">{data.countTime}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </TabPanel>

         </TabContext>
      </div>
   )
}