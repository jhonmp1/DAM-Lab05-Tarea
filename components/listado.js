import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

import NavigationBar from './navigationBar';

function Item({name,image}) {
    return (
        <View style={styles.item}>
            <Image source={{uri:image}} style={{height: 60, width: 60, borderRadius: 400/ 2, }} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

//Este componente se encarga de listar los items que obtenemos de la API
export default class Listado extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        //Esta es la API de la que sacamos la lista
        await fetch('https://api.tretton37.com/ninjas/')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result);
                    this.setState({
                        items:result,
                    });
                },
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
    }
    render() {
      
        const {navigate} = this.props.navigation;

        return (

            <View style={styles.container}>
                <NavigationBar navigate={navigate}/>
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items:[]}
                    renderItem={({item}) => {
                        return(
                            
                            <TouchableOpacity onPress={() => navigate('Detalle', {itemObject: item})}>
                                <Item name={item.name} image={item.imagePortraitUrl} navigation={this.props.navigation}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                    navigation={this.props.navigation}
                />
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
        flexDirection:'row',
        padding: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    name: {
        paddingLeft: 10,
        fontSize: 20,
    },
});


