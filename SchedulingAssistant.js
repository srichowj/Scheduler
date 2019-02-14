import React, { Component } from 'react';

import Checkbox from './Checkbox';

class Cls1 extends Component {


  constructor(props) {

    super(props);
    //this.handleavailability1 = this.handleAuthorChange.bind(this);

    this.state = {
      form: {},
      form1: {},
      list: [],
      list1: [],
      MONDAY: [],
      TUESDAY: [],
      WEDNESDAY: [],
      THURSDAY: [],
      FRIDAY: [],
      employee: []
    };
    this.handleChange = this.handleChange.bind(this);

    console.log(this.state.form);
  }
  //console.log(state);
  handlefirstname(e) {

    let { form } = this.state;
    form.firstname = e.target.value
    this.setState({ form });
  }

  handleMonday = (e) => {
    console.log("handleavailability1 method has been called")
    var a = document.getElementById("name").value;
    //let {form} = this.state;
    //var d = document.getElementById("day").value;
    let { form } = this.state;
    if (document.getElementById("shift1").checked) {
      //let {form} = this.state;

      form.monday = a + "S1";


    }

    if (document.getElementById("shift2").checked) {
      console.log("check 2 has been clicked");
      //let {form} = this.state;
      form.monday = a + "S2";

    }
    this.setState({ form });


    const data = JSON.parse(JSON.stringify(this.state.form.monday));

    console.log("who can work on monday ? =" + data);
  }

  handleTuesday = (e) => {
    console.log("handleTuesday method has been called")
    var a = document.getElementById("name").value;
    //let {form} = this.state;
    //var d = document.getElementById("day").value;

    if (document.getElementById("shift1").checked) {
      let { form1 } = this.state;
//form1.tuesday = "initial value";
      form1.tuesday = a + "S1";
      this.setState({ form1 });

    }
    let { form1 } = this.state;
    if (document.getElementById("shift2").checked) {
      console.log("check 2 has been clicked");
      //let { form1 } = this.state;
      form1.tuesday = a + "S2";
      this.setState({ form1 });

    }
    


   // let data1 = JSON.parse(json.data1 || '{}');
   //const data = Text.parse(Text.stringify(this.state.form1.tuesday));

   const data = JSON.parse(JSON.stringify(this.state.form1.tuesday));
    //const data = JSON.parse(JSON.stringify(this.state.form1.tuesday || '{}' ));

    //let data = JSON.parse(json.data || '{}');

    console.log("who can work on tuesday ? =" + data);
  }

  handleWednesday = (e) => {
    console.log("handleWednesday method has been called")
    var a = document.getElementById("name").value;
    //let {form} = this.state;
    //var d = document.getElementById("day").value;

    if (document.getElementById("shift1").checked) {
      let { form } = this.state;

      form.wednesday = a + "S1";
      this.setState({ form });

    }

    if (document.getElementById("shift2").checked) {
      console.log("check 2 has been clicked");
      let { form } = this.state;
      form.wednesday = a + "S2";
      this.setState({ form });

    }


    const data = JSON.parse(JSON.stringify(this.state.form.wednesday));

    console.log("who can work on wednesday ? =" + data);
  }


  handleThursday = (e) => {
    console.log("handleThursday method has been called")
    var a = document.getElementById("name").value;
    let { form } = this.state;


    if (document.getElementById("shift1").checked) {
      //let {form} = this.state;

      form.thursday = a + "S1";
      //this.setState({form});

    }

    if (document.getElementById("shift2").checked) {
      console.log("check 2 has been clicked");
      // let {form} = this.state;
      form.thursday = a + "S2";
      //this.setState({form});

    }
    this.setState({ form });

    const data = JSON.parse(JSON.stringify(this.state.form.thursday));

    console.log("who can work on thursday ? =" + data);
  }

  handleFriday = (e) => {
    console.log("handleFriday method has been called")
    var a = document.getElementById("name").value;
    //let {form} = this.state;
    //var d = document.getElementById("day").value;

    if (document.getElementById("shift1").checked) {
      let { form } = this.state;

      form.friday = a + "S1";
      this.setState({ form });

    }

    if (document.getElementById("shift2").checked) {
      console.log("check 2 has been clicked");
      let { form } = this.state;
      form.friday = a + "S2";
      this.setState({ form });

    }


    const data = JSON.parse(JSON.stringify(this.state.form.friday));

    console.log("who can work on friday ? =" + data);
  }
  handleChange(e) {

    let { form } = this.state;
    //form.employee.clear();
    form.employee = e.target.value
    this.setState({ form });
    console.log("selected employee" + form.employee);


    const data = JSON.parse(JSON.stringify(this.state.form.employee));

    let { state } = this;
    state.list1.push(data);

    this.state.showTable = true;
    this.setState(state);
    const lis = JSON.parse(JSON.stringify(this.state.list1));
    //console.log(lis)
  }

  display = (e) => {

    const data = JSON.parse(JSON.stringify(this.state.form.monday));


    console.log("Display method has been called");

    console.log(data);

    let { state } = this;
    state.list.push(data);
    this.setState(state);
    var ll1 = JSON.parse(JSON.stringify(this.state.list));

    console.log("final value" + ll1);
    return ll1
  }

