import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Download } from "react-native-feather";

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

import { Card, ListItem, Button, Icon, CheckBox } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const getDynamicWidth = iphone11PropMaxSize => iphone11PropMaxSize / 414 * width;
const getDynamicHeight = iphone11PropMaxSize => iphone11PropMaxSize / 896 * height;

const rocketShip = require('../assets/rocket-ship.png');

export default function PendingInvestmentSignOffScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      
      <Text numberOfLines={1} style={styles.addressText}>#1101 - 1415 West Georgia St, Vancouver</Text>

      <View style={styles.rocketShipContainer}>
        <Image style={styles.rocketShip} source={rocketShip} />
      </View>

      <Text style={styles.titleText}>Liftoff Checklist</Text>
      
      <View style={styles.shadowedBox}>
        <Card Card containerStyle={styles.checklistCard}>

          <ScrollView>

            <View style={styles.checklistItemContainer}>
              <View style={styles.squareCheckMarkContainer}>
                < View style={styles.squareCheckMarkTicked} />
              </View>
              <View style={styles.checklistTextContainer}>
                <Text style={styles.checklistMainText}>Fully funded!</Text>
              </View>
              <View style={styles.checklistIconContainer} />
            </View>

            <View style={styles.checklistItemContainer}>
              <View style={styles.squareCheckMarkContainer}>
                < View style={styles.squareCheckMarkTicked} />
              </View>
              <View style={styles.checklistTextContainer}>
                <Text style={styles.checklistMainText}>Property analyzed by CleverWay</Text>
              </View>
              <View style={styles.checklistIconContainer} />
            </View>

            <View style={styles.checklistItemContainer}>
              <View style={styles.squareCheckMarkContainer}>
                < View style={styles.squareCheckMarkUnticked} />
              </View>
              <View style={styles.checklistTextContainer}>
                <Text style={styles.checklistMainText}>Offering Memorandum</Text>
                <Text style={styles.checklistSubText}>Please review and sign.</Text>
              </View>
              <View style={styles.checklistIconContainer}>
                <Download width={30} height={30} color={'#0C7379'} />
              </View>
            </View>

            <View style={styles.checklistItemContainer}>
              <View style={styles.squareCheckMarkContainer}>
                < View style={styles.squareCheckMarkUnticked} />
              </View>
              <View style={styles.checklistTextContainer}>
                <Text style={styles.checklistMainText}>Ownership Agreement</Text>
                <Text style={styles.checklistSubText}>Please review and sign.</Text>
              </View>
              <View style={styles.checklistIconContainer}>
                <Download width={30} height={30} color={'#0C7379'} />
              </View>
            </View>

          </ScrollView>
          
        </Card>
      </View>

      <View style={styles.disclaimerContainer}>
        <View style={styles.squareCheckMarkContainer}>
          < View style={styles.squareCheckMarkUnticked} />
        </View>
        <Text style={styles.disclaimerText}>I have read and understood all of the documents listed above. I agree to the terms and conditions stated in those documents and wish to proceed with this investment.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm Investment 💪</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffff',
    marginLeft: getDynamicWidth(15),
    marginRight: getDynamicWidth(15),
    marginTop: getDynamicHeight(110)
  },
  addressText: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'center'
  },
  rocketShipContainer: {
    marginTop: getDynamicHeight(60),
    marginBottom: getDynamicHeight(60),
    justifyContent: 'center',
    alignItems: 'center'
  },
  rocketShip: {
    width: getDynamicHeight(165),
    height: getDynamicHeight(165),
    transform: [{ rotate: '-45deg' }]
  },
  titleText: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 30,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  shadowedBox: {
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  checklistCard: {
    width: '100%',
    padding: 0,
    paddingTop: getDynamicHeight(10),
    margin: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    maxHeight: getDynamicHeight(260)
  },
  checklistItemContainer: {
    width: '100%',
    minHeight: getDynamicHeight(60),
    flex: 1,
    flexDirection: 'row',
    padding: 0, 
    margin: 0
  },
  squareCheckMarkContainer: {
    flex: 0.2,
    alignItems: 'center',
    paddingTop: 5
  },
  squareCheckMarkTicked: {
    width: 13,
    height: 13,
    backgroundColor: '#50C2C9',
    borderColor: '#000000',
    borderWidth: 2
  },
  squareCheckMarkUnticked: {
    width: 13,
    height: 13,
    borderColor: '#000000',
    borderWidth: 2
  },
  checklistTextContainer:{
    flex: .6
  },
  checklistMainText: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  checklistSubText: {
    // fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontSize: 11,
    lineHeight: 15,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  checklistIconContainer: {
    flex: 0.2,
    alignItems: 'center'
  },
  disclaimerContainer: {
    width: '100%',
    minHeight: getDynamicHeight(100),
    maxHeight: getDynamicHeight(200),
    flex: 1,
    flexDirection: 'row',
    marginTop: getDynamicHeight(20)
  },
  disclaimerText: {
    // fontFamily: 'Poppins',
    flex: 0.8,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.85)'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#0C7379',
    height: getDynamicHeight(40)
  },
  buttonText: {
    // fontFamily: 'Poppins',
    color: '#ffff',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
  }
});
