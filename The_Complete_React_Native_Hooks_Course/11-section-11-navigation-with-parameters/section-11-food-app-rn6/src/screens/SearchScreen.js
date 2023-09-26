import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price == price;
    });
  };

  console.log("results on SearchScreen is : " + results);
  console.log(results);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Bit Spender" />
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

/* NOTE :
- This is an example of using prop, inside prop is contained navigation
const SearchScreen = (prop) => {
  console.log("prop on SearchScreen is : " + prop);
  console.log(prop);
};
*/

/* NOTE :
- This is an example of passing navigation to ResultsList

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price == price;
    });
  };

  console.log("results on SearchScreen is : " + results);
  console.log(results);
  console.log("navigation on SearchScreen is : " + navigation);
    console.log(navigation);

  return (
    // <View style={{flex: 1}}> --> If we use View() using flex: 1 to cover all screen area on Android, or we can use this <>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
       <Text>We have found {results.length} results.</Text> 
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation}/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" navigation={navigation}/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Bit Spender" navigation={navigation}/>
      </ScrollView>
      </>
  );
};
*/