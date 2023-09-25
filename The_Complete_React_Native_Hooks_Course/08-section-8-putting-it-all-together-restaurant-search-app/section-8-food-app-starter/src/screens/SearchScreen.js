import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log("Term was submitted. Term is : " + term + ". This will call onEndEditing() in Search Bar and it is from onTermSubmit on Search Screen ! ")}
      />
      <Text>Search Screen</Text>
      <Text>Term is : {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
