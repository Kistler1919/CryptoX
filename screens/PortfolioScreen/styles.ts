import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: 180,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777',
    },
    balance: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#000',
    },
    balanceContainer: {
        width: '100%',
        marginVertical: 20,
    }
})

export default styles;