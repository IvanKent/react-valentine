import './App.css';
import { useState } from 'react';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const phrases = [
  '',
  'No',
  'Are you sure?',
  'Why???',
  'PLLSSSSSS!!',
  'pretty pllsssssssss!',
  'Oh... Really?'
];


function App() {
  const [noCount, setNoCount] = useState(1)
  const [isAgree, setAgree] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [done, setDone] = useState(false);

  const images = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3hpYXU3Z2IxNnljYzFmbWl2NHRwbjczb282MXhuamZnNDNobXFuciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DtBHcARLqNAvVnYsyD/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDM5MGdmbGJrMzlhNmlnNzBvejB1aG4xazlsbXBoMjNpam9xMDJ0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wmOyZYoGzz003R03Y/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3hhMndmOXB0a3V4M2dycHMzcXF6YXJ4cmd3dm53MnhwOXNseWJ4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lk6AqFz5KRWPQaAxbk/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG94d2FhdTYwOXJuc2ptcDI2ZHUxN3EzeDY5c2NzMzAydDY1bmdwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxQNkPwez3jhEHKZW/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdndsOHB2andybHczaGx2N290NW05eHM5aGE3NDh3ZjNzNmFkY25pdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q1R1ZiUskINVOn6bz3/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDZ6cDlqZnlwMGszaHFmMTIyOXdkZXZndjdrc2Y5ZTNqMmd6cTJ0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W5aG2ZXhxF4l0Z9Iha/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDMyMnRudmMwOG1raXYzNDFzY2Y0Njc1eWhuZmMwd2Y5cXV0M3hyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LmtoQ5QktbaR8QWIBa/giphy.gif'
  ]

  function handleNoClick(){
    if(noCount === phrases.length - 1){
      setNoCount(phrases.length -1)
    }else{
      setNoCount(noCount + 1)
    }

  }

  function handleYesClick(){
    setAgree(true)
  }

  return(
    <div className='container'>
      {isAgree ? <div className='container'>
        {done ? null : <img className='imgPic2' src={images[0]} alt='valentine'/>}
        {/* <h1 className='valentineAgree'>❤️❤️Yessss!!!❤️❤️</h1> */}
        {schedule && 
          <div className='scheduleContainer'>
            <img className='schedulePic' src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnoyYWdqd3N6NnkzMDFqeDg3Mjh1dW1xd3U2MzF5ZmxmNmY3czF5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gDfteqLchLcRTtjAD7/giphy.gif' alt=''/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Our Date Schedule"
                sx={{
                  color: 'red'
                }}
                />
              </DemoContainer>
            </LocalizationProvider>
              <button className='buttonSchedule' onClick={() => {
                setSchedule(!schedule)
                setDone(!done)
              }}>Submit</button>

          </div>
        }
        <button onClick={() => (setSchedule(!schedule))} style={(schedule || done) ? {display: 'none'} : null}
        className='buttonBook'
        >Schedule OUR Date here!</button>

        {done && <h1 className='doneText'>See you! ❤️❤️</h1>}
        {/* {done && <h1 className='doneText2'>Take Care!</h1>} */}
        

      </div> : 
      <div className='container'>
        <img className='imgPic' src={images[noCount]} alt='anya crying'/>
        <h2 className='valentine'>Will you be my Valentine?</h2>
        <div className='buttonContainer'>
          <button className='yes' onClick={handleYesClick}>Yes</button>
          <button className='no' onClick={handleNoClick}>{phrases[noCount]}</button>
        </div>

      </div>
        }
    </div>
  )
}

export default App;
