import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { APIURL, BASE_URL } from '../Common/apiConstants';
import { Global } from '../Common/Global';
import Icons from '../Common/Icons';
import { normalize } from '../CommonStyle/componentStyle';
import { useNavigation } from '@react-navigation/native';
import NotificationContext from '../Handlers/NoticationsContext';
import moment from 'moment';
import axios from 'axios';
import { getLoading, isNU } from '../CommonStyle/ComponentFunctions';
import NetworkServiceCall from '../Common/NetworkServiceCall';
import ABlink from '../Alerts/ABlink';
// import AppContext from '../Handlers/AppContext';

export default function EMRLoginLayout(props) {

    // const { inputText, setInputText } = useContext(AppContext);
    var clearing
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [toastMsg, setToastMsg] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [secureText, setSecureText] = useState(true);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        clearing.clear()
        setPassword("")
    }, [refresh])

    const NoticationData = React.useContext(
        NotificationContext,
    );

    var testArr = [
        {
            "keyid": 3,
            "displayheader": "Investigation",
            "displaytext": "Microbiology report of patientname has been generted",
            "apilink": "",
            "status": true,
            "time": "2023-12-12",
            "type": 4
        },
        {
            "keyid": 1,
            "displayheader": "Holiday",
            "displaytext": "on december 25th",
            "time": "2023-03-14",
            "status": false,
            "apilink": "",
            "type": 1
        },
        {
            "keyid": 2,
            "displayheader": "LinkTest1",
            "displaytext": "on 2023 march 30 https://www.youtube.com/",
            "time": "2023-03-14",
            "status": false,
            "apilink": "",
            "type": 1
        },
        {
            "keyid": 2,
            "displayheader": "LinkTest2",
            "displaytext": "on 2023 march 30 https://www.google.com/",
            "time": "2023-03-14",
            "status": false,
            "apilink": "",
            "type": 1
        },
        {
            "keyid": 4,
            "displayheader": "X-Ray",
            "displaytext": "X-ray of patientname generated.",
            "status": false,
            "apilink": "",
            "time": "2023-03-14",
            "type": 1
        }
    ]

    return (
        <View>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                <View style={{}}>
                    <Image
                        style={{ width: normalize(60), height: normalize(60), resizeMode: 'stretch' }}
                        source={{ uri: Global.HospitalData != undefined ? Global.HospitalData.logo : "" }}
                    />
                </View>

                <View>
                    {Global.hospitalcode == 2 || Global.hospitalcode == 4 ?
                        <ABlink>
                            <Text style={{
                                fontSize: normalize(15),
                                marginTop: normalize(5),
                                width: normalize(150),
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                                {Global.HospitalData != undefined ? Global.HospitalData.hospitalname : ""}
                            </Text>
                        </ABlink>
                        :
                        <Text style={{
                            fontSize: normalize(15),
                            marginTop: normalize(5),
                            width: normalize(150),
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                            {Global.HospitalData != undefined ? Global.HospitalData.hospitalname : ""}
                        </Text>
                    }
                    <Text style={{ fontSize: normalize(12), marginTop: -2, textAlign: 'center' }}>{Global.HospitalData != undefined ? Global.HospitalData.hospitaladdress : ""}</Text>
                </View>

                <View>
                    <Image
                        style={{ width: normalize(50), height: normalize(50), resizeMode: 'contain' }}
                        source={{
                            uri: Global.HospitalData != undefined ? Global.HospitalData.hospitallogo2 : ""
                        }}
                    />
                </View>
            </View>

            <View style={styles.inputView}>
                <Icons.FontAwesome name={"user"}
                    color={Global.AppTheme.primary_color}
                    size={normalize(25)} />
                <TextInput
                    style={styles.input}
                    placeholder='User ID'
                    placeholderTextColor='grey'
                    keyboardType="number-pad"
                    onChangeText={username => setUsername(username)}
                    // autoCapitalize='none'
                    // keyboardType='numeric'
                    // keyboardType={'numeric'}
                    // textContentType='username'   // Optional but recommended
                    // autoComplete='username'
                    // importantForAutofill='yes'
                />
            </View>

            <View style={styles.inputView}>
                <Icons.FontAwesome name={"lock"}
                    color={Global.AppTheme.primary_color}
                    size={normalize(27)} />
                <TextInput
                    ref={input => { clearing = input }}
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='grey'
                    secureTextEntry={secureText}
                    autoCapitalize='none'
                    onChangeText={password => setPassword(password)}
                    textContentType='password'   // Optional but recommended
                    autoComplete='password'
                    importantForAutofill='yes'
                />
                <Icons.FontAwesome
                    name={secureText ? "eye-slash" : "eye"}
                    onPress={() => setSecureText(!secureText)}
                    color={Global.AppTheme.primary_color}
                    size={normalize(20)}
                />
            </View>

            <TouchableOpacity style={[styles.loginButton, { backgroundColor: Global.AppTheme.primary_color, }]}
                // onPress={() => actionJWT()}
                // onPress={() => actionSubmit()}
                onPress={() => Global.InstallationKey != "123@jwt" && Global.InstallationKey != "123@JWT" ? actionSubmit() : actionJWT()}
            >
                <Text style={[styles.loginButtonText, { color: Global.AppTheme.text_color }]}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{ color: Global.AppTheme.primary_color, fontSize: normalize(14) }}>Change Password ?</Text>
            </TouchableOpacity>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                {showAlert ?
                    <Text numberOfLines={2}
                        style={styles.alert_msg_text}>
                        {toastMsg}
                    </Text>
                    : null}
            </View>
        </View>
    )

    function actionSubmit() {

        if ((username != null && username.length > 0 && password != null && password.length > 0)) {
            props.loader(true);

            // let buttonapi = APIURL + "emrlogin/login/UserLogin " + username + ',' + "'" + password + "'" + "," + Global.version;
            let buttonapi = APIURL + "emrlogin/login/RnUserLogin " + username + ',' + "'" + password + "'" + "," + Global.version;
            console.log("..................Login..............", buttonapi);
            NetworkServiceCall("get", buttonapi, "")
                .then(function (response) {
                    if (response.httpstatus == 200) {
                        if (response.data.userdata != undefined && response.data.userdata.loginstatus == true) {

                            Global.userOptionList = response.data.optionList;
                            Global.PatientDetails = null;
                            Global.LoginTime = moment();
                            let buttonapiforconsultation = APIURL + "emr/emrcommonget/rnhosumrconsultationactivityemr " + response.data.userdata.hosuconsultant;
                            console.log('buttonapiforconsultation', buttonapiforconsultation);

                            NetworkServiceCall("get", buttonapiforconsultation, "")
                                .then(function (res) {
                                    if (res.httpstatus == 200 && isNU(res.data) && res.data.consultationstatus != null && res.data.consultationstatus != undefined) {
                                        console.log('login consultation', JSON.stringify(res));

                                        Global.userData = {
                                            ...response.data.userdata,
                                            ...res.data
                                        };

                                        // setResponseJSON({
                                        //     ...responseJSON,
                                        //     consultationEdit: {
                                        //         ...responseJSON.consultationEdit,
                                        //         editStatus: true,
                                        //     },
                                        // });

                                        // setInputText({
                                        //     ...inputText,
                                        //     'serverdate': new Date()
                                        // });
                                        // console.log('new Date()', new Date());

                                        props.loader(false);
                                        NoticationData.length = 0;
                                        NoticationData.push.apply(NoticationData, response.data.notifications);
                                        setRefresh(refresh + 1);
                                        navigation.navigate('Dashboard');
                                    }
                                    else {
                                        console.log('login consultation outside', JSON.stringify(res));
                                        Global.userData = {
                                            ...response.data.userdata,
                                            'consultationstatus': 0
                                        };
                                        props.loader(false);
                                        NoticationData.length = 0;
                                        NoticationData.push.apply(NoticationData, response.data.notifications);
                                        setRefresh(refresh + 1);
                                        navigation.navigate('Dashboard');
                                    }

                                })


                            // NoticationData.push.apply(NoticationData, testArr)
                            // console.log("RRRRRRRRRREEEEEEEEESSSSSVARRRRRRRRRR", JSON.stringify(NoticationData))
                        }
                        else if (response.data.userdata != undefined && response.data.userdata.loginstatus == false) {
                            if (isNU(response.data.userdata.suuser)) {
                                setToastMsg("Please update the app , For Apple Devices,Please Visit Testflight to update", setShowAlert(true,
                                    props.loader(false)
                                ))
                            }
                            else {
                                setToastMsg("The UserID or Password doesn't exist", setShowAlert(true,
                                    props.loader(false)
                                ))
                            }

                            setTimeout(() => {
                                setShowAlert(false)
                            }, 8000)
                        }
                        else {
                            setToastMsg("The UserID or Password doesn't exist", setShowAlert(true,
                                props.loader(false)
                            ))
                            setTimeout(() => {
                                setShowAlert(false)
                            }, 3000)
                        }

                    } else {
                        setToastMsg("Network Error", setShowAlert(true,
                            props.loader(false)
                        ))
                        setTimeout(() => {
                            setShowAlert(false)
                        }, 3000)
                    }
                })
        }
        else {
            setToastMsg("Enter UserID and Password", setShowAlert(true, props.loader(false)))
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    }

    function actionSubmitNew(jwttoken) {
        if ((username != null && username.length > 0 && password != null && password.length > 0)) {
            props.loader(true);
            let jwt = `Bearer ${jwttoken}`
            let buttonapi = APIURL + "emruseroption/option/UserLoginService " + username + "," + Global.version
            console.log("..................Login..............", buttonapi)
            console.log("..................Jwt Key..............", jwt)
            NetworkServiceCall("get", buttonapi, "", jwttoken)
                .then(function (response) {
                    console.log("RESPONSEEEEEE JSSOSOOSOSOSNNNN", JSON.stringify(response))
                    if (response.httpstatus == 200) {
                        if (response.data.userdata != undefined && response.data.userdata.loginstatus == true) {
                            Global.userData = response.data.userdata
                            Global.userOptionList = response.data.optionList
                            Global.PatientDetails = null
                            Global.LoginTime = moment()
                            props.loader(false);
                            NoticationData.length = 0;
                            NoticationData.push.apply(NoticationData, response.data.notifications)
                            // console.log("RRRRRRRRRREEEEEEEEESSSSSVARRRRRRRRRR", JSON.stringify(NoticationData))
                            setRefresh(refresh + 1)
                            navigation.navigate('Dashboard')
                        }
                        else if (response.data.userdata != undefined && response.data.userdata.loginstatus == false) {
                            setToastMsg("Please update the app , For Apple Devices,Please Visit Testflight to update", setShowAlert(true,
                                props.loader(false)
                            ))
                            setTimeout(() => {
                                setShowAlert(false)
                            }, 8000)
                        }
                        else {
                            setToastMsg("The UserID or Password doesn't exist.", setShowAlert(true,
                                props.loader(false)
                            ))
                            setTimeout(() => {
                                setShowAlert(false)
                            }, 8000)
                        }

                    } else {
                        setToastMsg("Network Error 404", setShowAlert(true,
                            props.loader(false)
                        ))
                        setTimeout(() => {
                            setShowAlert(false)
                        }, 3000)
                    }
                })
        }
        else {
            setToastMsg("Enter UserID and Password", setShowAlert(true, props.loader(false)))
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
        getLoading(v => props.loader(false))

        // axios({ method: 'get', url: "http://111.92.109.30:8080/emruseroption/option/UserLoginService 5001,0", headers: { Authorization: `Bearer ${jwttoken}` } })
        //     .then(function (response) {
        //         console.log("AFTERRRRRRRRRRR", JSON.stringify(response))
        //     })        
    }

    function actionJWT() {
        if ((username != null && username.length > 0 && password != null && password.length > 0)) {

            let buttonapi = APIURL + "auth/authenticate"
            var PostArr = {
                "username": username,
                "password": password,
                "version": Global.version
            }
            console.log("BUTTON API", JSON.stringify(buttonapi))
            console.log("OUT", JSON.stringify(PostArr))
            axios.post(buttonapi, PostArr)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log('success', response.data)
                        Global.JWTToken = response.data
                        if (response.data && response.data != "invalid access") {
                            actionSubmitNew(response.data)
                        } else {
                            setToastMsg("The UserID or Password doesn't exist", setShowAlert(true,
                            ))
                            setTimeout(() => {
                                setShowAlert(false)
                            }, 3000)
                        }
                    }
                    else {
                        setToastMsg("Network Error 404", setShowAlert(true,))
                        setTimeout(() => {
                            setShowAlert(false)
                        }, 3000)
                    }
                })
                .catch(function (error) {
                    setToastMsg("Network Error 404", setShowAlert(true,))
                    setTimeout(() => {
                        setShowAlert(false)
                    }, 3000)
                })
        }
        else {
            setToastMsg("Enter UserID and Password", setShowAlert(true, props.loader(false)))
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    }
}

const styles = StyleSheet.create({
    loginText: {
        fontSize: normalize(14),
        marginTop: normalize(5),
        width: normalize(150),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputView: {
        height: normalize(40),
        borderRadius: 10,
        backgroundColor: '#f1f3f6',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: normalize(45),
        flex: 1,
        fontSize: normalize(15),
        fontWeight: 'bold',
        color: 'black',

        paddingHorizontal: 10
    },
    loginButton: {

        // backgroundColor: '#5352ed',
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    loginButtonText: {

        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 18,
    },
    alert_msg_text: {
        color: 'red',
        fontSize: normalize(14),
        fontWeight: '700'
    },
});