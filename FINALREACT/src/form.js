import React from 'react';
import logo from './logo.svg';
import './App.css';

class Detailsform extends React.Component{
  constructor(){
      super();

      this.state = {
          _id : "",
          Category : "",
          Name : "",
          Price : "",
          Discount : "",
          isEdit : false

      }
  }

  productChange = event => {
      const{ name, value} = event.target;
      
      this.setState({
          [name] : value
      })
  }

  productSubmit = event => {
      //event.preventDefault();
      if(!this.state.isEdit){
        let data = {
          isEdit: this.state.isEdit,
          Category: this.state.Category,
          Name : this.state.Name,
          Price : this.state.Price,
          Discount: this.state.Discount
        }
        this.props.myData(data);
    }
    else{
        let data = {
            isEdit: this.state.isEdit,
            _id: this.state._id,
            Category: this.state.Category,
            Name : this.state.Name,
            Price : this.state.Price,
            Discount: this.state.Discount
        } 

        this.props.myData(data);
    }
  }

  //hook
  componentWillReceiveProps(props){
      if(props.setForm._id != null){
          this.setState({
            isEdit:true,
            _id:props.setForm._id,  
            Category: this.state.Category,
            Name : props.setForm.Name,
            Price : props.setForm.Price,
            Discount: props.setForm.Discount
          })
      }
  }

  render(){
      return(
         <form onSubmit = {this.productSubmit} autoComplete = "off">

             <div className="my-form-data">
             <label for="products">Choose product category:</label>
                    <select name="products" id="products">
                    <option value="dress">Dress</option>
                    <option value="jewels">Jewels</option>
                    <option value="footwears">Foot wears</option>
                    <option value="bags">Bags</option>
                    </select>
             </div>
             <div className="my-form-data">
                 <label for = "name">Name : </label>
                 <input type="text" className="detail-form" placeholder="Enter the product code " 
                  onChange = {this.productChange}
                  name = "Name"
                  value = {this.state.Name}/>
                
             </div>

             <div className="my-form-data">
                 <label for = "price">Price : </label>
                 <input type="number" className="detail-form" placeholder="Enter the product price "
                  onChange = {this.productChange}
                  name = "Price"
                  value = {this.state.Price}/>
             </div>

             <div className="my-form-data">
                 <label for = "discount">Discount : </label>
                 <input type="text" className="detail-form" placeholder="Enter the product discount "
                  onChange = {this.productChange}
                  name = "Discount"
                  value = {this.state.Discount}/>
             </div>

             <div>
      <button type="submit" className="btn">{this.state.isEdit ? 'UPDATE' : 'ADD'}</button>
             </div>
         </form>
      )

      
  }
}

export default Detailsform;