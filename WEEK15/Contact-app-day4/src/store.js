
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
                  contact : "9990031296"
                },
                {
                  name:"Amit",
                  contact : "87873038737"
                },
                {
                  name:"Sunil",
                  contact : "7396393873"
                },
                {
                  name:"Panda",
                  contact : "9875483798"
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

    if(action.type ==="DELETE_ACTION")
    {
        console.log(action);
    //    console.log(oldState.contacts);
    if(action.id!=null)
     oldState.contacts.splice(action.id, 1);
     // console.log(oldState.contacts);

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