import { Text, TouchableOpacity } from "react-native"
import { isBNU, isNU, isNUQ, normalize } from "../CommonStyle/ComponentFunctions"
import HOCIcons from "./HOCIcons"
import { Global } from "../Common/Global"
import { View } from "react-native"


export default function HShadowButton(props) {

    return (
        <TouchableOpacity
            disabled={props.disabled ? true : false}
            onPress={() => {
                isNU(props.buttonCallback) ? props.buttonCallback(true) : null
            }}
            style={isNU(props.buttonstyle) ? props.buttonstyle : {}}>
            {props.useicon ?
                <HOCIcons.Icons
                    icongroup={isNU(props.icongroup) ? props.icongroup : 5}
                    name={isBNU(props.iconname) ? props.iconname : 'file-alt'}
                    color={isNU(props.iconcolor) ? props.iconcolor : Global.AppTheme.primary_color}
                    size={isNU(props.iconsize) ? props.iconsize : normalize(15)}
                    style={props.iconstyle ? props.iconstyle : {}}
                />
                : null}
            {props.usetext ?
                <Text
                    numberOfLines={isNU(props.numberOfLines) ? props.numberOfLines : 1}
                    adjustsFontSizeToFit={props.disabletextadjust ? false : true}
                    style={
                        props.textstyle ?
                            {
                                ...props.textstyle,
                                fontWeight: 'bold',
                                color: 'black'
                            } :
                            {
                                color: 'black',
                                fontSize: normalize(6),
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }
                    }
                >
                    {isNUQ(props.displaytext) ? props.displaytext : null}
                </Text>
                : null}
        </TouchableOpacity>
    )

}