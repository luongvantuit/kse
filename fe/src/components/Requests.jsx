import React from 'react'
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import enLocale from "date-fns/locale/en-NZ";
import { styled } from '@mui/material/styles';

import './Requests.css';

import Logo from '../image/image_logo_bts.PNG';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';
import SendIcon from '@mui/icons-material/Send';


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
                                            <input type='text' className='jss10 rectangle'/>
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
                                            <span className='jss7 jss12'>Nguời duyệt:</span>
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


