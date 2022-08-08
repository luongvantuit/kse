import React from 'react'
// import { TextField } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import enLocale from "date-fns/locale/en-NZ";
import { styled } from '@mui/material/styles';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import '../components/Requests.css';

import Logo from '../image/image_logo_bts.PNG';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';
import SendIcon from '@mui/icons-material/Send';


export default function Requests() {

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const localeMap = {

        en: enLocale,
    };
    
    const [locale] = React.useState('en');
    const [datePickerValue, setDatePickerValue] = React.useState(new Date());
    const [timePickerValue, setTimePickerValue] = React.useState(new Date());

    const SentButton = styled(Button) ({
        borderRadius: '5px',

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '19px',
        alignItems: 'center',
        textaAlign: 'center',

        color: '#FFFFFF',

        backGround: '#A855F7',
        border: '0.9px solid #A855F7',

    });

    const ReasonTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'gray',
          fontFamily: 'Inter',
          fontSize: '20px',
         
        },
        
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',
            width: '480px',
            height: '120px',
           
        },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
        },
        '& .MuiInputBase-input': {
          borderRadius: '5px',
          
          fontSize: 18,
       
          position: 'relative',
      
          fontFamily: 'Inter',
          
        },
    });


    return (
        <React.Fragment>
            <div className='compensation-background'>
                <header className='compensation-container'>
                    <img src={Logo} alt='logo' className='logo'/>
                    <h6 className='jss6'>HYBE Co.</h6>
                </header>

                <div className='menu-left'>
                    
                    <Paper sx={{ width: 320, maxWidth: '100%'}}>
                        <MenuList className='option'>
                            <MenuItem className='option1'>
                                <img src={icon1} alt='icon1' className='icon'/>
                                <ListItemText className='jss9'>Chấm công</ListItemText>
                            </MenuItem>

                            <MenuItem className='option2'>
                                <img src={icon2} alt='icon2' className='icon'/>
                                <ListItemText className='jss9'>Đơn từ</ListItemText>
                            </MenuItem>

                            <Divider />
                            <span className='text'> Quản lí </span>
                            
                            <MenuItem className='option3'>
                                <img src={icon3} alt='icon3' className='icon'/> 
                                <ListItemText className='jss9'>Bảng công</ListItemText>
                            
                            </MenuItem>
                            <MenuItem className='option4'>
                                <img src={icon4} alt='icon4' className='icon'/> 
                                <ListItemText className='jss9'>Nhân sự</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </div>

                <div className='sub-menu' role="tablist">
                    <div className='jss1'>
                        <TabContext value={value}>
                            <TabList onChange={handleChange} centered={true}>

                                <Tab value="one" label="chấm công bù"  />

                                <Tab value="two" label="xin nghỉ phép" className='title1' />

                                <Tab value="three" label="làm thêm giờ" className='title2'/>

                                
                            </TabList>
                            <div>
                            <TabPanel className='aa' value='one'>
                                <div className='form-comp'>
                                    <div className='jss4'>
                                        <div className='jss5'>
                                            <span className='jss7'>Tên phòng ban:</span>
                                            <input type='text' className='jss10 rectangle-request'/>
                                        </div>

                                        <div>
                                            <span className='jss7 jss8'>Họ và tên:</span>
                                            <input type='text' className='jss10 rectangle1'/>
                                        </div>

                                        <div>
                                            <ReasonTextField
                                            
                                            className='jss11'
                                            id="outlined-basic" 
                                            label="Lí do" 
                                            variant='outlined'
                                       
                                            />
                                        </div>
                                        

                                        <div>
                                            <span className='jss7 jss12'>Người duyệt:</span>
                                            <input type='text' className='jss10 rectangle2'/>
                                        </div>

                                        <div>
                                            <span className='jss7 jss13'>Thời gian làm thêm:</span>
                                           
                                            <LocalizationProvider
                                            
                                            dateAdapter={AdapterDateFns}
                                            adapterLocale={localeMap[locale]}
                                            >
                                                <DatePicker
                                                    
                                                    value={datePickerValue}
                                                    onChange={(newValue) => setDatePickerValue(newValue)}
                                                    renderInput={(params) => <TextField className='calendar' {...params} />}
                                                />
                                        
                                            </LocalizationProvider>
                                            
                                            
                                        </div>

                                        <div className=''>
                                            <span className='jss7 jss14'>Từ giờ:</span>
                                            <LocalizationProvider
                                            
                                            dateAdapter={AdapterDateFns}
                                            adapterLocale={localeMap[locale]}
                                            >
                                                <TimePicker
                                                    value={timePickerValue}
                                                    onChange={(newValue) => setTimePickerValue(newValue)}
                                                    renderInput={(params) => <TextField variant="standard" className='start-time' {...params} />}
                                                    />
                                        
                                            </LocalizationProvider>

                                            <span className='jss7 jss15'>Đến giờ:</span>
                                            <LocalizationProvider
                                            
                                            dateAdapter={AdapterDateFns}
                                            adapterLocale={localeMap[locale]}
                                            >
                                                <TimePicker
                                                    value={timePickerValue}
                                                    onChange={(newValue) => setTimePickerValue(newValue)}
                                                    renderInput={(params) => <TextField variant="standard" className='start-time end-time' {...params} />}
                                                    />
                                        
                                            </LocalizationProvider>


                                            
                                        </div>

                                        <div className='jss16'>
                                            <SentButton className='btn-Sent' variant='contained' color='secondary' endIcon={<SendIcon />}> Gửi </SentButton >
                                        </div>

                                        
                                    </div>
                                </div>
                            </TabPanel>

                            </div>

                        </TabContext>
                     </div>
                </div>
             </div>
        </React.Fragment>
    )
}


