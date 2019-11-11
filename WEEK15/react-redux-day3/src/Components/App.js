import React from 'react'
import {Provider ,connect} from 'react-redux'
import {mystore} from '../store.js'
import {Display} from "./Display.js"
import {Input} from './Input.js'
import {StoreMapper} from '../store.js'

class AppComponent extends React.Component
{
    render()
    {
        return (
            <div>
            <Provider store={mystore}>
                       <Display/>
                       <Input/>
                </Provider>
</div>
        )
    }
}

//let App= connect(StoreMapper)();

export{
    AppComponent
}