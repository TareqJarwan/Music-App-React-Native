/**
 * ToDo: fix the scolling issue and load more
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ArtistItem from '../components/ArtistItem';
import {fetchArtists} from '../services/api-client';

const Artists = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setItems(await fetchArtists(pageNumber));
      setLoading(false);
    };
    fetchAPI();
  }, [pageNumber]);

  const navigateTo = (item) => {
    navigation.navigate('Artist', {artist: item});
  };

  const loadingSpinner = (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="tomato" />
      <Text style={styles.smallText}>Loading Artists...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of Artists</Text>
      {loading && loadingSpinner}
      {!loading && (
        <FlatList
          onEndReached={() => setPageNumber(pageNumber + 1)}
          data={items}
          keyExtractor={(item, index) => {
            var x = Math.random() * 100000;
            return x.toString();
          }}
          renderItem={({item}) => (
            <ArtistItem item={item} navigateTo={navigateTo} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spinner: {
    paddingBottom: 300,
  },
  smallText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    color: 'tomato',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'tomato',
  },
});

export default Artists;
