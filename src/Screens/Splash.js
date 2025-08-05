import React, { useEffect, useState } from 'react'
import { View, StatusBar, Text, Image, TouchableWithoutFeedback, Platform, ActivityIndicator, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, BackHandler, Modal, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { normalize } from '../CommonStyle/componentStyle';
import CBackHandler from '../CustomComponents/CBackHandler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isNU, isNUQ, notifyMessage } from '../CommonStyle/ComponentFunctions';
import { Global } from '../Common/Global';
import Icons from '../Common/Icons';
import RNExitApp from 'react-native-exit-app';
import NetworkServiceCall from '../Common/NetworkServiceCall';
import { APIURL } from '../Common/apiConstants';
import RNFS from 'react-native-fs';
import HOCIcons from '../HOC/HOCIcons'; 
import FastImage from 'react-native-fast-image';
const DEST_PATH = `${RNFS.DocumentDirectoryPath}/main.jsbundle`;

export default function Splash(props) {

    const [Loading, setLoading] = useState(false)
    const [backHandler, setBackHandler] = useState(false)
    const [progress, setProgress] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showText, setShowText] = useState();
    const [updateVersion, setUpdateVersion] = useState();
    const [retry, setRetry] = useState(false);

    useEffect(() => {

        if (__DEV__) {
            getData()
            //   getApiVersionCheck();
        }
        else {
            if (Platform.OS == 'android') {
                getApiVersionCheck();
            }
            else {
                getData();
            }
        }
    }, [])

    useEffect(() => {
        const backAction = () => {
            RNExitApp.exitApp()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    };

    function goBackFunction(showText, retry, isLoading) {

        if (isNU(showText) && !retry && isLoading) {
            RNExitApp.exitApp()
        }
        else {
        }
    }

    function getApiVersionCheck() {

        setIsLoading(true);
        setShowText();
        setUpdateVersion();
        setRetry(false);
        setProgress(null);

        const buttonapi = APIURL + "emr/emrcommonget/rnbundleversioncheck " + Global.hospitalcode;
        console.log("getApiVersionCheck buttonapi ", JSON.stringify(buttonapi));
        NetworkServiceCall("get", buttonapi)
            .then(function (response) {

                const responsee = {
                    httpstatus: 200,
                    data: {
                        version: "2025031402",
                        bundleUrl: "http://52.66.16.64/8090/emrbundle/1",
                        descriptions: "App updated. Press back and reopen the app."
                    }
                };

                if (response.httpstatus == 200 && isNU(response.data) && isNUQ(response.data.version) && isNUQ(response.data.bundleUrl) && isValidUrl(response.data.bundleUrl) && isNU(response.data.descriptions)) {
                    if (Global.version == response.data.version) {
                        getData();
                    }
                    else {
                        setUpdateVersion(response.data.version);
                        downloadBundleWithProgress((p) => setProgress(p), response.data.bundleUrl, response.data.version, response.data.descriptions);
                    }
                } else {
                    setIsLoading(false);
                    setRetry(true);
                    notifyMessage('Network Error.Please try again.', 2);
                }
            })
    }

    const downloadBundleWithProgress = async (onProgressUpdate, url, newversion, desc) => {

        return new Promise((resolve, reject) => {
            const tempFilePath = `${RNFS.TemporaryDirectoryPath}/temp-bundle.zip`; // or .jsbundle or whatever your file type is

            const download = RNFS.downloadFile({
                fromUrl: url,
                toFile: tempFilePath,
                progressInterval: 500, // ms
                progress: (res) => {
                    const percentage = Math.floor((res.bytesWritten / res.contentLength) * 100);
                    console.log(`[OTA] Download progress: ${percentage}%`);
                    if (onProgressUpdate) {
                        onProgressUpdate(percentage);
                    }
                },
            });

            download.promise.then(async (res) => {
                    console.log('[OTA] Download complete! Moving file...');
                    try {
                        await RNFS.moveFile(tempFilePath, DEST_PATH);
                        console.log('[OTA] File moved to final destination!');
                        setShowText(desc);
                        resolve(true);
                        RNExitApp.exitApp();
                    } catch (moveErr) {
                        console.warn('[OTA] Failed to move file:', moveErr.message);
                        reject(moveErr);
                        setRetry(true);
                    }
                })
                .catch((err) => {
                    console.warn('[OTA] Download failed:', err.message);
                    reject(err);
                    setRetry(true)
                });
        });
    }

    const removeValue = async () => {

        try {
            await AsyncStorage.removeItem(Global.asyncStorageAppKey)
        } catch (e) {
            // remove error
        }
    }

    function getLoginPageData(object, key) {

        setLoading(true);
        let buttonapi = "http://" + object.APIP + ":" + object.PortNumber + "/" + object.ApiLink + " '" + key + "'," + object.ApiVersion
        console.log("getLoginPageData buttonpai ", JSON.stringify(buttonapi));
        NetworkServiceCall("get", buttonapi, "")
            .then(function (response) {
                if (response.httpstatus == 200) {
                    if (object.ValidationStatus == true) {
                        // Global.ipAddress = object.APIP
                        // Global.port = object.PortNumber
                        Global.HospitalData = response.data.hospitalInfo
                        Global.InstallationKey = key
                        props.navigation.navigate('Login', { data: response.data })
                        setLoading(false)
                    } else {
                        setBackHandler(false) // setBackHandler(true)
                        notifyMessage("Install validation failed...", 3)
                        setLoading(false)
                    }
                } else {
                    setBackHandler(false) // setBackHandler(true)
                    notifyMessage('Network Error... ', 4)
                    setLoading(false)
                }
            })
    }

    function getValidation(otp) {

        let buttonapi = Global.licenseIp + "'" + otp + "'" //local ip
        console.log("getValidation buttonapi", buttonapi);
        setLoading(true);
        NetworkServiceCall("get", buttonapi, "")
            .then(function (response) {
                console.log('getValidation response @@@@@@@@@@@', JSON.stringify(response));
                if (response.httpstatus == 200) {
                    if (response.data != undefined && response.data != null && response.data.ValidationStatus == true) {
                        setBackHandler(false)
                        storeData(otp, response.data)
                        getLoginPageData(response.data, otp)
                    } else {
                        setLoading(false);
                        setBackHandler(false) // setBackHandler(true)
                        notifyMessage("Validation Failed...Please enter right key", 3)
                    }
                } else {
                    setLoading(false);
                    notifyMessage('Network Error... ', 4)
                }
            })
    }

    const storeData = async (value, response) => {
        try {
            let newValue = {
                key: value,
                hospitaldata: response,
            }
            const jsonValue = JSON.stringify(newValue)
            await AsyncStorage.setItem(Global.asyncStorageAppKey, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(Global.asyncStorageAppKey)
            InstallationData = JSON.parse(jsonValue)
            return jsonValue != null && jsonValue != undefined ?
                (setBackHandler(false),
                    getLoginPageData(InstallationData.hospitaldata, InstallationData.key)
                ) :
                getValidation(Global.preinstallationkey);
            // setBackHandler(true);
        } catch (e) {
            // error reading value
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Global.AppTheme.primary_color }}>
            <StatusBar
                // translucent
                backgroundColor={Global.AppTheme.primary_color}
                barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
            />

            {isLoading ?
                <Modal
                    animationType='none'
                    transparent={true}
                    visible={true}
                    onRequestClose={() => {
                        goBackFunction(showText, retry, isLoading)
                    }}
                    style={{ alignSelf: 'center', padding: 0 }}
                >
                    <View style={{
                        borderWidth: 0, borderColor: 'white',
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('screen').width,
                        justifyContent: 'center', alignItems: 'center', paddingBottom: normalize(50)
                    }}>
                        <View style={{
                            backgroundColor: 'white', borderWidth: 1, elevation: 5, borderColor: 'grey', borderRadius: 3, alignItems: 'center', alignSelf: 'center', justifyContent: 'center',
                            height: Dimensions.get('screen').height * 0.2,
                            minwidth: Dimensions.get('screen').width * 0.8
                        }}>
                            {retry ?
                                <View style={{ flex: 1, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            getApiVersionCheck();
                                        }}
                                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <HOCIcons.MaterialCommunityIcons
                                            name={'reload'}
                                            color={'red'}
                                            size={normalize(30)}
                                            style={{ marginHorizontal: normalize(8) }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: normalize(12),
                                                fontWeight: 'bold',
                                                color: 'red',
                                            }}>
                                            Retry
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                :

                                <View style={{ flex: 1, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                                    {showText ?
                                        null :
                                        <FastImage style={{
                                            width: normalize(150),
                                            height: normalize(100),
                                        }}
                                            source={{
                                                uri: APIURL + 'file/getCommonFile/image/transfer.gif'
                                            }}
                                        />
                                    }

                                    {showText ?
                                        null :
                                        <Text style={{ color: 'black' }}>
                                            {isNU(progress) ? `${progress} % Downloading}` : null}
                                        </Text>
                                    }
                                    {showText ?
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                                            <Text style={{ color: '#cf1818', fontSize: normalize(12), textAlign: 'center' }}>
                                                {showText ? showText : null}
                                            </Text>
                                        </View>
                                        : null}
                                    {updateVersion ?
                                        <Text style={{ color: Global.AppTheme.primary_color, fontSize: normalize(10) }}><Text style={{ color: 'black', fontSize: normalize(10) }}>{"Latest Version : "}</Text>{updateVersion}</Text>
                                        : null}
                                </View>
                            }
                            {showText ?
                                null :
                                <View>
                                    <Text style={{ color: Global.AppTheme.primary_color, fontSize: normalize(10) }}><Text style={{ color: 'black', fontSize: normalize(10) }}>{"Current Version : "}</Text>{Global.version}</Text>
                                </View>
                            }
                        </View>
                    </View>
                </Modal>

                : null}

            <TouchableOpacity onPress={() =>{
                // setBackHandler(false)
                // setBackHandler(true)
            }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Image
                        style={{ width: normalize(70), height: normalize(70), resizeMode: 'contain', borderRadius: normalize(30) }}
                        source={require('../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png')}
                    /> */}
                    <Text style={{ color: Global.AppTheme.text_color, fontWeight: 'bold', fontSize: normalize(25), textAlign: 'center' }}>{Global.SplashHeading ? Global.SplashHeading : 'EMR'}</Text>
                </View>
            </TouchableOpacity>

            <View style={{ paddingTop: normalize(40), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Global.AppTheme.text_color, paddingBottom: normalize(8) }}>from,</Text>
                <Text style={{ color: Global.AppTheme.text_color, fontWeight: 'bold', fontSize: normalize(16) }}>JESCON TECHNOLOGIES PVT LTD</Text>
                <View style={{ flexDirection: 'row', width: normalize(90), paddingTop: normalize(10), justifyContent: 'space-between' }}>
                    {['facebook', 'web', 'linkedin'].map((item, i) => (
                        <TouchableOpacity key={i}
                            onPress={() => removeValue()}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                            <MaterialCommunityIcons
                                name={item}
                                color={Global.AppTheme.text_color}
                                size={normalize(15)}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                {Platform.OS != 'ios' ?
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: normalize(16), paddingTop: normalize(20) }}>{Global.CodePushVersion}</Text>
                    </View>
                    : null}
                <Text style={{ color: 'white', fontSize: normalize(10), paddingTop: normalize(5) }}>{isNU(Global.version) ? `V ${Global.version}` : null}</Text>

                <TouchableOpacity
                    disabled={Loading ? true : false}
                    onPress={() => {

                        if (Platform.OS == 'android') {
                            console.log('pressed')
                            getApiVersionCheck();
                        }
                        else {
                            getData();
                        }
                    }
                    }
                    style={{ marginTop: normalize(20), alignItems: 'center' }}>
                    <Icons.FontAwesome name={'refresh'}
                        color={"#fff"}
                        size={normalize(25)} />
                    <Text style={{ color: "#fff", fontSize: normalize(7), }}>{"Refresh"}</Text>
                </TouchableOpacity>
            </View>

            {backHandler ?
                <CBackHandler
                    type={1} // 1 for installation key 
                    close={(val) => (val == undefined ? null : setBackHandler(val))}
                    callBack={(val) => (val == undefined ? null : getValidation(val))}
                /> : null}

        </KeyboardAvoidingView>
    )
}