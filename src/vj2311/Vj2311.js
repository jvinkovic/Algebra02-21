import React from 'react';
import FensiButton from './FensiButton';
import ShowCount from './ShowCount';
import { divider } from './SharedStuff';

export default class Vj2311 extends React.Component {
    state = {
        total: 0,
        divisibleCount: 0
    }    

    makeAdd = () => {
        const newTotal = this.state.total + 1;
        let newDivisibleCount = this.state.divisibleCount;

        if(newTotal % divider === 0) {
            newDivisibleCount++;
        }

        this.setState({ total: newTotal, divisibleCount: newDivisibleCount});
    }

    render() {
        return (<div>
                    <ShowCount totalCount={this.state.total} 
                                divisibleCount={this.state.divisibleCount} 
                                last={this.state.divisibleCount * divider} />
                    <FensiButton onBtnClick={this.makeAdd}>ADD</FensiButton>
                </div>);
    };   
}
