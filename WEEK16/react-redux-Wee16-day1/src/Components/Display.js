import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'

class DisplayComponent extends React.Component
{
    render()
    {
        
        return (
            <div >
                {this.props.result}
                </div>
        )
       
    }
}

let Display = connect(StoreMapper)(DisplayComponent)
export {
    Display
}