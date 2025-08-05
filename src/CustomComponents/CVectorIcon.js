import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from '../Common/Icons';
import { notifyMessage } from '../CommonStyle/ComponentFunctions';
import { normalize } from '../CommonStyle/componentStyle';

export default function CVectorIcon(props) {
    const [data, setData] = useState(props.data)
    return (
        <TouchableOpacity
            disabled={data.disabled != undefined ? data.disabled : false}
            style={{ alignItems: 'center', width: data.width != undefined ? normalize(70) : normalize(50) }}
            onPress={() => data.functionid != undefined ? getCallBack(data) : notifyMessage("Incorporate soon",3)}>
            <Icons.FontAwesome5 name={data.iconname != undefined ? data.iconname : "file"}
                color={data.iconcolor != undefined ? data.iconcolor : "white"}
                size={data.iconsize != undefined ? normalize(data.iconsize) : normalize(20)} />
            <Text
                numberOfLines={1}
                style={{
                    // flex:1,
                    width:normalize(50),
                    color: data.fontcolor != undefined ? data.fontcolor : "#fff",
                    textAlign: data.textAlign != undefined ? data.textAlign : 'center',
                    fontSize: data.size != undefined ? normalize(data.size) : normalize(10),
                    fontWeight: data.fontWeight != undefined ? data.fontWeight : 'normal'
                }}>{data.displaytext != undefined ? data.displaytext : ''}</Text>
        </TouchableOpacity>
    )

    function getCallBack(item) {
        props.callBack(item)
    }
}