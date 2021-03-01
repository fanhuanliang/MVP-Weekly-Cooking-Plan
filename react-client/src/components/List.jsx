import React, {useState} from 'react';
import ListItem from './ListItem.jsx';
import Checkbox from '@material-ui/core/Checkbox';

const List = (props) => {
  const [style, setStyle] = useState([]);
  const handleCheck =(e)=> {
    let data=style;
    if (style.indexOf(e.target.value) === -1) {
      data.push(e.target.value)
    } else {
      let idx = style.indexOf(e.target.value);
      data.splice(idx, 1);
    }
    setStyle(data)
    props.pass()
    if(data.length===0) {
      props.getData()
    } else {
      props.getData(data.join())
    }
  }

  return (
    <div className='recipes'>
      <h4> Recipes Component </h4>
      <div>
      <Checkbox color='secondary' value='Breakfast' onChange={(e)=>handleCheck(e)}/>Breakfast
      <Checkbox color='secondary' value='Lunch' onChange={(e)=>handleCheck(e)}/>Lunch
      <Checkbox color='secondary' value='Dinner' onChange={(e)=>handleCheck(e)}/>Dinner
      </div>
      <select onChange={props.sortRecipe}>
            <option value='undefined'>All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
      { props.recipes.map(recipe => <ListItem key={recipe._id} recipe={recipe} addMeal={props.addMeal} deleteData={props.deleteData}/>)}
    </div>
  )
}
export default List;