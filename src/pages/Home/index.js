import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {Feather} from 'react-native-vector-icons';






function Home () {
    
    return (
        <View style={styles.container} >

        <Text style={styles.text}>FEED</Text>
        <Image source={require('../../assets/feed-2.jpg')}
        style={styles.image}/>
        </View>
    );
}


export default Home;

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'crimson'

    },
    image: {
        height: 450,
        width: 450,
        marginBottom: 450,
        marginTop: 450,

        
    }
   
   

});
