import React, { Component } from "react";
import "./TodoList.css";

class TodoItems extends Component 
{
  constructor(props) 
  {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) 
  {
    this.props.delete(key);
  }

  edit(text, key)
  {
    this.props.edit(text, key);
  }

  save(key)
  {
    this.props.save(key);
  }

  createTasks(item, index) 
  {
    return (
      <div>
        <li className="inside">
          <div className="inside-1">
            {item.text}
          </div>
          <div>
            <button onClick={() => this.edit(item.text, item.key)} className="btnedit">Edit</button>
          </div>
          <div>
            <button onClick={() => this.save(item.key)} className="btnsave">Save</button>
          </div>
          <div>
            <button onClick={() => this.delete(item.key)} className="btnremove">Remove</button>
          </div>
        </li>
      </div>
    );
  }

  render() 
  {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <p className="theList">{listItems}</p>;
  }
}

export default TodoItems;
