import React from 'react';
import {View, Text, Button} from 'react-native';
import {Action} from '../../../reducer';
import {styles} from './styles';

interface Props {
  selectedNumber: number;
  dispatch: React.Dispatch<Action>;
}

const Confirm = ({selectedNumber, dispatch}: Props) => {
  return (
    <View style={styles.confirmedContainer}>
      <Text style={styles.confirmedText}>
        El número elegido es: {selectedNumber}
      </Text>
      <Button
        title="Comenzar Juego"
        onPress={() =>
          dispatch({
            type: 'start',
          })
        }
      />
    </View>
  );
};

export default Confirm;
