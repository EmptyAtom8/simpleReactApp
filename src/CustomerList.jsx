import React, { Component } from "react";

export   class CustomerList extends Component{
    state = {
    pageTitle: "Customer", 
    customersCount: 6,
    customerList: [
        {id:1,name:"tony", phone:"123-456", address:{city: "Shenyang "}, photo: "https://picsum.photos/id/1010/60"},
        {id:2,name:"ton", phone:"133-456", address:{city: "Beijing "},photo: "https://picsum.photos/id/1010/60"},
        {id:3,name:"ony", phone:"143-456", address:{city: "JiLin "},photo: "https://picsum.photos/id/1010/60"},
        {id:4,name:"on", phone:null, address:{city: "Newcastle Upon Tyne "},photo: "https://picsum.photos/id/1010/60"},
        {id:5,name:"ryan", phone:"163-456", address:{city: "Shenyang "},photo: "https://picsum.photos/id/1010/60"},

    ]
};
    
    render(){
        return (<div>
            <h4 className="border-bottom m-1 p-1">
                {this.state.pageTitle}
                <span className="badge badge-secondary m-2">
                    {this.state.customersCount}
                </span>
                <button className="btn btn-info" onClick={this.onRefresh}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.customerList.map((cust, index)=>{
                        return(
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>
                                    <img src = {cust.photo}/>
                                    <div>
                                        <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust, index);}}>Change Picture</button>
                                    </div>
                                    
                                </td>
                                <td>{cust.name}</td>
                                <td>{(cust.phone == null)? <div>No Phone</div>:cust.phone}</td>
                                <td>{cust.address.city}</td>
                            </tr>

                        );
                    })
                    }
                    

                </tbody>

            </table>
            </div>  
        );
    }
    onRefresh=()=>{
        this.setState({customersCount: 9});
        
    }
    //execute when the user click on the button
    //receives the customer object as well as its coreeposniding index.
    onChangePictureClick =(cust, index)=>{
        var custArray = this.state.customerList;
        custArray[index].photo="https://picsum.photos/id/1000/60";
        //update customer array in the state
        this.setState({customerList:custArray});

    }
    }
