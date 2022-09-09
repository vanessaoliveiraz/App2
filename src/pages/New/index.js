
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Feather} from 'react-native-vector-icons'

function New () {
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Página new</Text>

            <Text style={styles.text}>AGUARDE MAIS NOVIDADES!!  <Feather name='bell' size={25} color={'black'}/></Text>

           
            <Feather name='camera' size={100} color={'black'}/>

            
        </View>
    );

}


export default New;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'arial',
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 12
    },
    container: {
        backgroundColor: 'crimson',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});