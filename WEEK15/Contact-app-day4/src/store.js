
import {createStore } from 'redux'

let reducer=function(oldState,action)
{
    let newState;
    if(!oldState)
    {
         newState={
            contacts : [
                {
                  name:"Rinku",
                  contact : "9898"
                }
            ],
                }
    }
    if(action.type ==="ADD_CONTACT")
    {
      oldState.contacts.push({contact:action.contacts,
        name:action.names});
         newState={
             contacts : oldState.contacts,          
         }
    }
    console.log(newState);
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