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
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Carousel, { PaginationLight } from 'react-native-x-carousel';

import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');
const propCardWidth = width - 30;

const sampleMap = require('./assets/sample-map.png');

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


          <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={photos}
            loop
            autoplay={false}
          />

          <Text>#1101 - 1415 West Georgia St, Vancouver</Text>
          <Text>$1,099,000 Asking</Text>

          <View style={{ flex: 1, flexDirection:'row', padding: 0, margin: 0 }}>
            <View style={{flex: 0.25}}>
              <Text style={{textAlign: 'center'}}>2{'\n'}Bath</Text>
            </View>
            <View style={{flex: 0.25}}>
              <Text style={{textAlign: 'center'}}>2{'\n'}Bed</Text>
            </View>
            <View style={{flex: 0.25}}>
              <Text style={{textAlign: 'center'}}>1,2712{'\n'}SqFt</Text>
            </View>
            <View style={{flex: 0.25}}>
              <Text style={{textAlign: 'center'}}>1990{'\n'}Year Built</Text>
            </View>
          </View>

          <Image
            style={styles.photo}
            source={sampleMap}
          />

          <View
            style={{ 
              // flex: 1, flexDirection: 'row',
              // flexWrap: 'wrap',
              width: propCardWidth,
              padding: 10
            }}
          > 
            <Text>
              OUTSTANDING NEW PRICE! UNBEATABLE VALUE IN PRIME COAL HARBOUR! Welcome home to the coveted 01 plan at the Palais Georgia featuring outstanding city and water views. This 2 bed/2 bath CORNER RESIDENCE offers nearly 1300 SF of open living space; spacious bedrooms and fabulous floor to ceiling windows to capture the incredible vistas! Enjoy resort like amenities with indoor pool, hot tub and a fully equipped gym. Two underground parking stalls completes this incredible offering. Situated in one of Vancouver’s most sought after neighbourhoods this opportunity presents both value for your dollar and wonderful potential for capital appreciation. Steps to the Seawall, Marina, Vancouver’s top restaurants and amenities. At $865 p/sf; shop and compare but don’t take too long.
            </Text>
          </View>
          
        </ScrollView>

        <Text>{'\n'}</Text>
        <Card.Title>CARD WITH DIVIDERY</Card.Title>
        <Card.Divider/>
      </Card>

      

      <StatusBar style='auto' />

      <View style={{ position: 'absolute', top: height - 300 + 120 }}>
        <Progress.Bar 
          progress={0.3} 
          width={propCardWidth - 50} 
          height={15}
          color='#32979D'
          unfilledColor='#BFDFE1'
          borderWidth={0}
        />
      </View>

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
    height: height - 300,
    flexDirection:'row',
    position: 'absolute',
    top: 110,
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
