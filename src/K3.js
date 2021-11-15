import React from 'react';
import K1 from './K1';

export default class K3 extends React.Component {
    state = {
        title: 'brojač',
        count: 8,
        data: this.props.podaci
    }
    
    klik = () => {
        // NE this.state.count++;
        // NE this.state.count = this.state.count + 1
        
        const newCount = this.state.count + 1;

        console.log(newCount);
        this.setState({ count: newCount});
    }

    render(){
        return <div>
                    <div style={{ color: 'blue'}}>K3</div>
                    <div>{this.state.title}: {this.state.count}</div>
                    <button onClick={this.klik}>+</button>
                    <K1 parent={this.state.count.toString()} />
                </div>;
    }
}