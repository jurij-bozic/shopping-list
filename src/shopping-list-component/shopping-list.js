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
      setInterval(() => this.getList(), 30000);
    }
    getList = async () => {
      let data = await api.get('/').then(({data}) => data);
      this.setState({ list: data });
    }
    createItem = async () => {
      await api.get('/').then(({data}) => {
        let id = (data.length ? data.length+1 : 1);
        api.post('/', { id, text: '', checked: false }).then(() => this.getList());
      });

    }
    deleteItem = async (id) => {
      await api.delete(`/${id}`)
      this.getList();
    }
    updateItem = async (id, val, checked) => { 
      if(checked == null){
        await api.patch(`/${id}`, { text: val})  
      }
      else {
        await api.patch(`/${id}`, { checked: checked})  
      }
  
      this.getList()
  }
  modifyInput(param, id){
    let itemIndex;
    this.state.list.map((item, index) => (item.id === id  ? itemIndex = index : ''))
  
    let items = [...this.state.list];
    let item = {...items[itemIndex]};
    item.text = param;
    items[itemIndex] = item;
    this.setState({ list: items });
  }

  
    render() {
  
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.createItem}>Create Item</button>
            {this.state.list.map(listItem => 
              <div key={listItem.id}>
                  <input type="checkbox" checked={listItem.checked} onChange={(value) => this.updateItem(listItem.id, listItem.text, value.target.checked)}/>
                  <input type="text" key={listItem.id} value={listItem.text}  onChange={(value) => this.modifyInput(value.target.value, listItem.id)}/>
                  <button onClick={() => this.updateItem(listItem.id, listItem.text)}>Create</button>
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

  // (value) => this.updateItem(listItem.id, value.target.value)