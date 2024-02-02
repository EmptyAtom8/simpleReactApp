import React, { Component } from "react";
import { NavBar } from "./NavBar";
import {CustomerList} from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
import LogIn from "./LogIn";
import  NoMatchURL  from "./NoMatchURl";
import {Route} from "react-router";
import {BrowserRouter, Routes} from "react-router-dom";
export default class App extends Component
{
render(){
    return (
    <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
            <Route path="/LogIn" element = {<LogIn/>}/>
            <Route path="/cart" element = {<ShoppingCart/>}/>
            <Route path="/CusList" element = {<CustomerList/>}></Route>
            <Route path ="*" exact component ={<NoMatchURL/>}></Route>
        </Routes>
    </BrowserRouter>);
}
}