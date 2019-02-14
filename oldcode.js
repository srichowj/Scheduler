


class Cls1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showTable: false,
        form: {
  
        },
        list: []
      };
  
    }
  
    handleip1(e) {
  
      let {form} = this.state;
      form.firstname = e.target.value
      this.setState({ form });
    }
    handleip2(e) {
      let {form} = this.state;
      form.lastname = e.target.value
      this.setState({ form });
    }
  
  
    setGender(e) {
      let {form} = this.state;
      form.gender = e.target.value;
      this.setState({ form });
    }
    handlecountry(e) {
  
      let {form} = this.state;
      form.country = e.target.value;
      this.setState({ form });
    }
    display(e) {
  
      const data = JSON.parse(JSON.stringify(this.state.form));
      let {state} = this;
  
  
      state.list.push(data);
  
  
      this.state.showTable = true;
  this.setState(state);
  
  
  
    }
  
  
    deleteRow(index) {
  
      console.log(index);
  
  
      let {state} = this
      let x = this.state.list;
  
      x.splice(index, 1)
  
      this.setState({ list: x });
  
  
    }
  
    editRow(e, item) {
      let {state} = this;
      console.log(e);
  
      this.state.form = item;
      this.setState(state)
      console.log(state.form)

    }
  
    saveRow(e, item) {
  
      let {state} = this;
  
      this.setState(state);
    }
  
    render() {
  
  
      return (
  
  
  
        <div>
          <span>
            <input type="text" placeholder="Enter Name" value={this.state.form.firstname}
              onChange={this.handleip1.bind(this)} />
          </span>
          <span>
  
  
            <input type="text" placeholder="Enter Last Name" value={this.state.form.lastname}
              onChange={this.handleip2.bind(this)} />
          </span>
  
  
          <div onChange={this.setGender.bind(this)}>
            <input type="radio" value="MALE" name="gender" /> Male
                   <input type="radio" value="FEMALE" name="gender" /> Female
  
              </div>
  
          COUNTRY
  
          <select name="country" value={this.value} onChange={this.handlecountry.bind(this)}>
            <option value="">Select Country</option>
            <option value="INDIA">INDIA</option>
            <option value="SRILANKA">SRILANKA</option>
            <option value="BANGLADESH">BANGLADESH</option>
  
          </select>
  
  
          <h3>{this.state.firstname}</h3>
          <h3>{this.state.lastname}</h3>
          <h3>{this.state.gender}</h3>
          <h3>{this.state.country}</h3>
  
  
  
          <input type="submit" onClick={this.display.bind(this)} />
          {this.state.list.length > 0 ?
            <table>
  
              <tr>
  
                <th>Firstname</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Action</th>
  
  
  
              </tr>
              {this.state.list.map(
  
                (item, index) => {
  
                  return (
  
                    <tr>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.gender}</td>
                      <td>{item.country}</td>
                      <td>
                        Delete:
                    <input type="Submit" name="Delete" onClick={() => this.deleteRow(index)} />
                        Edit:
                   <input type="Submit" name="Edit" onClick={() => this.editRow(index, item)} />
                        Save:
                    <input type="Submit" name="Save" onClick={() => this.saveRow(index, item)} />
  
                      </td>
                    </tr>
  
                  )
  
                }
              )
              }
  
            </table>
            : <h3>Table Gone :( </h3>}
        </div>
  
  
  
  
      )
  
    }
  
  }
  
  
  class Welcomepage  extends React.Component {
    
    constructor(props){
      super(props)
      
      this.state = {
        canLogin:false
    }
      this.handlepassword = this.handlepassword.bind(this);
    }
    
    handlepassword(e){
      
     // e.preventDefault();
     // this.state.password=e.target.value;
       this.setState({password: e.target.value});
    //  console.log(this.state.password);
      //this.setState(state); 
      /*  let {form} = this.state;
       form.password = e.target.value;
       this.setState({ form });
      console.log(form); */ 
      /* let {state} = this;
      state.password=e.target.value;
      this.setState(state)
      console.log(state) */
      
      
      
      }
    
    
        show(e)
    {
      
      
   console.log(this.state.password)
      if(this.state.password==='srinu'){return <Cls1 />} 
      //{<Cls2 />}
        
     // else(alert('INvalid password'))
    this.setState({canLogin: true })
      
     }
    
    render()
  
  {
  
  
      
    return(
      <div>
  <h3>Welcome User</h3>
  <input type="text" name="password" placeholder="Enter password" onChange={this.handlepassword} value={this.state.password}/> <br></br>
  <input type="Submit" value="submit" onClick={this.show.bind(this)} />
        
        
     
      </div>
     
    )
  }
    
  
    
    
  }
  
  
        
  ReactDOM.render(<Welcomepage />, document.getElementById('app'))