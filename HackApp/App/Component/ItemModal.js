import React from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, TouchableOpacity, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import Main from './Main';

var screen = Dimensions.get('window');

export default class ItemModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newItemName: ''
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    //generateKey = (numberOfCharacters) => {
    //    return require('random-string')({length: numberOfCharacters});        
    //}
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New Medication information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ newItemName: text })}
                    placeholder="Enter new item's name"            
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                         if (this.state.newItemName.length == 0) {
                            alert("You must enter item's name");
                            return;
                        }       
                        //const newKey = this.generateKey(24);
                        //const newItem = {
                        //    key: newKey,
                        //    name: this.state.newItemName,
                        //    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                        //};    
                        //flatListData.push(newFood);    
                        //this.props.parentFlatList.refreshFlatList(newKey);                                
                        this.refs.myModal.close();                                                                       
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}