import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      items: [],
      value: '',
      index: 1
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.saveItem = this.saveItem.bind(this)
    this.clearItem = this.clearItem.bind(this);
  }

  addItem(event,index) 
  {
    if (this.state.value !== "") 
    {
      const newItem = {
        text: this.state.value,
        key: this.state.index
      };
      index = this.state.index++

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
          value: ''
        };
      }); 
    }
    event.preventDefault();
  }

  clearItem()
  {
    this.setState({ value : ''})
  }

  deleteItem(key) 
  {
    const filteredItems = this.state.items.filter((item) => item.key !== key);

    this.setState({
      items: filteredItems,
    });
  }

  editItem(text, key)
  {
    this.setState({ 
      value : text
    })
  }

  saveItem(key)
  {
    const filteredItems = this.state.items

    if(this.state.value !== "")
    {
      filteredItems[key-1].text = this.state.value
    }

    this.setState({ 
      items : filteredItems,
      value : ''
    })
  }

  handleOnChange(event) {
    this.setState({ value: event.target.value})
  }

  render() 
  {
    return (
      <div className="todoListMain">
        <h1>TO DO LIST</h1>
        <div className="header">
          <input value={this.state.value} onChange={this.handleOnChange} placeholder="Enter task"></input>
          <button className="btnclear" onClick={this.clearItem}>Clear</button> 
          <button className="btnadd" onClick={this.addItem}>Add</button> 
        </div>
        <div>
          <TodoItems entries={this.state.items} delete={this.deleteItem} edit={this.editItem} save={this.saveItem}/>
        </div>
      </div>
    );
  }
}

export default TodoList;
