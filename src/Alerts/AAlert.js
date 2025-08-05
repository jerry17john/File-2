import React, { useState, memo, useEffect } from 'react';
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import Overlay from "react-native-modal-overlay";
import { Global } from '../Common/Global';
import Icons from '../Common/Icons';
import { ValueCheck } from '../CommonStyle/ComponentFunctions';
import { normalize } from '../CommonStyle/componentStyle';
import FastImage from 'react-native-fast-image';

export default function AAlert(props) {
  const [overlay, setOverlay] = useState(true)
  const [data] = useState({
    ...props.data,
    "bgcolor": getBgColor(props.data.datavalue),
    "durartion": getDurarion(props.data.datavalue)
  });

  useEffect(() => {
    setTimeout(() => {
      props.close(false)
      setOverlay(false)
    }, data.durartion)
  }, []);

  function getBgColor(key) {
    switch (key) {
      case 1: return "#0ca004"
      case 2: return "#f44e4e"
      case 3: return "#bfbf18"
      case 4: return "#d88304"
      default: return Global.AppTheme.primary_color
    }
  }

  function getTransparentColor(key) {
    switch (key) {
      case 1: return "rgba(0, 90, 0, 0.2)"
      case 2: return "rgba(90, 0, 0, 0.2)"
      case 3: return "rgba(249, 242, 172, 0.2)"
      case 4: return "rgba(249, 212, 167, 0.2)"
      default: return "rgba(0, 0, 0, 0.2)"
    }
  }

  function getDurarion(key) {
    switch (key) {
      case 1: return 2000
      case 2: return 2000
      case 3: return 2000
      case 4: return 2000
      default: return 2000
    }
  }

  function getPopupContainerStyleIOS() {
    return {
      ...styles.overlaystyle,
      backgroundColor: ValueCheck(data.bgcolor) ? data.bgcolor : '#fff',
      bottom: normalize(100),
    };
  }

  return (
    <Overlay
      visible={overlay}
      onClose={() => setOverlay(false)}
      animationType="fadeInUp"
      // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.00)' }}
      animationDuration={500}
      closeOnTouchOutside={false}
      containerStyle={{ width: '100%', backgroundColor: getTransparentColor(data.datavalue) }}
      childrenWrapperStyle={getPopupContainerStyleIOS()}>

      <TouchableOpacity
        style={{ position: 'absolute', right: normalize(15), zIndex: 1, top: normalize(5) }}
        onPress={() => setOverlay(false, props.close(false))}>
        <Icons.AntDesign name={"closecircleo"} size={normalize(15)} color={"#fff"} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', width: '100%', borderWidth: 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0, justifyContent: 'center' }}>
          {/* <FastImage
            style={{
              borderWidth: 0,
              height: normalize(30),
              width: normalize(30),
              borderRadius: normalize(50),
            }}
            resizeMode={'stretch'}
            source={require('../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png')}
          /> */}
          <Icons.Entypo
            color={"#fff"}
            name={'info'}
            size={normalize(15)}
            style={{
              borderWidth: 0
            }}
          />
        </View>



        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

          <Text
            adjustsFontSizeToFit
            style={{
              color: "#fff",
              fontWeight: 'bold',
              fontSize: normalize(16),
              paddingLeft: normalize(7),
            }}>
            {ValueCheck(data.displaytext) ? data.displaytext : ''}
          </Text>
        </View>
      </View>
    </Overlay>
  );


  function getClose() {
    setOverlay(false)
    props.close != undefined ? props.close(false) : null
  }
}


const styles = StyleSheet.create({
  overlaystyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    borderRadius: normalize(30),
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
});


