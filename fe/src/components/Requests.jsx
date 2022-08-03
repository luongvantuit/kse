import React from 'react'
import { TextField } from '@material-ui/core';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import enLocale from "date-fns/locale/en-US";


import './Requests.css';

import Logo from '../image/image_logo_bts.PNG';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';




export default function Compensation() {

    const [value, setValue] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const localeMap = {
        en: enLocale,
    };
    const [locale] = React.useState('en');
    const [datePickerValue, setDatePickerValue] = React.useState(new Date());

    
    return (
        <React.Fragment>
            <div className='compensation-background'>
                <div className='compensation-container'>
                    <img src={Logo} alt='logo' className='logo'/>
                    <h6 className='jss6'>HYBE Co.</h6>
                </div>

                <div className='menu'>
                    <button className='option1'>
                        <img src={icon1} alt='icon1' className='icon'/>
                        <span class='jss9'>Chấm công</span>
                    </button>

                    <button className='option2'>
                        <img src={icon2} alt='icon2' className='icon'/>
                        <span class='jss9'>Đơn từ</span>
                    </button>

                    <span className='text'> Quản lí </span>

                    <button className='option3'>
                        <img src={icon3} alt='icon3' className='icon'/>
                        <span class='jss9'>Bảng công</span>
                    </button>

                    <button className='option4'>
                        <img src={icon4} alt='icon4' className='icon'/>
                        <span class='jss9'>Nhân sự</span>
                    </button>
                </div>

                <div className='sub-menu' role="tablist">
                    <div className='jss1'>
                        <TabContext value={value}>
                            <TabList onChange={handleChange} centered={true} >

                                <Tab value="one" label="chấm công bù"  />

                                <Tab value="two" label="xin nghỉ phép" className='title1' />

                                <Tab value="three" label="làm thêm giờ" className='title2'/>

                                
                            </TabList>

                            <TabPanel value='one'>
                                <div className='form-comp'>
                                    <div className='jss4'>
                                        <div className='jss5'>
                                            <span className='jss7'>Tên phòng ban:</span>
                                            <input type='text' className='jss10 rectangle'/>
                                        </div>

                                        <div>
                                            <span className='jss7 jss8'>Họ và tên:</span>
                                            <input type='text' className='jss10 rectangle1'/>
                                        </div>

                                        
                                        <TextField
                                            className='jss11'
                                            id="outlined-basic" 
                                            label="Lí do" 
                                            variant="outlined"
                                            rows={4}
                                            multiline
                                            
                                            
                                        />

                                        <div>
                                            <span className='jss7 jss12'>Nguời duyệt:</span>
                                            <input type='text' className='jss10 rectangle2'/>
                                        </div>

                                        <div>
                                            <span className='jss7 jss13'>Thời gian làm thêm:</span>
                                            <div className='calendar'>
                                                <LocalizationProvider
                                                
                                                dateAdapter={AdapterDateFns}
                                                adapterLocale={localeMap[locale]}
                                                >
                                                    <DatePicker
                                                        value={datePickerValue}
                                                        onChange={(newValue) => setDatePickerValue(newValue)}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                            
                                                </LocalizationProvider>
                                            </div>
                                            
                                        </div>

                                     

                                        <div>
                                            <span className='jss7 jss14'>Từ giờ:</span>
                                            <span className='jss7 jss15'>Đến giờ:</span>

                                            
                                        </div>

                                        <div className='jss16'>
                                            <button className='btn-Sent'>Gửi</button>
                                        </div>

                                        
                                    </div>
                                </div>
                            </TabPanel>
                        </TabContext>
                        
                    </div>
                    
                </div>

            

                
            </div>

           

                

                



            
            
            
        </React.Fragment>
    )
}


