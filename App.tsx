import React, {useReducer} from 'react';
import {SafeAreaView} from 'react-native';
import { reducer } from './src/reducer';
import Adivina from './src/screens/Adivina';
import Game from './src/screens/Game';

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    number: '',
    confirmed: false,
    selectedNumber: 0,
    gameStarted: false,
    finalNumber: 0,
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      {
        state.gameStarted ? 
        <Game
          finalNumber={state.finalNumber}
          dispatch={dispatch}
          selectedNumber={state.selectedNumber}
        />
        :
        <Adivina state={state} dispatch={dispatch} />
      }
    </SafeAreaView>
  );
};

export default App;
