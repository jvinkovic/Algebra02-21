import React from 'react';

export default function ShowCount({ totalCount, count3, last }) {
    return (<div>
                <p>Count: {totalCount}</p>
                <p>3 count: {count3}</p>
                <p>Last divisible by 3: {last}</p>
            </div>);
}