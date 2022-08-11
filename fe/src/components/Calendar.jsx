import React from 'react'
import { TextField } from '@material-ui/core';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import Logo from '../image/image_logo_bts.PNG';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';


export default function Calendar() {

    const [value, setValue] = React.useState(null);
  
    return (
      <React.Fragment> 
            <Paper sx={{ width: 320, maxWidth: '100%', height: 648}}>
                        <MenuList className='option'>
                            <MenuItem className='option1'>
                                <img src={icon1} alt='icon1' className='icon'/>
                                <ListItemText className='jss9'>Chấm công</ListItemText>
                            </MenuItem>

                            <MenuItem className='option2'>
                                <img src={icon2} alt='icon2' className='icon'/>
                                <ListItemText className='jss9'>Đơn từ</ListItemText>
                            </MenuItem>

                            
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
            
            
                   
      </React.Fragment>
    )
  }