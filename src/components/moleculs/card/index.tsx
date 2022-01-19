import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import Input from '../../atoms/input';
import {Action} from '../../../reducer';

interface Props {
  title: string;
  dispatch: React.Dispatch<Action>;
  number: string;
}

const Card = ({title, dispatch, number}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Input
        autoFocus
        keyboardType="numeric"
        value={number}
        onChangeText={e =>
          dispatch({
            type: 'handleChange',
            payload: e.replace(/[^0-9]/g, ''),
          })
        }
      />
      <View style={styles.buttonContainer}>
        <Button title="Limpiar" onPress={() => dispatch({type: 'clean'})} />
        <Button
          title="Confirmar"
          onPress={() => {
            if (isNaN(Number(number))) return;
            dispatch({
              type: 'confirm',
              payload: Number(number),
            });
          }}
        />
      </View>
    </View>
  );
};

export default Card;
