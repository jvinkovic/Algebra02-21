import React from 'react';
import { divider } from './SharedStuff';

export default function ShowCount({ totalCount, divisibleCount, last }) {
    return (<div>
                <p>Count: {totalCount}</p>
                <p>{divider} count: {divisibleCount}</p>
                <p>Last divisible by {divider}: {last}</p>
            </div>);
}