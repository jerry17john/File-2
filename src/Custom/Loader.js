import React, { useState } from "react";
import Overlay from "react-native-modal-overlay";
import {
    StyleSheet, Dimensions, View, ActivityIndicator, Image,
    Modal
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { normalize } from "@rneui/themed";
import FastImage from 'react-native-fast-image';
import { APIURL } from "../Common/apiConstants";

export default function Loader(props) {
    const [isloading, setIsLoading] = useState(true)

    function getPopupContainerStyle() {
        return {
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            backgroundColor: 'transparent',
            width: Dimensions.get('window').width,

            // borderRadius: 20,
            // alignItems: 'center',
            // justifyContent: 'center',
            // height: Dimensions.get('window').height * 0.15,
            // backgroundColor: 'transparent',
            // width: Dimensions.get('window').width * 0.3,
        };
    }

    // return (
    //     <Modal style={{backgroundColor:'red',overflow:'hidden'}} animationType='none'>
    //         <View style={{ borderRadius: normalize(20), padding: 5, backgroundColor: 'white', borderWidth: 1, borderColor: "lightblue" }}>
    //             <FastImage
    //                 style={layoutstyles.icon_style}
    //                 // source={require('../Asset/gif/Search_blue.gif')}
    //                 source={require('../Asset/gif/heartpulse.gif')}
    //             />
    //         </View>
    //     </Modal>
    // )

    return (
        <Modal
            animationType='none'
            transparent={true}
            visible={true}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                // setModalVisible(!modalVisible);
            }}
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
            }}>
                <View style={{ borderRadius: normalize(20), padding: 5, backgroundColor: 'white', borderWidth: 1, borderColor: "lightblue", position: 'absolute' }}>
                    <FastImage
                        style={layoutstyles.icon_style}
                        // source={require('../Asset/gif/Search_blue.gif')}
                        // source={require('../Asset/gif/heartpulse.gif')}
                            source={{ uri: APIURL + 'file/getCommonFile/image/heartpulse.gif' }}
                    />
                </View>
            </View>
        </Modal>
    )

    // return (
    //     <Overlay
    //         visible={isloading}
    //         containerStyle={
    //             getOverlayContainerStyle(props.displaytext ? 'rgba(0, 0, 0, 0.00)' : "#FFF")
    //         }
    //         // containerStyle={{
    //         //     overflow:'hidden'
    //         // }}
    //         // style={{
    //         //     overflow:'hidden'
    //         // }}
    //         childrenWrapperStyle={getPopupContainerStyle(1000)}
    //         // animationDuration={500}
    //         closeOnTouchOutside={true}
    //     >
    //         <View style={{ borderRadius: normalize(20), padding: 5, backgroundColor: 'white',borderWidth:1,borderColor:"lightblue" }}>
    //             <FastImage
    //                 style={layoutstyles.icon_style}
    //                 // source={require('../Asset/gif/Search_blue.gif')}
    //                 source={require('../Asset/gif/heartpulse.gif')}
    //             />
    //         </View>
    //     </Overlay>
    // )

    function getOverlayContainerStyle(backgroundcolor) {
        return (
            {
                backgroundColor: backgroundcolor,
                alignItems: 'center',
                justifyContent: 'center',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,

            }
        )
    }
}
const layoutstyles = StyleSheet.create({
    icon_style: {
        height: normalize(70),
        width: normalize(70),
        justifyContent: "center",
        alignItems: "center"
    }
})