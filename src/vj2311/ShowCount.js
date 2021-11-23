import React from 'react';

export default function ShowCount({ totalCount, count3 }) {
    return (<div>
                <p>Count: {totalCount}</p>
                <p>3 count: {count3}</p>
            </div>);
}