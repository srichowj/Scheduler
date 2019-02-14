import React, { Component } from 'react';



class Checkbox extends Component{


     
      handleavailability1(e){

      console.log("nsdlbfdhgbpahgbvaeoig");

        let {form} = this.state;
       form.cb1 = e.target.value
        this.setState({form});
        const data = JSON.parse(JSON.stringify(this.state.form.cb1));
        console.log("data value" +data);
       // 
     }
     
    
    
    
    render(){
    
    
    
    
    return(
    
      <body>
    <div >

    S1: <input type="checkbox" id="shift1" value="S1" name="shift"  onChange={this.props.prop2}/> <br/>
    S2: <input type="checkbox" value="S2" id="shift2" onChange={this.props.prop2}/> <br/>
    S3: <input type="checkbox" value="S3" name="shift" /> <br/>


      <input type="submit" onClick={this.props.prop3} />
     


    </div>
    <input type="reset"></input><br/>
    </body>
    
    );
    
    }
    
    }
    export default  Checkbox;