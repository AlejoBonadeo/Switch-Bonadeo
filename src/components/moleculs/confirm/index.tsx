import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

interface Props {
    selectedNumber: number;
    handleStartGame: () => void
}

const Confirm = ({ selectedNumber, handleStartGame }: Props) => {
    return (
        <View style={styles.confirmedContainer}>
            <Text style={styles.confirmedText}>El número elegido es: {selectedNumber}</Text>
            <Button title="Comenzar Juego" onPress={handleStartGame}/>
        </View>
    )
}

export default Confirm
