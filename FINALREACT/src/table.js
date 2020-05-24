import React from 'react';
import logo from './logo.svg';
import './App.css';

class DetailsTable extends React.Component{
  constructor(){
      super();
  }

  render(){
      return(
        <table className="product-table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody> 
                {
                  this.props.getData.length > 0 ? 
                  (
                      this.props.getData.map(e => 
                        <tr key = {e._id}>
                            <td>{e.Category}</td>
                            <td>{e.Name}</td>
                            <td>{e.Price}</td>
                            <td>{e.Discount}</td>
                            <td><button className="btn"
                                onClick = {event => {
                                    this.props.setData(e)
                                }}
                            >EDIT</button></td>
                            <td><button className = "btn"
                                onClick = {event => {
                                    this.props.del(e)
                                }}
                            >DELETE</button></td>
                        </tr>
                        )
                      
                  )
                  :
                  (
                    <tr>
                        <td>NO DATA</td>
                </tr>
                  ) 
                }
                
            </tbody>
        </table>
      )

      
  }
}

export default DetailsTable;