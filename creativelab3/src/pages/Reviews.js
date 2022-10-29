import React from 'react';
/*global task*/

class Reviews extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        review: '', 
        reviews:["This was the best Tandoori Chicken recipe I've ever made!", "That irish stew was nasty. Don't ever use this recipe", "These recipes are pretty good, but might I comment on how wonderfully functional this website is", "That sugar pie is scrumptious", "10/10 reccomend the Spaghetti Bolognese"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //alert('A character was entered: ' + this.state.formtask);
    this.setState({review: event.target.value});
  }

  handleSubmit(event) {
    //let array = [];
    //let that = this;
    //alert('A review was submitted: ' + this.state.review);
    //this.setState({reviews:[...this.state.reviews, 
        //{this.state.review}]
    //});
    //array.push(this.state.review);
    //that.setState({reviews: array});
    this.setState({ 
       reviews: this.state.reviews.concat([this.state.review])
    })

    
    this.setState({review:""});
    event.preventDefault();
  }
  
  render() {
    const listItems = this.state.reviews.map((thisreview, index) => 
      <li key={index}>{thisreview}</li>
    );
    return (
        <div className="reviewsPage">
          <h1> Reviews </h1>
          <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
            <label>
              Leave a review:
              <input type="text" value={this.state.review} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <ul>{listItems}</ul>
        </div>
    );
  }
}
  
  export default Reviews;