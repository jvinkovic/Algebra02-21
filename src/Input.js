import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        const newText = e.target.value;
        this.setState({text: newText});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const trimaniTekst = this.state.text.trim();
        if(trimaniTekst) {
            this.props.onNewTask(trimaniTekst);
            this.setState({text: ''});
        }
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.text} onChange={this.handleChange} />
                    <input type='submit' value='Add'/>
                </form>);
    }
}

Input.propTypes = {
    onNewTask: PropTypes.func.isRequired
}
