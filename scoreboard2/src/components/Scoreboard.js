import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'

export default class Scoreboard extends Component {
  state = {
    players: [
      {
        id: 1,
        name: 'Wouter',
        score: 2
      },
      {
        id: 2,
        name: 'Mimi',
        score: 5
      },
      {
        id: 3,
        name: 'Milan',
        score: 4
      }
    ]
  }

  updatePlayerScore = (id, score) => {
    const updatedPlayers = this.state.players.map(
      player => {
        if (player.id === id) {
          return {
            ...player,
            score
          }
        }
        else {
          return player
        }
      }
    )
    this.setState({ players: updatedPlayers })
  }

  renderPlayer = (player) => {
    return (
      <Player
        name={player.name}
        score={player.score}
        id={player.id}
        key={player.id}
        updatePlayerScore={this.updatePlayerScore}
      />
    )
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
      </div>
    )
  }
}