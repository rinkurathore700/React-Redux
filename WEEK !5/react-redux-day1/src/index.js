import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

let ScoreReducer=(state,action)=>
{
	if(state===undefined)
	{
		return {currentScore :0};
	}
	if(action.type==="UPDATE_BONUS")
	{
		let newState=state;
		newState.currentScore=state.currentScore+20;
		return newState;
	}
	if(action.type==="LEVEL_UP")
	{
		let newState=state;
		newState.currentScore=state.currentScore+10;
		return newState;
	}
	if(action.type==="LOSE")
	{
		let newState=state;
		newState.currentScore=state.currentScore-10;
		return newState;
	}
}


let store =createStore(ScoreReducer);

store.subscribe(()=>
{ let state=store.getState();
	console.log("Current SCore is",state);
});

store.dispatch({
	type: 'UPDATE_BONUS'
})

store.dispatch({
	type: 'LEVEL_UP'
})
store.dispatch({
	type: 'LOSE'
})