import React, { Component } from "react";

class PersonCard extends Component{
    render(){
        // const{lastName, firstName, age,hColor} = this.props
        return(
            <div>
            <h2>{this.props.lastName},{this.props.firstName}</h2>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hColor}</p>
            </div>
        );
    }

}

export default PersonCard;