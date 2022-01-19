import React from 'react';
import {View} from 'react-native';
import Header from '../components/moleculs/header';
import Card from '../components/moleculs/card';
import Title from '../components/atoms/title';
import Confirm from '../components/moleculs/confirm';
import {Action, State} from '../reducer';

export interface ScreenProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const Adivina = ({state, dispatch}: ScreenProps) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Title />
      <Card title="Elige un numero" dispatch={dispatch} number={state.number} />
      {state.confirmed && (
        <Confirm dispatch={dispatch} selectedNumber={state.selectedNumber} />
      )}
    </View>
  );
};

export default Adivina;
