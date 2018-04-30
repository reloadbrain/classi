import React, { Component } from 'react'
import './index.css'
import Column from '../Column'
import EmptyColumn from '../EmptyColumn'

class Board extends Component {
  render() {
    return (
      <main className="Board">
        <Column />

        <EmptyColumn />

      </main>
    )
  }
}

/*  <Column category={1} />
  <Column user="0x7aFCDbF97DDA2699de5E93365F93F69d52Ba97B0" />*/

export default Board
