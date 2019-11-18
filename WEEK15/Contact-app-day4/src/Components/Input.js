import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'

class InputComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e)
    {
      e.preventDefault();
   let name=document.getElementById("name").value;
   let contact=document.getElementById("contact").value;

   this.props.dispatch({
       type: "ADD_CONTACT",
       contacts: contact,
        names : name
   })

    }
    render()
    {
        return (
            <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input  className="form-control" id="name" placeholder="Enter Name"/>              
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contact</label>
              <input type="number" className="form-control" id="contact" placeholder="Enter Contact"/>
            </div>       
            <button  onClick={this.handleClick} className="btn btn-primary">Add Contact</button>
          </form>
        )
        
    }
}

let Input = connect(StoreMapper)(InputComponent)
export {
    Input
}