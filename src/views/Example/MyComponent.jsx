import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component{
  /* object của javaScript gồm key và value */
  state = {
    firstName :"",
    lastName :"",
    arrJob : [
      {id : "1", job : "Dev", Salary : "500 $"},
      {id : "2", job : "Beginner", Salary : "300 $"},
      {id : "3", job : "Project Manager", Salary : "1500 $"},
    ]
  }
  handleChangFirstName = (e)=>{
    this.setState({
      firstName:e.target.value
    })
  }
  handleChangLastName = (e)=>{
    this.setState({
      lastName: e.target.value
    })
  }
  handleClick = (e)=>{
    e.preventDefault();
    alert("Đã submit thành công")
  }
  render(){ 
    return(
      <React.Fragment>
       
  <form action="/action_page.php">
      <label for="fname">First name:</label><br/>
      <input 
      type="text"  
      value={this.state.firstName}
      onChange={(e)=>{this.handleChangFirstName(e)}}
      /><br/>
      <label for="lname">Last name:</label><br/>
      <input
       type="text" 
       value={this.state.lastName}
       onChange={(e)=>this.handleChangLastName(e)}
       /><br/><br/>
      <input 
      type="submit"
      value="Đăng nhập"
      onClick={(e)=>this.handleClick(e)}
      />
         <div>
        Xin chào mình là {this.state.firstName} {this.state.lastName}
      </div>
      <ChildComponent arrJob={this.state.arrJob}/>
    
  </form>
      </React.Fragment> 
    )
  }
}


export default MyComponent