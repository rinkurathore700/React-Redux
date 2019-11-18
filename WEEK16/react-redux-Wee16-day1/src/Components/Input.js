import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'

class InputComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.valueChange=this.valueChange.bind(this);
    }

     valueChange(event)
    {
         let no = parseInt(event.target.value);
         console.log("onchange",no);
         if(isNaN(no))
         {
             this.props.dispatch({
                 type: "CHECK_NUMBER",
                 number: no
               
             })          
         }
        
    }
    render()
    {
        return (
            <input className="form-control" onChange={this.valueChange} type="number"/>
        )
        
    }
}

let Input = connect(StoreMapper)(InputComponent)
export {
    Input
}