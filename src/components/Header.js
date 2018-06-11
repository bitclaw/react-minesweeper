import React, {Component} from 'react';
import {connect} from 'react-redux'
import Counter from './Counter'
//import Digit from 'Digit'
import Resetter from './Resetter'
import {resetClick,tileClick} from "../reducers/tiles";
import {timerIncrement} from "../reducers/game";
import {MINES as minesCount} from "../lib/minesweeper";

const Header = ({resetClick,time, minesCount}) => (
    <div className="header">
        <Counter value={minesCount} />
        <Resetter onClick={resetClick} gameOver={false} gameWon={false} />
        <Counter value={time} />
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
    (state) => ({ time: 0,tiles: { minesCount } }),
    {resetClick,timerIncrement}
)(Header)