import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../confirm/styles'

interface Props {
    selectedNumber: number;
    finalNumber: number;
    handleRestart: () => void
}

const Game = ({ selectedNumber, finalNumber, handleRestart }: Props) => {
    return (
        <View style={styles.confirmedContainer}>
            <Text style={styles.confirmedText}>
                {
                    selectedNumber === finalNumber
                    ? 'Ganaste! '
                    : 'Perdiste! '
                }
                El número era { finalNumber }
            </Text>
            <Button title="volver a jugar" onPress={handleRestart}/>
        </View>
    )
}

export default Game
