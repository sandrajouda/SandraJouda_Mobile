import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Header from './Components/Header';

const MarketPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() === '') {
      Alert.alert('Error', 'Item name cannot be empty!', [{ text: 'OK', style: 'destructive' }]);
      return;
    }

    const newItemObj = { id: Date.now().toString(), name: newItem };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  const handleDeleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item name"
          value={newItem}
          onChangeText={setNewItem}
        />
        <View style={styles.addButtonContainer}>
          <Button title="+ Add" color="blue" onPress={handleAddItem} />
        </View>
      </View>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>No items added yet</Text>
      ) : (
        <View>
          {items.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Button title=" - Delete" color="red" onPress={() => handleDeleteItem(item.id)} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
  },
  input: {
    flex: 1,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  addButtonContainer: {
    width: 100,
  },
  emptyText: {
    fontStyle: 'italic',
    marginTop:5,
    padding:20,
    fontSize:15,
    
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    flex: 1,
    marginRight: 8,
  },
});
export default MarketPage;