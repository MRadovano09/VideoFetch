import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; //we're gonna create a state here so that we make a controlled input field - so that the text input is not stored within the DOM but within the react. We link it to the component via the 'value' property. But we also need an onChange handler

  //our method here will be a callback in the render part, so we're gonna make it an arrow function

  onInputChange = event => {
    this.setState({ term: event.target.value });
     // console.log(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault() //we're eliminating the default behavior of form submittal. The point is to prevent the page from refreshing each time we submit smth.
    
    // TODO: make sure we call callback from parent component (App). - will help us with the API request
  this.props.onFormSubmitProp(this.state.term);
};

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
