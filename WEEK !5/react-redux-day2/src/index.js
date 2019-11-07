
import {createStore} from 'redux'

let ScoreReducer=(state,action)=>
{
	if(state===undefined)
	{
		return {count :0};
	}
	if(action.type==="INCREMENT")
	{
		let newState=state;
		newState.count=state.count+20;
		return newState;
	}
	if(action.type==="DECREMENT")
	{
		let newState=state;
		newState.count=state.count+10;
		return newState;
	}
	if(action.type==="RESET")
	{
		let newState=state;
		newState.count=0;
		return newState;
	}
}


let store =createStore(ScoreReducer);

store.subscribe(()=>
{ let state=store.getState();
	console.log("Current Count is",state);
});

store.dispatch({
	type: 'INCREMENT'
})

store.dispatch({
	type: 'DECREMENT'
})

store.dispatch({
	type: 'DECREMENT'
})

store.dispatch({
	type: 'INCREMENT'
})

store.dispatch({
	type: 'INCREMENT'
})

store.dispatch({
	type: 'RESET'
})