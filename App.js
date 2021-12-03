import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View, 
  Image, 
  SafeAreaView, 
  // Button,
  Alert,
  ScrollView,
  Dimensions
  // Card, ListItem, Icon
} from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width, height } = Dimensions.get('window');
const propCardWidth = width - 30;

export default function App() {
  const handlePress = () => Alert.prompt('My title', 'my message', text => console.log(text));

  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.photoContainer}
    >
      <View
        style={styles.photoWrapper}
      >
        <Image
          style={styles.photo}
          source={{ uri: data.coverImageUri }}
        />
        <View
          style={[
            styles.photoLabel,
            { backgroundColor: data.photoLabelColor },
          ]}
        >
          <Text style={styles.photoLabelText}>
            { data.photoLabelText }
          </Text>
        </View>
      </View>
    </View>
  );

  const photos = [
    {
      coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
      photoLabelColor: '#FFD300',
      photoLabelText: 'GOTY',
    },
    {
      coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
      photoLabelColor: '#0080ff',
      photoLabelText: 'NEW',
    },
    {
      coverImageUri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
      photoLabelColor: '#2ECC40',
      photoLabelText: '-75%',
    },
    {
      coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg',
      photoLabelColor: '#2ECC40',
      photoLabelText: '-20%',
    },
  ];
  
  const users = [
    {
       name: 'brynn',
       avatar: 'https://picsum.photos/200/300'
    }
   ];

  return (
    <SafeAreaView style={styles.container}>

      <Card containerStyle={styles.propCard}>
        <ScrollView>
          <Card.Title>CARD WITH DIVIDERY</Card.Title>
          <Card.Divider/>

          <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={photos}
            loop
            autoplay={false}
          />

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>

          {
            users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.propCardImage}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text>{'\n'}</Text>
                  <Image
                    style={styles.propCardImage}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text>{'\n'}</Text>
                  <Image
                    style={styles.propCardImage}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text>{'\n'}</Text>
                  <Image
                    style={styles.propCardImage}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text>{'\n'}</Text>
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })
          }
        </ScrollView>
      </Card>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  propCard: {
    width: propCardWidth,
    maxHeight: height - 300,
    flexDirection:'row',
    position: 'absolute',
    top: 90,
    overflow: 'scroll',
    backgroundColor: '#F1FDFE',
    borderRadius: 12,
    padding: 0,
    margin: 0
  },
  propCardImage: {
   width: 200,
   height: 300 
  },

  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: propCardWidth
  },
  photoWrapper: {
    overflow: 'hidden',
  },
  photo: {
    width: propCardWidth,
    height: width * 0.5,
  },
  photoLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  photoLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  }
});


