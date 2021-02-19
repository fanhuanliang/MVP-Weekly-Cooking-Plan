import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';

const AddRecipe_Styles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '50px',
  zIndex: 1000,
  color:'white',
  fontsize: '20px',
}

const Outer_Styles = {
  position: 'fixed',
  top:0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
// const unit = ['', 'teaspoon', 'tablespoon', 'fluid ounce', 'cup', 'quart', 'pound', 'ounce'];
const AddRecipe = ({ open, children, onClose, postData}) => {
  const [item, setItem] = useState('');
  const [style, setStyle] = useState('Breakfast');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState('');

  const initState = () => {
    setItem('')
    setStyle('')
    setIngredients('')
    setDirections('')
    setNutritionInfo('')
  }
  if (!open) return null
  // console.log(postData)
  return (
    <div style={Outer_Styles}>
      <form style={AddRecipe_Styles} onSubmit={(e) => (
        postData(e, item, style, ingredients, directions,nutritionInfo),
        initState()
        )}>
      <Button onClick={onClose}>Close</Button>
      <div>
        <label>
          Recipe's Name:
          <input type="text" value={item} onChange={e => setItem(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Style:
          {/* <input type="text" value={style} onChange={e => setStyle(e.target.value)} /> */}
          <select onChange={e => setStyle(e.target.value)}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          NutritionInfo:
          <input type="text" value={nutritionInfo} onChange={e => setNutritionInfo(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Ingredients:
          <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Directions:
          <input type="text" value={directions} onChange={e => setDirections(e.target.value)} />
        </label>
      </div>
        <input style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "9px 18px",
        fontSize: "18px"
    }} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddRecipe;


