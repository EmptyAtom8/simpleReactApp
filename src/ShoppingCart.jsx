import React, {Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component{

    constructor(){
        super();
        this.state = {
            products:[
            
    
    
        ],};

    }
    
    render(){
        return (<div className="container-fluid">
            <h4>Shopping Cart</h4>
            <div className="row">
                {this.state.products.map((prod)=>{
                    return <Product key = {prod.id} id = {prod.id}    
                    
                    productName = {prod.productName} price = {prod.price} quantity={prod.quantity}
                    product = {prod}
                    onIncrement = {this.handelIncrement}
                    onDecrement = {this.handelDecrement}
                    onDelete = {this.handleDelete}
                    >
                        <button className="btn btn-primary">Buy Now</button>
                    </Product>})}


            </div>
            
            </div>);
    }

    componentDidMount = async ()=>{
        //making request
        var response = await fetch("http://localhost:5000/products", {method: "GET"});
        var prods = await response.json();
        this.setState({products: prods});
        console.log("Mountes");

    }
    componentDidUpdate(prevProps, prevStates){
        console.log(
            "Updates Happend",
            prevProps,
            prevStates,
            this.props,
            this.state);
    }

    handelIncrement = (p, maxValue) =>{
        console.log("handle increment");
        
       
        console.log(p);
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(p);
        console.log(index);
        if (allProducts[index].quantity<maxValue){
            allProducts[index].quantity++;
        };
        

        this.setState({product:allProducts})





    }

    handelDecrement =(p) =>{
        console.log("handle increment");
        
       
        
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(p);
        
        if (allProducts[index].quantity>0){
            allProducts[index].quantity--;

        };
        

        this.setState({product:allProducts})
    }

    handleDelete = (product)=>{
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
    
        console.log(product);
        console.log(index);

        // delete product based on index
        allProducts.splice(index, 1);
        //update the state of the current component (parent components)
        this.setState({products:allProducts});
    }
}