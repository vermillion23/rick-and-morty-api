import React, {Component} from "react";
import TodoListIt from '../TodoListIt/TodoListIt';
import './TodoList.css';

export default class TodoList extends Component {

    // onEdit = (e) => {
    //     console.log("hell")
    // };

    render() {
        const {todos, ...propsData} = this.props;

        return (
            <ul className="list-group todo-list">

                {todos.map((item) => {
                    const {id, ...itemProps} = item;

                    return (<li key={id} className="list-group-item">

                        <TodoListIt
                            id={id}
                            {...itemProps}
                            {...propsData}
                           />

                        {/*important={item.important} все свойства объекта можно передать в ...item используя Object Spread*/}
                    </li>)
                })}
            </ul>

        );
    };

};
