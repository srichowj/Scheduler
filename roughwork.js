var values = [];
var shifts = form.shift;

for (var i=0, iLen=shifts.length; i<iLen; i++) {
  if (shifts[i].checked) {
    values.push(shifts[i].value);
  }
}
// Do something with values
alert("shifts: " + values.join(', '));
return values;
console.log("shifts value" +shifts);


<div align='center'>
          <span hidden>
            First Name:<input type="text" placeholder="Enter Name" value={this.state.form.firstname}
              onChange={this.handlefirstname.bind(this)} />
          </span><br />
<div hidden> 


handlefirstname(e){

  let {form} = this.state;
  form.firstname = e.target.value
  this.setState({ form });
} 
