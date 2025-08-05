import React, { useState, memo, useEffect } from 'react';
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import Overlay from "react-native-modal-overlay";
import { Global } from '../Common/Global';
import Icons from '../Common/Icons';
import { ValueCheck } from '../CommonStyle/ComponentFunctions';
import { normalize } from '../CommonStyle/componentStyle';
import FastImage from 'react-native-fast-image';

export default function AAlertIOS(props) {
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

    function getDurarion(key) {
        switch (key) {
            case 1: return 2500
            case 2: return 2500
            case 3: return 2500
            case 4: return 2500
            default: return 2500
        }
    }

    return (
        <View style={{ position: 'absolute', bottom: normalize(80), zIndex: 1 }}>
            <View style={{
                flexDirection: 'row', backgroundColor: data.bgcolor,
                width: Dimensions.get('screen').width, paddingHorizontal: normalize(10),
                paddingVertical: normalize(10), borderRadius: normalize(10),
                borderWidth: normalize(2), borderColor: '#fff'
            }}>
                {/* <FastImage
                    style={{
                        height: normalize(30),
                        width: normalize(30),
                        borderRadius: normalize(50),
                        alignSelf: 'flex-start'
                    }}
                    resizeMode={'stretch'}
                    source={require('../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png')}
                /> */}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: normalize(15) }}>
                    <Icons.Entypo
                        color={"#fff"}
                        name={'info'}
                        size={normalize(15)}
                    />
                    <Text
                        adjustsFontSizeToFit
                        style={{
                            color: "#fff",
                            fontWeight: 'bold',
                            fontSize: normalize(16),
                            paddingLeft: normalize(7),
                            paddingRight: normalize(30),
                        }}>
                        {ValueCheck(data.displaytext) ? data.displaytext : ''}
                    </Text>
                </View>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    overlaystyle: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        borderRadius: normalize(15),
        borderWidth: 2,
        borderColor: '#e0e0e0',
    },
});


