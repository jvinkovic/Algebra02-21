import React from 'react';
import PropTypes from 'prop-types';

export default class K1 extends React.Component {

    render() {
        const { parent } = this.props;

        return <div style={{ color: 'red'}}>K1 - parent mi je: {parent}</div>
    }
}

K1.propTypes = {
    parent: PropTypes.string
}

K1.defaultProps = {
    parent: "(ja sam siroče)"
}