  saveMonday = (e) => {


    console.log("saveMonday method has been called");
    const data = JSON.parse(JSON.stringify(this.state.form.monday));
    let { state } = this;
    state.MONDAY.push(data);
    this.setState(state);
    var mondaydata = JSON.parse(JSON.stringify(this.state.MONDAY));
    console.log("monday data is" + mondaydata);
    // document.getElementById("monday").innerHTML = lsit;
    document.getElementById("shift1").checked = false;
    return mondaydata;

  }

  saveTuesday = () => {


    console.log("saveTuesday method has been called");
    const data = JSON.parse(JSON.stringify(this.state.form.tuesday));
    let { state } = this;
    state.TUESDAY.push(data);
    this.setState(state);
    var tuesdaydata = JSON.parse(JSON.stringify(this.state.TUESDAY));
    console.log("tuesday data is" + tuesdaydata);
    // document.getElementById("monday").innerHTML = lsit;
    document.getElementById("shift1").checked = false;
    return tuesdaydata;


  }

  saveWednesday = () => {


    console.log("saveWednesday method has been called");
    const data = JSON.parse(JSON.stringify(this.state.form.wednesday));
    let { state } = this;
    state.WEDNESDAY.push(data);
    this.setState(state);
    var wednesdaydata = JSON.parse(JSON.stringify(this.state.WEDNESDAY));
    console.log("wednesday data is" + wednesdaydata);
    // document.getElementById("monday").innerHTML = lsit;
    document.getElementById("shift1").checked = false;
    return wednesdaydata;


  }


  saveThursday = () => {


    console.log("saveThursday method has been called");
    const data = JSON.parse(JSON.stringify(this.state.form.thursday));
    let { state } = this;
    state.THURSDAY.push(data);
    this.setState(state);
    var thursdaydata = JSON.parse(JSON.stringify(this.state.THURSDAY));
    console.log("thursdaydata data is" + thursdaydata);
    // document.getElementById("monday").innerHTML = lsit;
    document.getElementById("shift1").checked = false;
    return thursdaydata;


  }

  saveFriday = () => {


    console.log("saveFriday method has been called");
    const data = JSON.parse(JSON.stringify(this.state.form.friday));
    let { state } = this;
    state.FRIDAY.push(data);
    this.setState(state);
    var fridaydata = JSON.parse(JSON.stringify(this.state.FRIDAY));
    console.log("thursdaydata data is" + fridaydata);
    // document.getElementById("monday").innerHTML = lsit;
    document.getElementById("shift1").checked = false;
    return fridaydata;


  }





  showMonday = (prop1 = "propert 1") => {

    //const mon= 
    //console.log("showmonday" +mon)
    //document.getElementById("monday").innerHTML = mon;

  }
  //document.getElementById("monday").innerHTML = showMonday;


  deleteRow(index) {
    let { state } = this
    let x = this.state.list;

    x.splice(index, 1)

    this.setState({ list: x });
  }


  render() {
    //console.log({state});
    return (
      <body>
        <h3 align='center'>Scheduling Assistant</h3>

        <div align='center'>
          <span hidden>
            First Name:<input type="text" placeholder="Enter Name" value={this.state.form.firstname}
              onChange={this.handlefirstname.bind(this)} />
          </span><br />
          <div hidden>
            Availability:<br />
            S1: <input type="checkbox" value="S1" onChange={this.handleMonday.bind(this)} />
          </div>
          <label>
            Pick Employee:
          <select onChange={this.handleChange.bind(this)} id="name">
              <option value="Srinu">Srinu</option>
              <option value="Praneeth">Praneeth</option>
              <option value="Prudhvi">Prudhvi</option>
              <option value="Sahil">Sahil</option>
            </select>

          </label>
        </div>




        <p></p>

        <div>


          {this.state.list1.length > 0 ?
            <React.Fragment>
              <p>Select the shift availability of {document.getElementById("name").value}</p>

              <table border="1" align="center">

                <tr>

                  <th>firstname</th>
                  <th id="day">Mon</th>
                  <th id="day">Tue</th>
                  <th >Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
                <tr>
                  <td>

                  </td>

                  <td>
                    <td><Checkbox prop1={this.state} prop2={this.handleMonday} prop3={this.saveMonday} /></td>
                  </td>
                  <td><Checkbox prop1={this.state} prop2={this.handleTuesday} prop3={this.saveTuesday} /></td>
                  <td><Checkbox prop1={this.state} prop2={this.handleWednesday} prop3={this.saveWednesday} /></td>
                  <td><Checkbox prop1={this.state} prop2={this.handleThursday} prop3={this.saveThursday} /></td>
                  <td><Checkbox prop1={this.state} prop2={this.handleFriday} prop3={this.saveFriday} /></td>
                  <td><Checkbox /></td>
                </tr>


              </table>
            </React.Fragment>
            : <h3>Table Gone :( </h3>}



        </div>
        <div>

          <div id="monday">
            <input type="submit" value="show monday availability" onClick={this.showMonday.bind(this)} />


          </div>

        </div>
      </body>



    )

  }
}



export default Cls1;

