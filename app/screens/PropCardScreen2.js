import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react'; 
import { 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View, 
  SafeAreaView, 
  Alert,
  ScrollView,
  Dimensions,
  LayoutAnimation,
  Platform, 
  UIManager,
  Animated,
  Easing,
  Image
} from 'react-native';

import { Card, ListItem, Button, Icon  } from 'react-native-elements';

import Carousel, { PaginationLight } from 'react-native-x-carousel';

import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

const getDynamicWidth = iphone11PropMaxSize => iphone11PropMaxSize / 414 * width; //Based on Iphone11ProMax
const getDynamicHeight = iphone11PropMaxSize => iphone11PropMaxSize / 896 * height; //Based on Iphone11ProMax

const defaultTopMargin = getDynamicHeight(50);
const defaultVertlMargin = getDynamicHeight(10); 
const defaultHorizMargin = getDynamicWidth(10);
const propCardWidth = width - defaultHorizMargin * 2;
const propCardHeight = height
                      - defaultTopMargin
                      - defaultVertlMargin
                      - (propCardWidth / 4 - defaultHorizMargin)
                      - 70;

const sampleMap = require('../assets/sample-map.png');

const photos = [
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_1_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: '',
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_2_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_3_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_4_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_5_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_6_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_7_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_8_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_9_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_10_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_11_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_12_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_13_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  },
  {
    coverImageUri: 'https://ssl.cdn-redfin.com/photo/256/bigphoto/289/R2627289_14_3.jpg',
    photoLabelColor: '#FFD300',
    photoLabelText: 'HOT'
  }
];

export default function PropCardScreen(props) {
  const [descHidden, setDescHidden] = useState(false);
  const [mapLarge, setMapLarge] = useState(false);

  const renderPhoto = data => {
    if (data.photoLabelText) {
      return (
        <View key={data.coverImageUri} style={styles.photoContainer}>
          <View style={styles.photoWrapper}>
            <Image style={styles.photo} source={{ uri: data.coverImageUri }} />
            <View style={[ styles.photoLabel, { backgroundColor: data.photoLabelColor } ]}>
              <Text style={styles.photoLabelText}>{ data.photoLabelText }</Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View key={data.coverImageUri} style={styles.photoContainer}>
          <View style={styles.photoWrapper}>
            <Image style={styles.photo} source={{ uri: data.coverImageUri }} />
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      
      <Card containerStyle={styles.propCard}>
        <Carousel
          pagination={PaginationLight}
          renderItem={renderPhoto}
          data={photos}
          loop
          autoplay={false}
        />
        
        <TouchableWithoutFeedback onPress={() => setMapLarge(!mapLarge)}>  
          <Image style={[ 
            styles.map, 
            mapLarge ? 
              { width: propCardWidth - 2 * defaultHorizMargin, height: propCardWidth - 2 * defaultHorizMargin, borderRadius: propCardWidth - 2 * defaultHorizMargin } :
              { width: getDynamicWidth(120), height: getDynamicWidth(120), borderRadius: getDynamicWidth(120) }
          ]} source={sampleMap} />
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={() => setDescHidden(!descHidden)}>
          <View style={styles.infoBox}>
            
            <Text numberOfLines={1} style={styles.addressText}>#1101 - 1415 West Georgia St, Vancouver</Text>
            <Text style={styles.priceText}>$1,099,000 Asking</Text>
            <View style={styles.metaInfoContainer}>
              <Text style={styles.metaInfo}>2{'\n'}Bath</Text>
              <Text style={styles.metaInfo}>2{'\n'}Bed</Text>
              <Text style={styles.metaInfo}>1,2712{'\n'}Sq.Ft</Text>
              <Text style={styles.metaInfo}>1990{'\n'}Yr. Built</Text>
            </View>

            { descHidden && <Text style={styles.longDescription}>
              OUTSTANDING NEW PRICE! UNBEATABLE VALUE IN PRIME COAL HARBOUR! Welcome home to the coveted 01 plan at the Palais Georgia featuring outstanding city and water views. This 2 bed/2 bath CORNER RESIDENCE offers nearly 1300 SF of open living space; spacious bedrooms and fabulous floor to ceiling windows to capture the incredible vistas! Enjoy resort like amenities with indoor pool, hot tub and a fully equipped gym. Two underground parking stalls completes this incredible offering. Situated in one of Vancouver’s most sought after neighbourhoods this opportunity presents both value for your dollar and wonderful potential for capital appreciation. Steps to the Seawall, Marina, Vancouver’s top restaurants and amenities. At $865 p/sf; shop and compare but don’t take too long.
            </Text>
            }

            <View style={styles.progressBar}>
              <Progress.Bar 
                width={styles.progressBar.width} 
                progress={0.83} 
                height={styles.progressBar.height}
                color='#32979D'
                unfilledColor='#BFDFE1'
                borderWidth={0}
              />
              <Text style={styles.progressBarText}>83% Funded</Text>
            </View>

          </View>
        </TouchableWithoutFeedback>

      </Card>

      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <TouchableOpacity
            style={styles.roundButton}>
            <Text style={styles.roundButtonText}>$0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleButtonContainer}>
          <TouchableOpacity
            style={styles.roundButton}>
            <Text style={styles.roundButtonText}>$10</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleButtonContainer}>
          <TouchableOpacity
            style={styles.roundButton}>
            <Text style={styles.roundButtonText}>$100</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleButtonContainer}>
          <TouchableOpacity
            style={styles.roundButton}>
            <Text style={styles.roundButtonText}>$1K</Text>
          </TouchableOpacity>
        </View>
      </View>
    
      <StatusBar style='auto' />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFF',
    marginLeft: defaultHorizMargin,
    marginRight: defaultHorizMargin,
    marginTop: defaultTopMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  propCard: {
    height: propCardHeight,
    width: propCardWidth,
    overflow: 'hidden',
    backgroundColor: '#F1FDFE',
    borderRadius: 15,
    padding: 0,
    margin: 0
  },
  photo: {
    width: propCardWidth,
    height: propCardHeight,
    resizeMode: 'cover'
  },
  map: {
    // width: getDynamicHeight(120),
    // height: getDynamicHeight(120),
    // borderRadius: getDynamicHeight(120),
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#32979D',
    top: defaultVertlMargin,
    right: defaultHorizMargin
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: defaultHorizMargin
  },
  addressText: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 32,
    color: '#FFFFFF'
  },
  priceText: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 32,
    paddingTop: 0,
    color: '#FFFFFF'
  },
  metaInfoContainer: { 
    flex: 1, 
    flexDirection:'row', 
    alignItems: 'center',
    height: 50,
    marginBottom: defaultVertlMargin
  },
  metaInfo: {
    // fontFamily: 'Poppins',
    flex: 1,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF'
  },
  longDescription: { 
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    paddingBottom: defaultVertlMargin,
    color: '#FFFFFF'
  },
  progressBar: { 
    width: propCardWidth - 2.3 * defaultHorizMargin,
    height: 25,
    alignItems: 'center'
  },
  progressBarText: {
    position: 'absolute',
    color: '#FFFF',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 25
  },
  buttonsContainer: {
    flex: 1, 
    flexDirection:'row', 
    width: propCardWidth,
    marginTop: defaultVertlMargin,
    marginBottom: defaultVertlMargin
  },
  singleButtonContainer: {
    alignItems: 'center',
    flex: 1
  },
  roundButton: {
    width: propCardWidth / 4 - defaultHorizMargin,
    height: propCardWidth / 4 - defaultHorizMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#32979D'
  },
  roundButtonText: {
    // fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FFFF'
  }
});
