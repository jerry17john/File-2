import React, { useState, useEffect, memo } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { normalize } from '../CommonStyle/componentStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Global } from '../Common/Global';
import Icons from '../Common/Icons';

const COverlay = (WrapComponent) => {
  
  return function (props) {
    const [overlay, setOverlay] = useState(true)
    function getPopupContainerStyle() {
      return {
        position: 'absolute',
        bottom: 0,
        top: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#e0e0e0',
        paddingHorizontal: normalize(5),
      }
    }

    return (
      <Overlay
        visible={overlay}
        onClose={() => props.visibility(false)}
        closeOnTouchOutside
        animationType="fadeInUp"
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.20)' }}
        animationDuration={500}
        childrenWrapperStyle={getPopupContainerStyle()}>
        <View style={{ position: 'absolute', right: 5, top: 5, top: 0, zIndex: 1 }}>
          <TouchableOpacity
            onPress={() => setOverlay(false, props.visibility(false))}
          >
            <Icons.FontAwesome5 name={"angle-double-down"} size={normalize(20)} color={Global.AppTheme.primary_color} />
          </TouchableOpacity>
        </View>

        <View>
          <WrapComponent
            {...props}
          />
        </View>
      </Overlay>
    )
  }
}

export default COverlay;