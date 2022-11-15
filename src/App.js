import { Chip, Divider } from '@mui/material';
import './App.css';
import CalenderComp from './components/CalenderComp';
import DateRangeComp from './components/DateRangeComp';
import DateRangePickerComp from './components/DateRangePickerComp';
import MUIDateRange from './components/MUIDateRange';

function App() {
  return (
    <div>
      <Divider> <Chip label="Calender" /> </Divider>
      <CalenderComp />

      <Divider> <Chip label="Date Range" /> </Divider>
      <DateRangeComp />

      <Divider> <Chip label="Date Range Picker" /> </Divider>
      <DateRangePickerComp />

      <Divider> <Chip label="MUI Date Range Picker" /></Divider>
      <div style={{'textAlign': 'center'}}><MUIDateRange/></div>

    </div>
  );
}
export default App;
