import React from 'react'
import {connect} from 'react-redux'
import Digit from './Digit'

const Counter = ({ value }) => (
    <div className="counter">
        <Digit digit={ (value / 100)      } />
        <Digit digit={ (value % 100) / 10 } />
        <Digit digit={ (value % 10 )      } />
    </div>
);

export default connect(
    (state) => ({value: state.value})
)(Counter)