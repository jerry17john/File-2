import axios from "axios";
import { isConnected, notifyMessage, ValueCheck } from "../CommonStyle/ComponentFunctions";
import { Global } from "./Global";

export default NetworkServiceCall = (method, url, params, jwt) => {
  let jwtString = ValueCheck(Global.JWTToken) ? Global.JWTToken : jwt
  console.log("----------------------------- JWT Key -----------------",jwtString)
  let dataset = {}
  if (method == "get" || method == "GET") {
    return (
      axios({
        method: 'get',
        url: url,
        timeout: 60000,
        validateStatus: false,
        // headers: {
        //   Authorization: `Bearer ${jwtString}`,
        // }
      })
        .then(function (response) {
          // console.log("RESPPPPPPPPP GETTTTTTTTTTTTTT", JSON.stringify(response))
          if (response.data.httpstatus == 200) {
            dataset = {
              data: response.data.data,
              httpstatus: response.data.httpstatus
            }
            return dataset
          }
          else {
            dataset = {
              httpstatus: response.data.httpstatus,
              data: {
                title: "ERROR",
                subtitle: response.data.data != undefined ? response.data.data.message : "",
                alertdata: {
                  alertCaption: "ERROR",
                  alertMessage: response.data.message,
                  alertContent: response.data.message,
                  alertHttpstatus: response.data.httpstatus,
                }
              }
            }
            return dataset
          }
        })
        .catch(function (error) {
          // console.log("ERRRRROEERRRRRRR GETTTTTTTT",JSON.stringify(error))
          dataset = {
            httpstatus: 404,
            data: {
              title: "ERROR",
              subtitle: "",
              alertdata: {
                alertCaption: "ERROR",
                alertMessage: error.message,
                alertContent: error.message,
                alertHttpstatus: 404,
              }
            }
          }
          return dataset
        })
    )
  }
  else if (method == "post" || method == "POST") {
    return (
      // isConnected()
      //   .then(() =>
      axios.post(url, params, {
        // headers: {
        //   Authorization: `Bearer ${jwtString}`,
        // }
      })
        .then(function (response) {
          // console.log("RESPONSE>>>>>>>>>>>>>>>>>>>>>>ON NETWORK SERVICE CALL",JSON.stringify(response))
          if (response.data.httpstatus == 200) {
            dataset = {
              data: response.data.data,
              httpstatus: response.data.httpstatus
            }
            return dataset
          }
          else {
            dataset = {
              httpstatus: response.data.httpstatus,
              data: {
                title: "ERROR",
                subtitle: "",
                alertdata: {
                  alertCaption: "ERROR",
                  alertMessage: response.data.message,
                  alertContent: response.data.message,
                  alertHttpstatus: response.data.httpstatus,
                }
              }
            }
            return dataset
          }
        })
        .catch(function (error) {
          // console.log("RESPONSE>>>>>>>>>>>>>>>>>>>>>>ON NETWORK SERVICE CALL ERRORRRR",JSON.stringify(error))
          dataset = {
            httpstatus: 404,
            data: {
              title: "ERROR",
              subtitle: "",
              alertdata: {
                alertCaption: "ERROR",
                alertMessage: error.message,
                alertContent: error.message,
                alertHttpstatus: 404,
              }
            }
          }
          return dataset
        })

      //     )
      // .catch(function (error) {
      //   notifyMessage("Please check your network connection and try again")
      //   dataset = {
      //     httpstatus: 344,
      //     data: {
      //       title: "ERROR",
      //       subtitle: "",
      //       alertdata: {
      //         alertCaption: "ERROR",
      //         alertMessage: "Connection Issue ",
      //         alertContent: "Check Internet Connectivity",
      //         alertHttpstatus: 344,
      //       }
      //     }
      //   }
      //   return dataset
      // })
    )
  }
  else if (method == "multiform") {
  console.log("JWT STRING",jwtString)

    return (
      axios({
        url: url,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${jwtString}`,
        },
        data: params
      }).then(function (response) {
        // console.log("Multi formmmmmmmmmmm retrieval........",response)
        if (response.status == 200) {
          dataset = {
            data: response.data,
            httpstatus: response.status
          }
          return dataset
        }
        else {
          dataset = {
            httpstatus: response.status,
            data: {
              title: "ERROR",
              subtitle: "",
              alertdata: {
                alertCaption: "ERROR",
                alertMessage: response.data.message,
                alertContent: response.data.message,
                alertHttpstatus: response.data.httpstatus,
              }
            }
          }
          return dataset
        }
      })
        .catch((error) => {
          dataset = {
            httpstatus: 404,
            data: {
              title: "ERROR",
              subtitle: "",
              alertdata: {
                alertCaption: "ERROR",
                alertMessage: error.message,
                alertContent: error.message,
                alertHttpstatus: 404,
              }
            }
          }
          return dataset
        })

    )
  }
}