import React from 'react';
import FensiButton from './FensiButton';
import ShowCount from './ShowCount';

export default class Vj2311 extends React.Component {
    state = {
        total: 0,
        count3: 0,
        lastDivisible: 0
    }

    makeAdd = () => {
        const newTotal = this.state.total + 1;
        let newCount3 = this.state.count3;
        let newLastDivisible = this.state.lastDivisible;

        if(newTotal % 3 === 0) {
            newCount3++;
            newLastDivisible=newTotal;
        }

        this.setState({ total: newTotal, count3: newCount3, lastDivisible: newLastDivisible});
    }

    render() {
        return (<div>
                    <ShowCount totalCount={this.state.total} 
                                count3={this.state.count3} 
                                last={this.state.lastDivisible} />
                    <FensiButton onBtnClick={this.makeAdd}>ADD</FensiButton>
                </div>);
    };   
}
