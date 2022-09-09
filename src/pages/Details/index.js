
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Feather} from 'react-native-vector-icons';


function Details () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Detalhes <Feather name='search' size={25} color={'black'} /></Text>
            
            
        </View>
    );

}


export default Details;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'arial',
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 12
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'crimson'
    }
});
