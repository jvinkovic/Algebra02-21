import React, { useState } from 'react';

export default function Vj514() {
    const [tekst, setTekst] = useState('');
    const [submitaniTekst, setSubmitaniTekst] = useState('');

    const tekstChange = (e) => {
        const newTekst = e.target.value;

        setTekst(newTekst);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        
        setSubmitaniTekst(tekst);
        setTekst('');
    }

    return (<div>
                <form onSubmit={handleSubmit}>
                    <input name="tekst" value={tekst} onChange={tekstChange} />
                    <input type="submit" value="Klikni" />
                </form>
                <p>Zadnje upisani tekst: {submitaniTekst}</p>
            </div>);
}
