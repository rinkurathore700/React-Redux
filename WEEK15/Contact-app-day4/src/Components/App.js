import React from 'react'
import {Provider } from 'react-redux'
import {mystore} from '../store.js'
import {Display} from "./Display.js"
import {Input} from './Input.js'

class AppComponent extends React.Component
{
    render()
    {
        return (
            <div className="container-fluid col-md-3">
            <Provider store={mystore}>
                       <Input/>
                       <Display/>
                </Provider>
</div>
        )
    }
}
export{
    AppComponent
}