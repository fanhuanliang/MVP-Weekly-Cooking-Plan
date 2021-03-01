import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import WeeklyPlan from './components/WeeklyPlan.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import axios from 'axios';
import Data from './components/Data.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentDate: [],
      currentData: [],
      update: true,
      isOpen:false,
      pass: true,
      openList: false
    }
  }

  sortRecipe(style) {
      this.setState({
      pass: false})
    this.getData(style.target.value)
  }

  changePass() {
    this.setState({
      pass: false})
  }
  currentDate(e, idx) {
      this.setState({
        currentDate: [e, idx],
        update: false,
        pass: true
      })
  }
  addMeal(e) {
    if (this.state.update === false) {
      this.setState({
        currentData:[{
          idx: this.state.currentDate[1],
          style: this.state.currentDate[0],
          meal: e.target.innerHTML
        }],
        currentDate: [],
        update: true
      })
    }
  }

  postData(e, item, style, ingredients, directions, nutritionInfo) {
    e.preventDefault();
    const data = {
      item: item,
      style: style,
      ingredients: ingredients,
      directions: directions,
      nutritionInfo: nutritionInfo
    }
    if (data.item !== '' && data.style !== '' && data.ingredients !== ''&&data.directions !== '' && data.nutritionInfo !== '') {
      axios.post('/items', data)
        .then((response) => {
          this.getData();
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.setState({isOpen:false})
        })
    } else {
      alert('cannot be blank')
    }
  }

  getData(sortData) {
    axios.get(`/items/${sortData}`)
      .then((response) => {
        this.setState({
          recipes: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteData(e) {
    axios.delete(`/items/${e.target.value}`)
    .then((res) => {
      this.getData()
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <h1>Weekly Cooking Plan</h1>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Data />
            <WeeklyPlan currentDate={this.currentDate.bind(this)} currentData={this.state.currentData} update={this.state.update} pass={this.state.pass}/>
            <Button variant="contained" size="small" color="primary" onClick={()=>this.setState({openList:true,pass: false})}>Finish</Button>
            <ShoppingList openList={this.state.openList} closeList={()=>this.setState({openList: false, pass: false})} />
          </Grid>
          <Grid item xs={6}>
            <Button  variant="contained" size="small" color="primary" onClick={()=>this.setState({isOpen:true, pass: false})}>Add Recipe</Button>
            <AddRecipe open={this.state.isOpen} onClose={() =>this.setState({isOpen:false})} postData={this.postData.bind(this)} />
            <List sortRecipe={this.sortRecipe.bind(this)} recipes={this.state.recipes} addMeal={this.addMeal.bind(this)} getData={this.getData.bind(this)} pass={this.changePass.bind(this)} deleteData={this.deleteData.bind(this)} />
          </Grid>
        </Grid>


      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));