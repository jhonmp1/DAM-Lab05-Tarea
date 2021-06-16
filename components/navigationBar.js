import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

export default function NavigationBar() {
    return(
        <View style={styles.topBar}>
            <Image source={{uri:'https://pics.freeicons.io/uploads/icons/png/18837429041582692250-512.png'}} style={{height: 40, width: 40 }} />
            <Text style={{color:'black',textAlign: 'center',textAlignVertical: 'center',fontSize:20}}>Agentes</Text>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Agents_of_S.H.I.E.L.D._logo.png/800px-Agents_of_S.H.I.E.L.D._logo.png'}} style={{height: 40, width: 80 }} />
        </View>
    )
}

const styles = StyleSheet.create({  
    topBar: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', 
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between', 
        
        paddingLeft: 10,
        paddingRight: 10
    },
});