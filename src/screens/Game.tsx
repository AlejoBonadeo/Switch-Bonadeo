import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Action} from '../reducer';

interface Props {
  selectedNumber: number;
  finalNumber: number;
  dispatch: React.Dispatch<Action>;
}

const Game = ({selectedNumber, finalNumber, dispatch}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {selectedNumber === finalNumber ? 'Ganaste! ' : 'Perdiste! '}
        El número era {finalNumber}
      </Text>
      <Button
        title="volver a jugar"
        onPress={() =>
          dispatch({
            type: 'reset',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: 'black',
    marginBottom: 15,
  },
});

export default Game;
