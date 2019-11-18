import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper, mystore} from '../store.js'


class ButtonComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.onClick=this.onClick.bind(this);
    }
    onClick(event)
    {
       let Operator= event.target.getAttribute('id');
       switch(Operator)
       {
           case "Cube":
           this.props.dispatch({
               type: "CUBE" 

           })
           break;
           case "Square":
                this.props.dispatch({
                    type: "SQUARE",
                })
            break;
            case "SquareRoot":
                    this.props.dispatch({
                        type: "SQUARE_ROOT",
                        })
                break;
       }
   
    }
    render()
    {
        return (
            <div className="row">
                <button onClick={this.onClick} class="col-md-2" id="Cube"> cube </button>
                <button onClick={this.onClick} class="col-md-2" id="Square"> Square </button>
                <button onClick={this.onClick} class="col-md-2" id="SquareRoot"> SquareRoot </button>  
                </div>
        )
    }
}

let Button=connect(StoreMapper)(ButtonComponent);
export{
    Button
}