import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, PanResponder, Text, Alert, TouchableOpacity, Touchable, StatusBar, Platform, DeviceEventEmitter, Dimensions } from 'react-native';
import Navigation from './src/Navigation/PageNavigation'
import { MenuProvider } from 'react-native-popup-menu';
import { LogBox } from 'react-native';
import SSearchBar from './src/StaticComponents/SSearchBar';
import COverlay from './src/CustomComponents/COverlay';
import { EmrResponseComponentProvider } from './src/Handlers/emrResponseComponentContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Global } from './src/Common/Global';
import { getAppVersion, normalize } from './src/CommonStyle/ComponentFunctions';
import Loader from './src/Custom/Loader';
import AAlert from './src/Alerts/AAlert'
import AAlertIOS from './src/Alerts/AAlertIOS';
import ErrorBoundary from './src/Common/ErrorBoundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProvider } from './src/Handlers/AppContext';
import { STemplateProvider } from './src/Handlers/sTemplateContext';

// import codePush from 'react-native-code-push';
// import AppContext from './src/Handlers/AppContext';
// import { AgeGroupResponseComponentProvider } from './src/Handlers/AgeGroupResponseComponentContext';
// import HOCIcons from '../reactnativecommonfiles/HOCIcons';
// import { someFunction } from '/path/to/external-folder/my-js-files/someModule'; 
// import { someFunction } from './js/someModule';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs([
  "DatePickerIOS has been merged with DatePickerAndroid and will be removed in a future release. It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. See https://github.com/react-native-datetimepicker/datetimepicker",
]);
LogBox.ignoreLogs([
  "Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.",
]);
LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
LogBox.ignoreLogs([
  "Require cycle: src\Hoc\HResultFormat.js -> src\CustomViews\DescriptionChart.js -> src\Hoc\HResultFormat.js",
]);
LogBox.ignoreLogs([
  "Warning: Each child in a list should have a unique 'key' prop.",
]);
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreLogs([
  "`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.",
]);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const App = () => {

  const OverlayHOCComponent = COverlay(SSearchBar);
  const [overlay, setOverlay] = useState(false);
  const [toast, setToast] = useState(false)
  const [toastMsg, setToastMsg] = useState()

  useEffect(() => {
    (async () => {
      Global.CodePushVersion = await getAppVersion()
    })()
    getAppTheme()

    DeviceEventEmitter.addListener("event.testToast", (eventData) =>
      getEventFun(eventData))
  }, [])

  function getEventFun(params) {
    if (params) {
      console.log("NotifyMessage...........", JSON.stringify(params))
      setToastMsg(params)
      setToast(true)
    }
  }


  // const timerId = useRef(false)
  // const [timeForInactivityInSecond, setTimeForInactivityInSecond] = useState(
  //   60000
  // )

  // useEffect(() => {
  //   // resetInactivityTimeout()
  //   publicIP()
  //     .then(ip => { 
  //       console.log(ip);
  //       if (ip == '59.92.234.144') {

  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [])

  // const panResponder = React.useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponderCapture: () => {
  //       // console.log('user starts touch');
  //       resetInactivityTimeout()
  //     },
  //   })
  // ).current

  // const resetInactivityTimeout = () => {
  //   clearTimeout(timerId.current)
  //   timerId.current = setTimeout(() => {
  //     // action after user has been detected idle
  //     RNExitApp.exitApp()
  //   }, timeForInactivityInSecond)
  // }


  // const [responseJSON, setResponseJSON] = useState({
  //   "consultation": [],
  //   "consultationEdit": {
  //   }
  // });
  // const value = { responseJSON, setResponseJSON };

  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  const getAppTheme = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(Global.asyncStorageThemeKey)
      ThemeData = JSON.parse(jsonValue)

      return jsonValue != null && jsonValue != undefined ?
        (Global.AppTheme = ThemeData,
          console.log("GLOBAL", JSON.stringify(Global.AppTheme.primary_color)),
          setOverlay(true)) :
        setOverlay(true)
    } catch (e) {
      setOverlay(true)
      console.log("EROOROORORORORO ON", JSON.stringify(e))
    }
  }

  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
      <MenuProvider>
        <AppProvider>
          <EmrResponseComponentProvider>
            <STemplateProvider>
              <View style={{ flex: 1 }}>
                {toast ?
                  Platform.OS == 'ios' ?
                    <AAlertIOS
                      data={toastMsg}
                      close={(val) => (val == undefined ? null : setToast(val))} /> :
                    <AAlert
                      data={toastMsg}
                      close={(val) => (val == undefined ? null : setToast(val))} /> : null}

                {Platform.OS == 'ios' ?
                  <MyStatusBar translucent backgroundColor={'light-content'} /> : null}
                <SafeAreaView style={{ flex: 1 }}>
                  <ErrorBoundary>
                    <Navigation />
                  </ErrorBoundary>
                </SafeAreaView>
              </View>
            </STemplateProvider>
          </EmrResponseComponentProvider>
        </AppProvider>
      </MenuProvider>
      {overlay ?
        null
        :
        <Loader displaytext={true} />
      }
    </GestureHandlerRootView>

  )




}
export default App;
// export default codePush({
//   updateDialog: true,
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.IMMEDIATE
// })(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});






// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.centeredView}>
//         <Modal
//           animationType='fade'
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//             setModalVisible(!modalVisible);
//           }}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal>
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(true)}>
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;
