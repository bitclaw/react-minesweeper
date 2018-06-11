import React,{Component} from 'react';
import {connect} from 'react-redux'
import Counter from './presentational/Counter'
import Resetter from './presentational/Resetter'
import {resetClick} from "../actions/minesweeper";

class Header extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="header">
                <Counter value={this.props.minesCount} />
                <Resetter onClick={this.props.resetClick} gameOver={this.props.gameOver} gameWon={this.props.gameWon} />
                <Counter value={time} />
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({time: ownProps.time}),
    {resetClick}
)(Header)

// let Header = ({ time, minesCount, onResetClick, gameOver, gameWon }) => (
//     <div className="header">
//         <Counter value={minesCount} />
//         <Resetter onClick={onResetClick} gameOver={gameOver} gameWon={gameWon} />
//         <Counter value={time} />
//     </div>
// );

// const mapStateToHeaderProps = ({ time, tiles: { minesCount }, gameOver, gameWon }) => ({
//     time, minesCount, gameOver, gameWon
// });

// export default connect(mapStateToHeaderProps, {
//     onResetClick: resetClick
// })(Header);

// export default Header = connect(mapStateToHeaderProps, {
//     onResetClick: resetClick
// })(Header);