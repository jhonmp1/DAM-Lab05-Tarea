import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

import NavigationBar from './navigationBar';

export default class Detalle extends Component {
    render() {
        const {params} = this.props.route;
        return ( 
            <View>
                <NavigationBar/>
                <View  style={styles.item}>
                    <Text style={styles.name}>{params.itemObject.name}</Text>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={{uri:params.itemObject.imagePortraitUrl}} style={{height: 200, width: 200, textAlignt: 'center'}} />
                    </View>
                    <Text style={styles.content}>{params.itemObject.mainText}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center'

    },
    name: {
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        fontSize: 20,
    },
});
