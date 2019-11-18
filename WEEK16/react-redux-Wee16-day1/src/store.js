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
            result: 0,
        }
       
    }
    if(action.type =="CHECK_NUMBER")
    {
         newState={
             number : action.number,   
             result :0       
         }
         
   }
         if(action.type=="SQUARE")
         {
            let ans=oldState.number;
             newState={
                 number: ans,
                 result : (ans*ans)
             }
           
         }
         if(action.type=="CUBE")
         {
            let ans=oldState.number;
             newState={
                 number:  ans,
                 result : (ans*ans*ans)
             }  
         }
         if(action.type=="SQUARE_ROOT")
         {
             let ans=oldState.number;
             newState={
                 number: ans,
                 result : Math.sqrt(ans),
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