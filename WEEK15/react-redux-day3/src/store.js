import React from 'react'
import {Provider ,connect} from 'react-redux'
import {createStore } from 'redux'

let reducer=function(oldState,action)
{
    let newState;
    if(!oldState)
    {
         newState={
            number : 0,
            even: false,
            odd : false
        }
       
    }
    if(action.type =="CHECK_NUMBER")
    {
         newState={
             number : action.number,
             even : action.even,
             odd : action.odd
         }
    }
    return newState;
}
let mystore=createStore(reducer);

mystore.subscribe(function(){
     mystore.getState();
})


function StoreMapper(state)
{
  return state;
}


export{
    StoreMapper,
    mystore
}