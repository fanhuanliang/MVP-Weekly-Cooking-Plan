import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const DailyPlan = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(false);
  const handleOpen = () => {
    isOpen?setIsOpen(false) : setIsOpen(true);
    icon?setIcon(false):setIcon(true);
  }
  const dataStyle = {

  }
  return (
    <div className='daily'>
      <div className='dailyPlan'>
        <Button color='default' onClick={handleOpen}>{props.date}{icon ? <span>➖</span>:<span>➕</span>}</Button>

        {isOpen ?
        <div>
        <div className='breakfast' onClick={(e) => props.currentDate('breakfast', props.idx)}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" size="small">Breakfast</Button>
            </Grid>
            <Grid item xs={10}>
              <div className='breakfast' onClick={(e) => props.deleteMeal(e, 'breakfast', props.idx)}>
                {props.day[0].breakfast.map((item, idx) => <span key={idx}><Button variant="contained" color="secondary" size="small">{item}</Button></span>)}
              </div>
            </Grid>
          </Grid>

        </div>
        <div className='lunch' onClick={(e) => props.currentDate('lunch', props.idx)}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" size="small">Lunch</Button>
            </Grid>
            <Grid item xs={10}>
              <div className='lunch' onClick={(e) => props.deleteMeal(e, 'lunch', props.idx)}>
                {props.day[0].lunch.map((item, idx) => <span key={idx}><Button variant="contained" color="secondary" size="small">{item}</Button></span>)}
              </div>
            </Grid>
          </Grid>
        </div>

        <div className='dinner' onClick={(e) => props.currentDate('dinner', props.idx)}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" size="small">Dinner</Button>
            </Grid>
            <Grid item xs={10}>
              <div className='dinner' onClick={(e) => props.deleteMeal(e, 'dinner', props.idx)}>
                {props.day[0].dinner.map((item, idx) => <span key={idx}><Button variant="contained" color="secondary" size="small">{item}</Button></span>)}
              </div>
            </Grid>
          </Grid>
        </div>
        </div>
        :null}
      </div>
    </div>
  )
}
export default DailyPlan;