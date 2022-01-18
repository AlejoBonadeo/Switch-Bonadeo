import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface Props {
  autoFocus?: boolean;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
    onChangeText?: (text: string) => void;
    value?: string
}

const Input = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props}/>
    </View>
  );
};

export default Input;
