import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'

class DisplayComponent extends React.Component
{
    render()
    {
        
            if(this.props.even==true)
            {
                return (
                    <h2>You have entered Even No</h2>
                )
            }
            else if(this.props.odd==true)
            {
                
                return (
                    <h2>You have entered Odd No</h2>
                )
            }
            else
            return (
                <h2>You have entered a Valid No</h2>
            )

       
    }
}

let Display = connect(StoreMapper)(DisplayComponent)
export {
    Display
}