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
         let number = parseInt(event.target.value);
         if(isNaN(number))
         {
             this.props.dispatch({
                 type: "CHECK_NUMBER",
                 number:0,
                 even : false,
                 odd: false

             })
         }

         else if(number % 2 == 0)
         {
            this.props.dispatch({
                type: "CHECK_NUMBER",
                number:number,
                even : true,
                odd: false

            })
         }
         else 
         {
            this.props.dispatch({
                type: "CHECK_NUMBER",
                number:number,
                even : false,
                odd: true

            }) 
         }
    }
    render()
    {
        return (
            <input onChange={this.valueChange}/>
        )
        
    }
}

let Input = connect(StoreMapper)(InputComponent)
export {
    Input
}