import react, {Component} from "react";
export default class Product extends Component{
    state ={

        productA: this.props.product,
    };

    

    render(){
        return (
        <div className="col-log-6">
            <div className="card m-2">
                <div className="card-body">
                    <div className="text-muted">
                       # {this.props.id}
                    </div>
                    <span className="pull-right hand-icon" >
                        <i className="fa fa-times" onClick={()=>{this.props.onDelete(this.state.productA);}} ></i>
                    </span>
                    <h5 className="pt-5 border-top">{this.props.productName}</h5>
                    <div>$ {this.props.price}</div>

                </div>

                <div className="card-footer text-right">
                    <div className="float-left">
                        <span className="badge badge-color-blue" >{this.props.quantity}</span>
                        <div className="btn-group">
                            <button className="btn btn-outline-success" onClick = {()=>{this.props.onIncrement(this.state.productA, 10);}}>
                                +
                            </button>
                            <button className="btn btn-outline-success" onClick={()=>{this.props.onDecrement(this.state.productA);}}>
                                -
                            </button>
                        </div>
                    </div>
                    <div className="float-right">{this.props.children}</div>
                    
                </div>

            </div>
        </div>
        );
    }
}