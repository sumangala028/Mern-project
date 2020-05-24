import React from 'react';
import logo from './logo.svg';
import './App.css';
import Detailsform from './form';
import DetailsTable from './table';
import axios from 'axios';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        data : [],
        editData : []
      }
  }

  create = data => {
    if(!data.isEdit){
      axios.post("http://localhost:5000/productData",data).then(res => {
        this.getAll();
      })
    }
    else{
      axios.put("http://localhost:5000/productData/update",data).then(res => {
        this.getAll();
      })
    }
  }

  //hook
  componentDidMount(){
      this.getAll();
  }

  getAll(){
    axios.get("http://localhost:5000/productData").then(res => {
      console.log(res.data );
      this.setState({
        data : res.data
      })
    })
  }

  update = data => {
    console.log(data);
    this.setState({
      editData:data
    })
  }

  del = data => {
    var option = window.confirm('Do you want to delete ${?data.Name}')
    if(option ){
      axios.delete("http://localhost:5000/productData/del/${data._id").then(res => {
        console.log(res);
        this.getAll();
    })
    }
  }

  render(){
      return(
          <div className= "container mt-4">
              <div className="row">
                  <div className = "col-6">
                      <Detailsform myData = {this.create} setForm = {this.state.editData}/>
                  </div>
                  <div className="col-6">
                      <DetailsTable getData = {this.state.data} setData = {this.update} del = {this.del}/>
                  </div>
              </div>
          </div>
      )

      
  }
}

export default App;