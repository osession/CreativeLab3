import React from "react";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        value: "",
        mymeals: [],
        instructions: "Hello",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.test = this.test.bind(this);
}

handleChange(event) {
  this.setState({ value: event.target.value })
  //console.log(this.state.value);

  var myurl = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + event.target.value;
  //console.log("URL " + myurl);
  let array= [];
  let that = this;
  fetch(myurl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json)
      //console.log(this.state.value)
      for (let i = 0; i < json.meals.length; i++) {
        array.push(json.meals[i].strMeal)
      };
      that.setState({mymeals: array})
      //console.log(that.state.mymeals)
      //console.log(array);
    });
};

handleSubmit(event) {
  event.preventDefault();
  //console.log("handling submit");
  this.setState({ value: event.target.value })
  //console.log(this.state.value)
  if (this.state.value === "")
    return;
  let searchKey = this.state.value.replaceAll(" ", "_");
  //console.log(searchKey)  
  var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchKey + "&APPID=1";
  //console.log(url)
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json)	
      console.log(json.meals[0].strInstructions)
      this.setState({instructions: json.meals[0].strInstructions},
      () => {console.log(this.state.instructions)});
      console.log(this.state.instructions)
  //alert("submit!!!!")
  });
};
test() {
};
    render() {

    const listItems = this.state.mymeals.map((meal, i) =>
      <li key={i}>{meal}</li>
    );
    /*const instructions = this.state.instructions((instructions) =>
      <div>
        <p>{instructions}</p>
      </div>
    );*/
      return (
      <div className = "homePage">
  
  
    
  <h1>Creative Lab 3: Recipes</h1>
  
<form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}> 
  <div id="search">
    <label>Enter a dish name:</label>
    <input type="text" value={this.state.value} onChange={this.handleChange}/>
    Suggestion (type the first letter for a list): <span id="txtHint">Empty</span>
    <input id="mealSubmit" type="submit" value="Submit"></input>
  </div>
  <ul>{listItems}</ul>
</form>

<div id="page">

  <div id="allRecipe">
    <div id="allIngredients">
      <div className="header">
        <h2>Ingredients</h2>
      </div>
      <div id="anotherdiv">
        <div id="ingredientResults">
        </div>
        <div id="measurementResults">
        </div>
      </div>
    </div>
    <div id="allInstructions">
      <h2>Instructions</h2>
        <p>{this.state.instsructions}</p>
    </div>
  </div>
</div>
      </div>
      )
    };

  };
  
  export default Home;