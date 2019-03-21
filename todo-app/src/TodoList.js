import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
// import './App.css';
import uuid from 'uuid/v4';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
    }

    create(obj) {
        const newtodo = { ...obj, id: uuid() };
        this.setState(state => ({ todolist: [...state.todolist, newtodo] }));
    }

    delete(n) {
        const newTodo = this.state.todolist.filter((ele, idx) => idx !== n);
        this.setState({ todolist: newTodo });
    }

    render() {
        const todos = this.state.todolist.map((ele, idx) => <Todo key={ele.id} text={ ele.text } triggerDelete={() => this.delete(idx)} />);
        return (
            <div className="TodoList">
                <NewTodoForm triggerCreate={this.create} />
                {todos}
            </div>
        );
    }
}

export default TodoList;
