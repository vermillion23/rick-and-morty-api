import React, {Component} from 'react';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
       this.setState({
           label: e.target.value
       });
    };

    onSubmit = (e) => {
        e.preventDefault();
      this.props.onItemAdded(this.state.label);
    };
        render() {

            return (
                <form
                onSubmit={this.onSubmit}>

                    {/*{this.state.label}*/}
                    <input type="text"
                           onChange={this.onLabelChange}
                        placeholder="Add new"/>
                    <button >
                        Add
                    </button>
                </form>
            )
        }
}
