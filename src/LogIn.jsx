import React, {Component} from "react";

export default class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {
           email:"", passwords:"", message:"",
        }
    }
    

    render(){
        return (
            <div className="col-lg-9">
                <h4 className="m-1 p-2 border-bottom">Login</h4>
                {/*Email Starts*/}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value = {this.state.email}
                    onChange={(event)=>{this.setState({email:event.target.value})}}></input>
                    
                </div>
                {/*Email Ends*/}
                {/*Password Starts*/}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={this.state.passwords}
                    
                    onChange={(event)=>{this.setState({passwords:event.target.value})}}></input>
                    
                    
                </div>
                {/*Password Ends*/}
                {/*Submit button*/}
                
                <div className="text-right">
                    {this.state.message}
                    <button className="btn btn-primary m1" onClick={this.onLoginClick}>
                        Submit and LogIn
                    </button>
                </div>
                
                {/*Submit button*/}
                {/*Submit button*/}
            </div>
        );
    }

    onLoginClick = async() =>{
        var resonse = await fetch (`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"});
        var body = resonse.json();

        if (body.length>0)
        {
            //success message
           
            this.setState({message:<span className="text-success">Successfuly Logged-In</span>})

        }else{
            // error message
           
            this.setState({message:<span className="text-danger">Logged-In in valid</span>})
        }
        console.log(this.state);
    }
}