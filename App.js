import { AppLoading, GLView } from 'expo';
import ExpoPhaser from 'expo-phaser';
import React, { Component } from 'react';

class App extends Component {
  state = {
    loading: true
  };

  async componentWillMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return (
      <GLView
        style={{ flex: 1 }}
        onContextCreate={context => startGame({ context })}
      />
    );
  }
}

function startGame({ context }) {
  const game = ExpoPhaser.game({ context });

  game.state.add('Playable', {
    preload: function() {
      console.log('preload()');
    },

    create: function() {
      console.log('create()');
      game.stage.backgroundColor = '#787878';
    },

    update: function() {
      // console.log('update()');
    }
  });

  game.state.start('Playable');
}

export default App;
