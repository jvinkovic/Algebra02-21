import React from 'react';

// onBtnClick

export default class FensiButton extends React.Component {
    render() {
        return (<div>
                    <button onClick={this.props.onBtnClick}>{this.props.children}</button>
                </div>);
    }
}