import React from 'react';
import K1 from './K1';
import K3 from './K3';

export default function K2({ roditelj, x, y }) {

    return (<div style={{ color: 'gray'}}>
                <div>
                    K2 - moj je roditelj {roditelj} i x je {x}, a y je {y}
                </div>
                <K3 />
                <K1 parent="K2" />
            </div>);
}