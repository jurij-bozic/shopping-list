import React, { Component } from 'react';
// import '../App.css';
import axios from 'axios'


const api = axios.create({
  baseURL: 'http://localhost:3000/shoppingList1'
})


class ShoppingList extends Component {

    state = {
      list: []
    }
  
  
    componentDidMount(){
      this.getList();
      this.refreshData();
    }
  
    constructor() {
      super();
      this.deleteItem = this.deleteItem.bind(this)
      this.updateItem = this.updateItem.bind(this)
    }

  
    refreshData = () => {
      setInterval(() => this.getList(), 8000);
    }
    getList = async () => {
      let data = await api.get('/').then(({data}) => data);
      this.setState({ list: data });
    }
    createItem = async () => {
      this.getList();
      let id = (this.state.list.length ? this.state.list.length+1 : 1);
      let res = await api.post('/', { id, text: '' });
      this.getList();
    }
    deleteItem = async (id) => {
      await api.delete(`/${id}`)
      this.getList();
    }
    updateItem = async (id, val) => { 
      await api.patch(`/${id}`, { text: val})    
      this.getList()
  }
  
    render() {
  
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.createItem}>createItem</button>
            {this.state.list.map(listItem => 
              <div key={listItem.id}>
                  <input type="text" key={listItem.id} value={listItem.text}  onChange={(value) => this.updateItem(listItem.id, value.target.value)}/>
                  <button onClick={() => this.deleteItem(listItem.id)}>X</button>
              </div>
            )}
      <br/>
   
          </header>
        </div>
      );
    }
  }
  
  export default ShoppingList;