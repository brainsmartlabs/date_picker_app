import React, { useEffect, useState, useRef } from 'react'
import format from 'date-fns/format';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { TextField } from '@mui/material';

function CalenderComp() {

    const [calendar, setCalender] = useState('');
    const [open, setOpen] = useState(false);

    function handleSelect(date) {
        //console.log(date);
        //console.log(format(date, 'dd/MM/yyyy'));
        setCalender(format(date, 'dd/MM/yyyy'));
    }

    const refOne = useRef(null);

    function hideOnEscape(e) {
        //console.log(e.key);
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    function hideOnClickOutside(e) {
        //console.log(refOne.current);
        //console.log(e.target);
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        setCalender(format(new Date(), 'dd/MM/yyyy'));
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true)
    }, []);

    return (
        <div style={{ 'textAlign': 'center' }}>
            <TextField
                label="Select Date"
                name="date"
                variant="outlined"
                value={calendar}
                onClick={() => setOpen(open => !open)}
            />
            <br />
            <div ref={refOne}>
                {open &&
                    <Calendar
                        date={new Date()}
                        onChange={handleSelect}
                    />
                }
            </div>
        </div>
    )
}

export default CalenderComp