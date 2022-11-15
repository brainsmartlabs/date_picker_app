import React, { useEffect, useState, useRef } from 'react'
import format from 'date-fns/format';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { TextField } from '@mui/material';
import { addDays } from 'date-fns';

function DateRangePickerComp() {

  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }]);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  function hideOnEscape(e) {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function hideOnClickOutside(e) {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);


  return (
    <div style={{ 'textAlign': 'center' }}>
      <TextField
        label="Select Date"
        name="date"
        variant="outlined"
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} -to- ${format(range[0].endDate, 'dd/MM/yyyy')}`}
        onClick={() => setOpen(open => !open)}
      />
      <br />
      <div ref={refOne}>
        {open &&
          <DateRangePicker
            editableDateInputs={true}
            onChange={item => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction='horizontal'
          />
        }
      </div>
    </div>
  )
}

export default DateRangePickerComp