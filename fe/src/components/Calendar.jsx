import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';

export default function Calendar() {

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <img src={icon1} alt='icon1' className='icon'/>
          <ListItemText class='jss9'>Chấm công</ListItemText>
        </MenuItem>

        <MenuItem>
          <img src={icon2} alt='icon2' className='icon'/>
          <ListItemText class='jss9'>Đơn từ</ListItemText>
        </MenuItem>

        <Divider />
        <span className='text'> Quản lí </span>
        
        <MenuItem>
          <img src={icon3} alt='icon3' className='icon'/> 
          <ListItemText class='jss9'>Bảng công</ListItemText>
          
        </MenuItem>
        <MenuItem>
          <img src={icon4} alt='icon4' className='icon'/> 
          <ListItemText class='jss9'>Nhân sự</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
