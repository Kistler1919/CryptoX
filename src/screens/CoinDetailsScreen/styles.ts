import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        width: '100%',
        marginVertical: 10,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 25
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    symbol: {
        color: '#6b6b6b',
        fontWeight: '700'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 15,
    },
    label: {
        fontWeight: '700',
        color: '#707070',
        marginBottom: 5
    },
    value: {
        fontSize: 24,
    },
    valueContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    button: {
        flex: 1,
        margin: 10,
        height: 50,
        borderRadius: 25, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
})

export default styles;