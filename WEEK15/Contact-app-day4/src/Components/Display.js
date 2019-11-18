import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'

class DisplayComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.renderContact=this.renderContact.bind(this);
        this.deleteContact=this.deleteContact.bind(this);
    }
    deleteContact(event)
    {
        let key= event.target.getAttribute("k");
        console.log(key);
         this.props.dispatch({
           type:"DELETE_ACTION",
           id: key          
         })
        }
   renderContact()
   {
     console.log("called")
  return this.props.contacts.map((item,index)=>{
    return   ( <tr>
  <td key={index}>{item.name}</td>
  <td>{item.contact}</td>
  <td>
    <button onClick={this.deleteContact} className=" btn btn-danger btn-sm"  key={index}><span aria-hidden="true">&times;</span></button>
    </td>   
</tr>
  )
    })
}
    render()
    {
        return (
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {this.renderContact()}
  </tbody>
</table>
        )
    }
}

let Display = connect(StoreMapper)(DisplayComponent);
export {
    Display
}