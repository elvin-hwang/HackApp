import React from 'react';
import { 
StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity
} from 'react-native';
import ItemModal from './ItemModal';

export default class Main extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            itemArray: [],
            itemText: '',
        };
		 this.onPressAdd = this.onPressAdd.bind(this);  
    }

	onPressAdd () {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

  render() {
    return (
      <View style={styles.container}>
		<View style={styles.header}>
			<Text style={styles.headerText}>- MEDKIT -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>

        </ScrollView>
        <TouchableOpacity onPress={ this.onPressAdd } style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
		<ItemModal ref={'addModal'} parentFlatList={this} >

            </ItemModal>
      </View>
    );
  }

  deleteItem(key) {
        this.state.itemArray.splice(key, 1);
        this.setState({itemArray: this.state.itemArray});
   }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 30
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
	    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 30,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});