import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'
import Input from '../../atoms/input'

interface Props {
    title: string
    handleChangeText: React.Dispatch<React.SetStateAction<string>>
    handleClean?: () => void
    handleConfirm?: () => void
    number: string
}

const Card = ({title, handleChangeText, handleClean, handleConfirm, number}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Input 
            autoFocus 
            keyboardType='numeric'
            value={number}
            onChangeText={(e) => handleChangeText(e.replace(/[^0-9]/g,''))}
            />
            <View style={styles.buttonContainer}>
                <Button title="Limpiar" onPress={handleClean}/>
                <Button title="Confirmar" onPress={handleConfirm}/>
            </View>
        </View>
    )
}

export default Card
