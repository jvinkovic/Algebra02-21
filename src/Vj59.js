import React from 'react';
import Vj59child from './Vj59child';

export default class Vj59 extends React.Component {
    state = {
        korisnici: [{name: 'Nenad', age: 67},
                    {name: 'Ana', age: 42},
                    {name: 'Ivana', age: 11}],

        naslov: 'Ovo je naslov'
    }
    
    render() {
        const {korisnici} = this.state;

        return(
            <div>
                <h4>Ovo je parent komponenta, korisnik je {this.state.korisnici[0].name}, ima {this.state.korisnici[0].age} godina</h4>
                <Vj59child name={korisnici[0].name} age={korisnici[0].age} />
                <Vj59child name={this.state.korisnici[1].name} age={this.state.korisnici[1].age} />
                <Vj59child name={this.state.korisnici[2].name} age={this.state.korisnici[2].age}>
                    {this.state.naslov}
                </Vj59child>
            </div>
        );
    }
}