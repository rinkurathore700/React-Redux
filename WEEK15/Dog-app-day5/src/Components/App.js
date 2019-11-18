import React from 'react'
import {Provider } from 'react-redux'
import {mystore} from '../store.js'
import {Menu} from './Menu.js'

class AppComponent extends React.Component
{
    render()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                   <div className="col-md-3">
                      <Provider store={mystore}>
                          <Menu/>
                       </Provider>
                     </div>
                 </div>
            </div>
        )
    }
}
export{
    AppComponent
}