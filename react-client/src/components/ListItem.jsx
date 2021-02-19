import React from 'react';
import Button from '@material-ui/core/Button';

const ListItem = (props) => {
  // console.log(props)
  return (
    <div className='recipeList'>
       <Button variant="contained" color="primary">
      <div className='recipeItem' onClick={props.addMeal}>
       {props.recipe.item}
      </div>
      </Button>
      <button value={props.recipe.item} onClick={props.deleteData}><i value={props.recipe.item} className="fa fa-trash"/></button>
    </div>
  )
}

export default ListItem;