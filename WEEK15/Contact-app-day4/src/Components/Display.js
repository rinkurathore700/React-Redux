import React from 'react'
import {connect} from 'react-redux'
import {StoreMapper} from '../store.js'

class DisplayComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.renderContact=this.renderContact.bind(this);
    }
   renderContact()
   {
  return this.props.contacts.map(item=>{
    return   ( <tr>
  <td>{item.name}</td>
  <td>{item.contact}</td>   
</tr>
  )
    })
}
    render()
    {
        return (
        <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      
    </tr>
  </thead>
  <tbody>
    {this.renderContact()}
  </tbody>
</table>
        )
    }
}

let Display = connect(StoreMapper)(DisplayComponent)
export {
    Display
}