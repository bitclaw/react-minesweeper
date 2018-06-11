import React, {Component} from 'react';
import {connect} from 'react-redux'
import Counter from './Counter'
//import Digit from 'Digit'
//import Resetter from 'Resetter'
import {resetClick,tileClick} from "../reducers/tiles";
import {fetchTodos} from "../reducers/game";
import {MINES as minesCount} from "../lib/minesweeper";

const Header = ({resetClick}) => (
    <div className="header">
        <Counter value={minesCount} />

        <Counter value={1} />
    </div>
)

// class Header extends Component {
//     handleInputChange = (event) => {
//         const value = event.target.value
//         this.props.updateCurrent(value)
//     }
//
//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.saveTodo(this.props.currentTodo)
//     }
//
//     render() {
//         const {currentTodo} = this.props
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <input type="text"
//                        onChange={this.handleInputChange}
//                        value={currentTodo}/>
//             </form>
//         )
//     }
// }

export default connect(
    (state) => ({ time: '',tiles: { minesCount } }),
    {resetClick}
)(Header)