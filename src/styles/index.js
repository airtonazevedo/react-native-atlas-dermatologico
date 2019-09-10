import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },

    selectButton: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CCC',
        borderStyle: 'dashed',
        height: 42,

        justifyContent: 'center',
        alignItems: 'center',
    },

    selectButtonText: {
        fontSize: 16,
        color: '#666',
    },

    button: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CCC',
        //borderStyle: 'dashed',
        height: 50,
        backgroundColor: '#13688E',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },


    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginTop: 10,
        fontSize: 16,
    },

    text: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'normal'
    },

    titleText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },

    picker: {
        color: 'red',
        borderWidth: 1,
    },

    pickerItem: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginTop: 10,
        fontSize: 36,
    },

    scrollView: {
        //marginTop: 10,
        //backgroundColor: '#DCDCDC',
        //backgroundColor: 'green', 

        borderRadius: 10,
    },

    blocoScrollView: {
        height: 80,
        backgroundColor: '#e9e9e9',
        borderRadius: 10,
        //flexDirection: 'row',
        marginTop: 5,
    },

    footer: {
        justifyContent: 'flex-end', 
        marginBottom: 15, 
        flex: 1
    }

});

export default styles;
