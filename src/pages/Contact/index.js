import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import { Feather} from 'react-native-vector-icons';

import AuthContext from '../../contexts/auth';


function Contact () {
    const {logout, usuario} = useContext(AuthContext);

    function handlerLogout(){
        logout();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contatos<Feather name='help-circle' size={25} color={'black'}/></Text>
            <Text style={styles.text}>Entre em Contato Conosco</Text>
            <Feather name='instagram' size={25} color={'black'} />
            <Feather name='facebook' size={25} color={'black'} />
            <Feather name='twitter' size={25} color={'black'} />



            <Button style={styles.button}
            title="logout"
            onPress={handlerLogout}/>
            

            
        </View>
    );

}


export default Contact;

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