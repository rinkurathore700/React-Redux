import React from 'react'
import {Provider ,connect} from 'react-redux'
import {mystore} from '../store.js'
import {Display} from "./Display.js"
import {Input} from './Input.js'
import {Button} from './button.js'
import {StoreMapper} from '../store.js'

class AppComponent extends React.Component
{
    render()
    {
        return (
            <div className="container"> 
              <div className="form-signin">
                <Provider store={mystore}>                      
                       <Input/>
                       <Button/>
                       <Display/>
                 </Provider>
                </div>
            </div>
        )
    }
}

//let App= connect(StoreMapper)();

export{
    AppComponent
}