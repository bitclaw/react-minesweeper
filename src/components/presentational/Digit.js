import React from 'react'
import {connect} from 'react-redux'

const Digit = ({ digit }) => {
    const isOne = Math.floor(digit) === 1;
    const style = {
        width:     (isOne && '100%'),
        textAlign: (isOne && 'right')
    };

    return (
        <span className="digit">
      <span className="sdigit">8</span>
      <span style={style}>{Math.floor(digit)}</span>
    </span>
    );
};

export default connect(
    (state) => ({digit: state.digit})
)(Digit)

