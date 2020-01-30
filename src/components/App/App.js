import React, {Component} from 'react';
import TodoListIt from '../TodoListIt/TodoListIt';
import TodoList from "../TodoList/TodoList";
import Search from "../Search/Search";
import ItemAddForm from '../ItemAddForm';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/styles";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Dance on the table'),
            this.createTodoItem('Have lunch')
        ]
    };


    onChangeLabel = (e) => {
        const context = this.setState({label: e.target.value})
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false, // not done yet
            id: this.maxId++,
            isEdit: false
        }
    }


    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    editItem = (id, label) => {
        const {todoData} = this.state;
        const updateTodos = todoData.map((todo) => todo.id === id ? {...todo, label}: todo);
        this.setState({todoData: updateTodos});
    };

    deleteItem = (id) => {
        const updatedTodos = this.state.todoData.filter(item => item.id !== id);
        this.setState({todoData: updatedTodos})

        // this.setState(({ todoData }) => {
        // const idx = todoData.findIndex((el) => el.id === id);

        // const before = todoData.slice (0, idx);
        // const after = todoData.slice(idx+1);

        // const newArray = [...before, ...after];

        // return {
        //     todoData:  todoData.filter(item => item.id !== id),
        // }
        // });
    };

    render() {

        const {classes} = this.props;
        const {todoData} = this.state;
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                            {/*    <MenuIcon />*/}
                            {/*</IconButton>*/}
                            <Typography variant="h6" className={classes.title}>
                                Todo List
                            </Typography>
                            {/*<Button color="inherit">Login</Button>*/}
                        </Toolbar>
                    </AppBar>
                </div>
                <Search/>
                <ItemAddForm onItemAdded={this.addItem}/>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    editItem={this.editItem}/>

                {/*<TodoListIt />*/}
                {/*<AppHeader />*/}
            </div>
        );

    };

};

export default withStyles(styles)(App)