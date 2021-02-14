import React, { Component } from "react";


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "new movie",
      description: "desc",
      date: 2021,
      poster: "https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg"
      
    };
  }
  handleInput = (e) => {
    this.setState({ item: e.target.value });
  };
  render() {
    return (
      <div id="myDIV">
        <h2 className="title" style={{ margin: "5px" }}>
          Add Movie
        </h2>
        <input
        //   onChange={this.handleInput}
        //   value={this.state.item}
        //   id="myInput"
          placeholder="Add movie..."
        />
        <button  onClick={() => {
            alert("movie added successfully..")
          }}>Add</button>

        
      </div>
    );
  }
}

export default Add;