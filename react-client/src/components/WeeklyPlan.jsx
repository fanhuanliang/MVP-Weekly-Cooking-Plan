import React from 'react';
import DailyPlan from './DailyPlan.jsx';

const day = [
  {
    Monday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
  {
    Tuesday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
  {
    Wednesday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
  {
    Thursday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
  {
    Friday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
  {
    Saturday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
  {
    Sunday: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  },
];

const deleteMeal = (e, style, idx) => {
  // console.log(e.target.innerHTML, style, idx);
  const date = Object.keys(day[idx])[0];
  const arr = day[idx][date][style];
  const index = arr.indexOf(e.target.innerHTML);
  arr.splice(index, 1);
  // console.log(date)
  // console.log(day[idx][date][style])
  // console.log(index)
  // console.log(arr)
  // console.log(day[idx])

}

const WeeklyPlan = (props) => {
  // console.log('week',props.update)
  if (props.currentData.length !== 0 && props.update === true && props.pass) {
    // console.log(props.update)
    for (let i = 0; i < props.currentData.length; i++) {
      let index = props.currentData[i].idx;
      let obj = Object.values(day[props.currentData[i].idx])[0];
      let date = Object.keys(day[props.currentData[i].idx])[0];
      for (let key in obj) {
        if(props.currentData[i].style === key) {
          day[index][date][key].push(props.currentData[i].meal);
        }
      }
    }
    // console.log(day)
  }
  return (
    <div className='weekly'>
      <h4> Week Schedule </h4>
      {day.map((day, idx) => <DailyPlan date={Object.keys(day)} day={Object.values(day)} idx={idx} key={idx} currentDate={props.currentDate} deleteMeal={deleteMeal}/>)}
    </div>
  )
}
export default WeeklyPlan;