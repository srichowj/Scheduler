import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Comp_parent extends Component {

  render() {
    return (
      <div>
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Comp4 />
        <Comp5 />

      </div>


    );


  }


}

class Comp1 extends Component {
  render() {
    return (
      <div align='center' className="Comp1_css">
        <h3 align='center'>Component 1</h3>

        <header className="App-header">

          <h1 className="App-title">React Tutorial - Srinivas Jaladi</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

      </div>
    );
  }
}

class Comp2 extends Component {

  render() {
    return (
      //<from>
      <body className="Comp2_css">
        <div >

          <p>I'm from Component 2 (Comp2)</p></div>

        <h3 align='center'>Component 2</h3>
        <h4 align='center'>Employee Dashboard</h4>


        First Name:<input type="text" name="lname" /> <br></br>



      </body>
      // </from>

    )

  }
}

class Comp3 extends Component {

  constructor(props) {

    super(props);

    this.state = {

      value1: "value stored in state"
    }
  }
  render() {
    return (
      <div>
        <p align='center'>Example on State</p>
        <h4>{this.state.value1}</h4>
        <p>{(this.props.A) + (this.props.B)}</p>
      </div>
    )



  }

}

class Comp4 extends Component {

  render() {

    return (

      <div>
        <h4>Example on Props</h4>
        {this.props.prop1}<br />
        {this.props.prop2}<br />
        {this.props.prop3}<br />

      </div>


    )

  }

}
Comp4.defaultProps = {

  prop1: 10,
  prop2: 20,
  prop3: 30

}
export default Comp_parent;


class Comp5 extends Component {


  constructor(props) {

    super(props);

    this.state = {

      value:''

    }
    this.updateState = this.updateState.bind(this);
  }


  updateState(e) {

    

console.log("updateState method has been called")
    this.setState({ value: e.target.value });





  }

  render() {
    return (

      <div>
        <h3>Example on updating state from child component</h3>
        <Child1 Prop1={this.state.value} updateStateProp={this.updateState} />
        
      </div>




    );
  }

}

class Child1 extends Component {

  constructor() {
    super();
    //var value1: {this.props.Prop1}

  } 

  render() {

    return (
      <div>
       Enter some text <input type="text" value={this.props.Prop1} onChange={this.props.updateStateProp} />
         <p>Value from the child</p>
         <p>{this.props.Prop1}</p>
      </div>

    );

  }


}


