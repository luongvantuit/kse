import React from 'react'
import { TextField } from '@material-ui/core';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function Calendar() {

    const [value, setValue] = React.useState(null);
  
    return (
      <React.Fragment> 
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
                   
      </React.Fragment>
    )
  }