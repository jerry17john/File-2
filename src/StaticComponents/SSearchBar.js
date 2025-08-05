import React from 'react';
import { TextInput, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { CButtonShadow, CFooterShadow, CSearchShadow, ValueCheck } from '../CommonStyle/ComponentFunctions';
import ComponentStyles, { normalize } from '../CommonStyle/componentStyle';
import HOCIcons from '../HOC/HOCIcons';
import { Global } from '../Common/Global';

const SSearchBar = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: "lightgrey",
                elevation: 2,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderRadius: 7,
                height: normalize(30),
                backgroundColor: '#ffffff', // '#f1f3f6',
                padding: 5,
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'center',
                marginBottom: normalize(5),
                marginTop: 0,
                boxShadow: `-2 3 5 -3 ${Global.AppTheme.primary_color}`
            }}
        >
            <TouchableOpacity
                style={{ marginBottom: normalize(5), borderWidth: 0 }}
                disabled={ValueCheck(props.callBack) ? false : true}
                onPress={() => props.callBack(true)}
            >
                {/* <Image style={{ width: 20, height: 20, margin: 5, resizeMode: 'contain' }}
                    source={{ uri: "https://i.ibb.co/j8ywYpJ/search.png" }}
                /> */}
                <HOCIcons.Icons
                    icongroup={5}
                    name={'search'}
                    size={normalize(15)}
                    color={Global.AppTheme.primary_color}
                    style={{ textAlign: 'center', paddingTop: normalize(4) }}
                />
            </TouchableOpacity>
            <View style={{
                flex: 1,
                paddingLeft: '1%'
            }}>
                <TextInput
                    style={{
                        color: "black",
                        width: '100%',
                        marginLeft: '1%',
                        marginRight: '1%',
                        fontWeight: 'bold',
                        fontSize: normalize(18),
                        textAlign: 'justify',
                        padding: 0,
                        height: '100%',
                        borderWidth: 0
                        // marginBottom: -(Dimensions.get("window").height * 0.003)
                    }}
                    editable={true}
                    autoCapitalize={'characters'}
                    keyboardType={'default'}
                    placeholder="Search"
                    placeholderTextColor={'#c5c5c5'}
                    {...props}
                />
            </View>

        </View>
    )
}
export default SSearchBar;

const layoutstyles = StyleSheet.create({
    overlay_searchTextbox_View: {
        width: '93%',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    textinput_view: {
        flex: 1,
        paddingLeft: '1%'
    }
});