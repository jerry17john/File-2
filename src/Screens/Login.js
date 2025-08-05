import React, { useState, useEffect } from 'react';
import {
  View, StatusBar, Text, Image, Platform, KeyboardAvoidingView,
  TouchableOpacity, Dimensions, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, SafeAreaView, Linking,
  BackHandler
} from 'react-native';
import AutoScroll from "@homielab/react-native-auto-scroll";
import { Text as AnimText } from 'react-native-animatable';
import { normalize } from '../CommonStyle/componentStyle';
import Icon from '../Common/Icons'
import CCarousel from '../CustomComponents/CCarousel';
import HView from '../HOC/HView';
import Loader from '../Custom/Loader';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CVectorIcon from '../CustomComponents/CVectorIcon';
import RNFetchBlob from 'react-native-blob-util';
import { Global } from '../Common/Global';
import axios from 'axios';
import { isNU } from '../CommonStyle/ComponentFunctions';
import ABlink from '../Alerts/ABlink';
import RNExitApp from 'react-native-exit-app';

function Login(props) {


  
  const [data, setData] = useState(props.route.params.data)
  const { width, height } = Dimensions.get('screen')
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    // setData(loginJson.data)
    // downloadImage()
  }, [isFocused])

    useEffect(() => {
  
          const backAction = () => {
              if (!navigation.isFocused()) {
                  return false;
              }
              else {
                RNExitApp.exitApp()
              }
              return true;
          };
  
          const backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              backAction,
          );
          return () => backHandler.remove();
      }, [navigation]);



  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
      /[^.]+$/.exec(filename) : undefined;
  };

  const downloadImage = () => {
    let date = new Date();
    let image_URL = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle={Platform.OS == "ios" ? 'light-content' : 'dark-content'} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={styles.container}
        >
          <Text
            style={[styles.titleText, {
              paddingLeft: 30,
              paddingRight: 30,
              textShadowColor: Global.AppTheme.primary_color,
              textShadowOffset: { width: normalize(5), height: normalize(5) },
              textShadowRadius: normalize(15),
              textAlign:'center'
            }]}
            // animation='fadeInUp'
            // delay={800}
          >
            {"HOMES"}
          </Text>

          <ScrollView keyboardShouldPersistTaps={'handled'}>
            <View style={{ flex: 1, marginBottom: normalize(100) }}>
              <View>
                <Image
                  style={{ height: height * 0.25, width: width, opacity: 0.7 }}
                  source={{
                    uri: Global.HospitalData != undefined ? Global.HospitalData.bgimage :
                      "https://i.ibb.co/jvj0wdH/Adams-Neilson.jpg"
                  }}
                />
                <TouchableOpacity style={{
                  position: 'absolute', top: normalize(60),
                  right: normalize(20), backgroundColor: Global.AppTheme.primary_color,
                  padding: normalize(5), borderRadius: 1000
                }}
                  onPress={() => Linking.openURL(`tel:${Global.HospitalData.customercare}`)}>
                  <Icon.AntDesign name={"customerservice"}
                    color='#fff'
                    size={normalize(17)} />
                </TouchableOpacity>
              </View>

              <View style={styles.bottomView}>
                <HView
                  component={'EMRLoginLayout'}
                  loader={val => (val == undefined ? null : setIsLoading(val))} 
                />
              </View>

              {data != undefined && data.loginiconset != undefined ?
                <View style={{ backgroundColor: '#fff', marginTop: normalize(5) }}>
                  {/* <Text style={{ color: 'grey', fontWeight: 'bold', paddingHorizontal: normalize(10), marginBottom: normalize(8), fontWeight: 'bold', fontSize: normalize(14) }}>SERVICES</Text> */}
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                    {data.loginiconset.map((item, i) => {
                      return (
                        <TouchableOpacity key={i}
                          onPress={() => console.log("HHH")}
                          style={{
                            borderRadius: normalize(5), 
                            backgroundColor: '#fff',
                            borderWidth: 0.5, 
                            borderColor: '#c7fcd2', 
                            elevation: 2,
                            width: normalize(60), 
                            justifyContent: 'center', 
                            marginLeft: normalize(10),
                            // marginTop: normalize(5), 
                            // marginBottom: normalize(10),
                            alignItems: 'center', 
                            height: normalize(50)
                          }}>
                          <CVectorIcon
                            data={{
                              "disabled": false,
                              "displaytext": item.displaytext,
                              "fontcolor": Global.AppTheme.primary_color,
                              "fontWeight": "bold",
                              "size": 7,
                              "width": 70,
                              "iconname": item.iconname,
                              "iconcolor": Global.AppTheme.primary_color,
                              "iconsize": 25,
                            }}
                            callBack={val => val == undefined ? null : console.log(val)}
                          />
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                  <View>
                    {data != undefined && data.loginnotifications != undefined ?
                      <AutoScroll delay={0} duration={20000}>
                        <View style={{ flexDirection: 'row', paddingLeft: normalize(0) }}>
                          {data.loginnotifications.map((item, k) => {
                            return (
                              <View key={k} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: normalize(20) }}>
                                <Icon.AntDesign name={"notification"} color={"#FF6666"} size={normalize(20)} />
                                <Text style={{ fontSize: normalize(15), fontStyle: 'italic', color: Global.AppTheme.primary_color, paddingLeft: normalize(5) }}>{item.loginnotifications}</Text>
                              </View>)
                          })}
                        </View>
                      </AutoScroll> : null}
                  </View>
                </View> : null}

              {data != undefined && data.slidingimages != undefined ?
                <CCarousel data={data.slidingimages} /> : null}

            </View>
            <View style={{ position: 'absolute', bottom: normalize(50), backgroundColor: '#fff', }}>
            <TouchableOpacity onPress={() => Linking.openURL("http://jescontechnologies.com/").catch(err => notifyMessage("Couldn't load page", 4))}
              style={styles.footer_container}>
              <View style={styles.companyinfo_container}>
                <Image
                  style={{
                    width: '47%',
                    height: '100%',
                    borderRadius: 0,
                    margin: 5,
                    resizeMode: 'cover',
                  }}
                  source={{ uri: "https://i.ibb.co/dkNbcDN/jesconnewlogo.jpg" }}
                />
                <Image
                  style={styles.company_icon}
                  source={require('../Asset/images/companyaddress_transparent.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          </ScrollView>


         
          <View style={{ position: 'absolute', bottom: 0, zIndex: 1, alignSelf: 'center' }}>


            {Platform.OS != 'ios' ?
              <Text style={{ color: Global.AppTheme.secondary_color, fontSize: normalize(10), alignSelf: 'center', fontWeight: 'bold' }}>{Global.CodePushVersion}</Text> : null}
            <Text style={{ color: Global.AppTheme.secondary_color, fontSize: normalize(10), alignSelf: 'center', fontWeight: 'bold' }}>{isNU(Global.version) ? `V ${Global.version}` : null}</Text>
          </View>

          <View style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            width: '100%',
            height: normalize(45),
            justifyContent: 'center',
            borderTopWidth: 0.5
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: normalize(15)
            }}>
              {data != undefined && data.loginfootericons != undefined ? data.loginfootericons.map((item, i) => {
                return (
                  <CVectorIcon
                    key={i}
                    data={{
                      "disabled": false,
                      "displaytext": item.displaytext,
                      "fontcolor": item.color,
                      "fontWeight": "bold",
                      "size": 12,
                      "iconname": item.iconname,
                      "iconcolor": item.color,
                      "iconsize": 22,
                      "functionid": "DF01"
                    }}
                    callBack={val => val == undefined ? null : props.navigation.navigate('WebPage', { data: item })}
                  />
                )
              }) : null}
            </View>
          </View>
          {isLoading ?
            <Loader displaytext={true} /> : null}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>

  )
}

export default Login;

const styles = StyleSheet.create({
  titleText: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.05,
    alignSelf: 'center',
    color: '#fff',
    zIndex: 1,
    elevation: 5,
    fontWeight: 'bold',
    fontSize: normalize(40),
  },
  container: {
    flex: 1,
  },
  bottomView: {
    backgroundColor: '#fff',
    opacity: 0.95,
    marginTop: normalize(-50),
    borderRadius: normalize(20),
    marginHorizontal: normalize(7),
    paddingTop: 5,
    paddingBottom: normalize(10),
    paddingHorizontal: normalize(15),
  },
  companyinfo_container: {
    flexDirection: 'row',
    height: normalize(45),
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  company_icon: {
    width: '47%',
    height: '100%',
    borderRadius: 0,
    margin: 5,
    resizeMode: 'contain',
  },
  footer_container: {
    marginBottom: '1%',
    alignItems: 'center',
    width: '100%',
  },
})