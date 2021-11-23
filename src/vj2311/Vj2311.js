import React from 'react';
import FensiButton from './FensiButton';
import ShowCount from './ShowCount';

export default class Vj2311 extends React.Component {
    state = {
        total: 0,
        count3: 0
    }

    makeAdd = () => {
        const newTotal = this.state.total + 1;
        let newCount3 = this.state.count3;

        if(newTotal % 3 === 0) {
            newCount3++;
        }

        this.setState({ total: newTotal, count3: newCount3});
    }

    render() {
        return (<div>
                    <ShowCount totalCount={this.state.total} count3={this.state.count3} />
                    <FensiButton onBtnClick={this.makeAdd}>ADD</FensiButton>
                </div>);
    };   
}
