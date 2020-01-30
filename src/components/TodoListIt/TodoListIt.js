import React, { Component } from "react";
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
// import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// export default function SvgMaterialIcons() {
//      const classes = useStyles();

export default class TodoListIt  extends Component {

    state = {
        isEdit: false
    };

    onDelete = (e) => {
        const {onDeleted, id} = this.props;
        debugger
        onDeleted(id);
    };

    onEditClick = () => {
        this.setState({isEdit: !this.state.isEdit})
    };

    onChangeLabel = (e) => {
        const {editItem, id} = this.props;
        editItem(id, e.target.value)
    };


    render() {
        const {label, important = false } = this.props;

        const {isEdit} = this.state;

        const style = {
            color: important ? 'tomato' : 'black'
        }

        return (
            <div>
                <span className="list-group-item" style={style}>{ isEdit ?
                    <input value={label} onChange={this.onChangeLabel}/>: label }
                </span>
                {/*<DeleteIcon onClick={this.deleteItem}/>*/}
                <button onClick={this.onDelete}>
                    <DeleteIcon />
                </button>
                <button onClick={ this.onEditClick }>
                    <EditIcon />
                </button>
            </div>
        )
    }
}
