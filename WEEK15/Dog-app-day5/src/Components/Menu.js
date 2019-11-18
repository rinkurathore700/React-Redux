import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'


class MenuComponent extends React.Component
{
    constructor(props)
    {
        super(props)
      
    }
componentDidMount()
{
  this.props.dispatch({
    type: "FETCH_DATA"
  })
}
    render()
    {
    /* if(this.prop.isMenuLoading)
      {
        return (
          <div>
          Loading.......
            </div>
       )
      }
      else{*/
        return (
          <div>
         this.props.breed.map((itm)=><button>itm</button>)
            </div>
       )
      
      
        }  
        
    
}

let Menu = connect(StoreMapper)(MenuComponent);

export {
  Menu
}