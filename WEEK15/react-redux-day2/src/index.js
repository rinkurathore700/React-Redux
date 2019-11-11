import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider,connect} from "react-redux"

let ScoreReducer=(state,action)=>
{
	if(state===undefined)
	{
		return {count :0};
	}
	if(action.type==="INCREMENT")
	{
		let newState=state;
		newState.count=state.count+1;
		return newState;
	}
	if(action.type==="DECREMENT")
	{
		let newState=state;
		newState.count=state.count-1;
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

store.subscribe(function(){
	let state=	store.getState()
	return state;
	});

function storemapper(state)
{
	return state;
}

class App extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		
		return(
         <Provider store={store}>
			<div className="container-fluid">			  
			  <div className="card text-center" style={{width: '18rem'}}>
                <div className="card-body">
                   <DisplayComponent/>
				   <div className="row ">
                   <IncrementComponent/>
	                <DecrementComponent/>
					<ResetComponent/>
					</div>
                </div>
              </div>
	 	    </div>
		 </Provider>
		)
	}
}

class IncreMent extends React.Component
{
	constructor()
	{
		super();
		this.IncClick=this.IncClick.bind(this);
	}
IncClick(e)
{
	this.props.dispatch({
		type: 'INCREMENT'
	})
	console.log(this.props.count);
}
	render()
	{
		
		return(
			<div >
			 <button onClick={this.IncClick} type="button" class="btn btn-success">+</button>
				</div>
		)
	}
}
let IncrementComponent =connect(storemapper)(IncreMent);

class DecreMent extends React.Component
{
	constructor()
	{
		super();
		this.dec=this.dec.bind(this);
	}
	 dec(e)
	{
		this.props.dispatch({
			type: 'DECREMENT'
		})
             console.log(this.props.count);
	}
	render()
	{
		
		return(
			<div >
			 <button onClick={this.dec} type="button" class="btn btn-danger">-</button>
				</div>
		)
	}
}
let DecrementComponent =connect(storemapper)(DecreMent);

class Display extends React.Component
{
	constructor()
	{
		super();
		
	}
   render()
	{
		
		return(
			<div >
			Counter: {this.props.count}
				</div>
		)
	}
}
let DisplayComponent =connect(storemapper)(Display);

class Reset extends React.Component
{
	constructor()
	{
		super();
		this.ResetClick=this.ResetClick.bind(this);
	}
ResetClick(e)
{
	this.props.dispatch({
		type: 'RESET'
	})
}
	render()
	{
		
		return(
			<div >
			 <button onClick={this.ResetClick} type="button" class="btn btn-danger">Reset</button>
				</div>
		)
	}
}
let ResetComponent =connect(storemapper)(Reset);

ReactDOM.render(<App/>,document.getElementById("root"));