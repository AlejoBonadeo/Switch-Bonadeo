import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 30,
        alignItems: 'center',
        flexGrow: 1/4,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        elevation: 4,
        backgroundColor: '#8EE2ED',
        fontFamily: 'OpenSans-VariableFont_wdth,wght'
    },
    text: {
        fontSize: 18,
        color: '#212121',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: .05,
        justifyContent: 'space-around',
        width: '70%'
    }

})