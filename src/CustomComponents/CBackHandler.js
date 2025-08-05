import React, { useState, memo, useEffect } from 'react';
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import Overlay from "react-native-modal-overlay";
import { Global } from '../Common/Global';
import Icons from '../Common/Icons';
import { normalize } from '../CommonStyle/componentStyle';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import HOCIcons from '../HOC/HOCIcons';
import { CButtonShadow, CShadowDynamic, isNU } from '../CommonStyle/ComponentFunctions';
import HShadowButton from '../HOC/HShadowButton';
import ABlink from '../Alerts/ABlink';

export default function CBackHandler(props) {
  const [overlay, setOverlay] = useState(true)
  const [text, onChangeText] = React.useState('');
  const [data, setData] = useState(props.data);

  const lightenColor = (hex, percent) => {
    // Remove the # if present
    hex = hex.replace(/^#/, '');

    // Parse R, G, B
    const num = parseInt(hex, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;

    // Blend with white
    r = Math.round(r + (255 - r) * (percent / 100));
    g = Math.round(g + (255 - g) * (percent / 100));
    b = Math.round(b + (255 - b) * (percent / 100));

    return `rgb(${r}, ${g}, ${b})`;
  };

  function getPopupContainerStyleAndroid() {

    return props.type == 6 ?
      {
        position: 'absolute',
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.24,
        padding: 0,
        borderRadius: 5,
        paddingBottom: normalize(7),
        ...CShadowDynamic(-3, 3, 10, 0, getObject(props.type).themecolor),
        bottom: Dimensions.get('screen').height * 0.4,
        backgroundColor: getObject(props.type).backgroundcolor
      } :
      {
        position: 'absolute',
        alignSelf: 'center',
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.27,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 2,
        padding: 0,
        backgroundColor: getObject(props.type).backgroundcolor,
        paddingBottom: normalize(7),
        borderColor: getObject(props.type).themecolor,
        ...CShadowDynamic(-5, 5, 15, -5, getObject(props.type).themecolor),
        bottom: 0
      }
      ;
  }

  function getObject(key) {

    switch (key) {
      case 1: return {
        "themecolor": Global.AppTheme.primary_color,
        "backgroundcolor": '#aac8f1ff',
        "icongroup": 5,
        "iconname": "lock",
        "button1": "CANCEL",
        "button2": "CONFIRM",
        "heading": "INSTALLATION KEY",
        "bottom": 0,
        "displaytext": "Please enter installation key to continue."
      }
      case 2: return {
        "themecolor": Global.AppTheme.primary_color,
        "backgroundcolor": '#aac8f1ff',
        "icongroup": 5,
        "iconname": "save",
        "button1": "No",
        "button2": "VERIFY",
        "heading": "VERIFICATION",
        "bottom": 0,
        "displaytext": "Please make sure data saved before verify, Are you sure you want to verify ?"
      }
      case 3: return {
        "themecolor": Global.AppTheme.primary_color,
        "backgroundcolor": '#aac8f1ff',
        "icongroup": 5,
        "iconname": "file-invoice",
        "button1": "No",
        "button2": "Yes",
        "heading": "DELETION",
        "bottom": 0,
        "displaytext": "Do you want share consent form?"
      }
      case 4: return {
        "themecolor": '#d32727',
        "backgroundcolor": '#ffeaeaff',
        "icongroup": 5,
        "iconname": "trash",
        "button1": "No",
        "button2": "Yes",
        "heading": "DELETION",
        "bottom": 0,
        "displaytext": isNU(props.displaytext) ? props.displaytext : "Do you want to delete?"
      }
      case 5: return {
        "themecolor": '#e3a63d',
        "backgroundcolor": '#fff7eeff',
        "icongroup": 3,
        "iconname": "content-save-alert", // exclamation-triangle
        "button1": "No",
        "button2": "Yes",
        "heading": "EXIT WITHOUT SAVE ?",
        "bottom": 0,
        "displaytext": "Hold On, Are you sure you want to exit without save ?"
      }
      case 6: return {
        "themecolor": Global.AppTheme.primary_color,
        "backgroundcolor": '#aac8f1ff',
        "icongroup": 8,
        "iconname": "log-out-outline",
        "button1": "No",
        "button2": "Yes",
        "heading": "LOG OUT",
        "displaytext": 'Hold on, Are you sure you want to log out ?',
      }
      case 7: return {
        "themecolor": Global.AppTheme.primary_color,
        "backgroundcolor": '#aac8f1ff',
        "icongroup": 5,
        "iconname": "exclamation-triangle",
        "button1": "No",
        "button2": "Yes",
        "heading": "SWITCH SCREEN WITHOUT SAVE ?",
        "bottom": 0,
        "displaytext": "Hold On, Are you sure you want to switch screen without save ?"
      }
      case 8: return props.displaybuttons ?
        {
          ...props.displaybuttons,
          "displaytext": isNU(props.displaytext) ? props.displaytext : '',
          "bottom": 0,
          "themecolor": Global.AppTheme.primary_color,
          "backgroundcolor": '#aac8f1ff',
        }
        : {
          "displaytext": isNU(props.displaytext) ? props.displaytext : '',
          "themecolor": Global.AppTheme.primary_color,
          "backgroundcolor": '#aac8f1ff',
          "icongroup": 5,
          "iconname": "exclamation-triangle",
          "button1": "No",
          "button2": "Yes",
          "heading": "CONFIRMATION",
          "bottom": 0
        }
      case 9: return {
        "themecolor": '#8d1897',
        "backgroundcolor": lightenColor('#8d1897',90),
        "icongroup": 5,
        "iconname": "list-ul", //exclamation-triangle
        "button1": "No",
        "button2": "Yes",
        "heading": "EXIT WITHOUT LOADING TEMPLATE ?",
        "bottom": 0,
        "displaytext": "Hold On, Are you sure you want to go back without loading template ?"
      }
      default: return {
        "themecolor": Global.AppTheme.primary_color,
        "backgroundcolor": '#aac8f1ff',
        "icongroup": 5,
        "iconname": "exclamation-triangle",
        "button1": "No",
        "button2": "Yes",
        "heading": "CONFIRMATION",
        "bottom": 0,
        "displaytext": "Do you want to go back ?"
      }
    }
  }

  function containerStyle() {

    return {
      width: '100%',
      backgroundColor: '#00000014'
    }
  }

  return (
    <Overlay
      visible={overlay}
      onClose={() => { getClose() }}
      // animationType="bounceIn"
      // animationDuration={1000}
      closeOnTouchOutside={true}
      containerStyle={containerStyle()}
      childrenWrapperStyle={getPopupContainerStyleAndroid()}
    >
      <View style={{
        // marginTop: normalize(-10),
        // width: Dimensions.get('window').width - 10,
        flex: 1,
        borderRadius: 15,
        borderWidth: 0
      }}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          borderWidth: 0
        }}>

          <View style={{ alignItems: 'center', borderWidth: 0 }}>
            <HOCIcons.Icons
              icongroup={getObject(props.type).icongroup}
              name={getObject(props.type).iconname}
              size={normalize(55)}
              color={getObject(props.type).themecolor}
              style={{
                textAlign: 'center',
                // marginVertical: normalize(10),
                // opacity: 0.6,
                textShadowColor: 'grey',
                textShadowOffset: { width: -2, height: 2 },
                textShadowRadius: 5,
              }}
            />
          </View>

          <View style={{ borderWidth: 0 }}>
            <Text numberOfLines={3} style={{
              color: 'black',
              fontSize: normalize(14),
              fontWeight: '400',
              textAlign: 'center',
              paddingHorizontal: normalize(5)
            }}>
              {getObject(props.type).displaytext}
            </Text>
          </View>
        </View>

        {props.type == 1 ?
          <TextInput
            style={{
              height: normalize(30),
              padding: 5,
              fontWeight: 'bold',
              width: normalize(190),
              alignSelf: 'center',
              textAlign: 'center',
              borderBottomColor: Global.AppTheme.primary_color,
              borderBottomWidth: 3,
              fontSize: normalize(14),
              color: 'black'
            }}
            placeholder='Enter key'
            keyboardType="default"
            onChangeText={onChangeText}
            value={text}
          />
          : null}

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            borderWidth: 0,
          }}>

          <HShadowButton
            useicon={false}
            usetext={true}
            buttonstyle={{
              margin: normalize(5),
              borderLeftWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 5,
              borderWidth: 0,
              borderColor: Global.AppTheme.primary_color,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: normalize(35),
              width: '45%',
              ...CShadowDynamic(-3, 3, 7, 0, 'grey'),
            }}
            icongroup={5}
            iconcolor={Global.AppTheme.primary_color}
            iconname={'file-alt'}
            iconsize={normalize(28)}
            iconstyle={{ textAlign: 'center', borderWidth: 0 }}
            displaytext={getObject(props.type).button1}
            buttonCallback={() => {
              getClose()
            }}
            disabletextadjust={true}
            numberOfLines={2}
            textstyle={{
              color: 'black',
              fontSize: normalize(12),
              textAlign: 'center',
              fontWeight: 'normal',
            }}
          />

          <HShadowButton
            useicon={false}
            usetext={true}
            buttonstyle={{
              margin: normalize(5),
              borderLeftWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 5,
              borderWidth: 0,
              borderColor: Global.AppTheme.primary_color,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: getObject(props.type).themecolor,
              height: normalize(35),
              width: '45%',
              ...CShadowDynamic(-2, 2, 5, 1, 'grey'),
            }}
            icongroup={5}
            iconcolor={Global.AppTheme.primary_color}
            iconname={'file-alt'}
            iconsize={normalize(28)}
            iconstyle={{ textAlign: 'center', borderWidth: 0 }}
            displaytext={getObject(props.type).button2}
            buttonCallback={() => {
              props.callBack(text)
            }}
            disabletextadjust={true}
            numberOfLines={2}
            textstyle={{
              color: 'white',
              fontSize: normalize(12),
              textAlign: 'center',
              fontWeight: 'normal',
              // lineHeight: normalize(8)
            }}
          />

        </View>
      </View>
    </Overlay >
  );

  function getClose() {
    setOverlay(false)
    props.close != undefined ? props.close(false) : null
  }
}

