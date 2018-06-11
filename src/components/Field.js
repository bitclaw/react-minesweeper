import React from 'react'
import {connect} from 'react-redux'

const Field = ({ name, ...rest }) => (
    <div className="group">
        <label>
            <span>{name} </span>
            <input type="number" {...rest} />
        </label>
    </div>
)

export default connect(
    (state) => ({name: state.name,rest: state.rest})
)(Field)