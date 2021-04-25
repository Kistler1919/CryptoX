import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: '40%',
        aspectRatio: 1,
    },
    googleButton: {
        marginTop: 'auto',
        marginBottom: 60,
        width: '80%',
        borderRadius: 15
    },
    imageButton: {
        // height: 90,
        width: '100%',
        resizeMode: 'contain'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    header1: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#707070'
    },
});

export default styles;