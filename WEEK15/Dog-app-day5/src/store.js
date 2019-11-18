
import {createStore} from 'redux'
import {object} from 'prop-types';


let reducer=function(oldState,action)
{
    let newState={
      isMenuLoading : false,
      breed:[]
    };
    if(!oldState)
    {
       return newState;
    }
   
    if(action.type==="FETCH_DATA")
    {
      fetch("https://dog.ceo/api/breeds/list/all")
      .then((res)=>{
        console.log(res.json());
       return res.json();
      })
      .then((data)=>{
        console.log(data);
        mystore.dispatch({
          type: "MENU_LOADED",
          data : Object.keys(data.message),
        })
    
      }).catch((err)=>{
        console.log(err);
      })
      newState.isMenuLoading=true;
    }

    if(action.type=="MENU_LOADED")
    {
      newState.breed = action.data;
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