export class Global {
    static userData;
    static HospitalData;
    static PatientDetails;
    static ChartDataAll;
    static ChartDataLeft;
    static ChartDataRight;
    static ipAddress;
    static port;
    static ApiVersion;
    static userOptionList = [];
    static DosageArray = [];
    static currentPageInfo = {};
    static deviceID = "";
    static AllMedicinesArr = []
    static isdefault = false
    static refreshcount = 0;
    static EditStatus;
    static ParameterInfo;
    static FirmDetails;
    static LoginTime;
    static JWTToken = ""
    static CodePushVersion
    static InstallationKey = ""
    static fontBold = "Inter_24pt-Bold" // "ProductSans-Bold"; // 
    static fontNormal = "Inter_24pt-Medium" // "ProductSans-Regular" // 


    // static ipAddress = "emr.amalaims.org"; // AMALA
    // static port = "9393";
    // static version = "2025072201"; // 2025071601 2025061601 2025050302 2025031401   2025031101 8
    // static hospitalcode = 1;
    // static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    // static headerfooter = [
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    // ];
    // static asyncStorageAppKey = '@storage_KeyEmrAmala';
    // static asyncStorageThemeKey = '@storage_ThemeEmrAmala';
    // static preinstallationkey = 'emr@amala';
    // static SplashHeading = 'EMR AMALA';


    static ipAddress = "emr.amalaims.org"; // AYURVEDA
    static port = "59393";
    static version = "2025072201"; // 2025071601 2025061601 2025050302 2025031401   2025031101 8
    static hospitalcode = 8;
    static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    static headerfooter = [
        "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
        "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    ];
    static asyncStorageAppKey = '@storage_KeyEmrAmalaAyurVeda';
    static asyncStorageThemeKey = '@storage_ThemeEmrAmalaAyurVeda';
    static preinstallationkey = 'emr@amala';
    static SplashHeading = 'EMR AMALA AYURVEDA';


    // static ipAddress = "122.15.161.229"; // AMALA BETA   static ip jescon : "111.92.109.30" 192.168.1.3
    // static betaversion = true;
    // static betacolor = '#094485';
    // static port = "9192";
    // static version = "2025052201"; // 2025052201 2025040701 2025040701 2025031201
    // static hospitalcode = 2;
    // static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    // static headerfooter = [
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    // ];
    // static asyncStorageAppKey = '@storage_KeyEmrAmalaBeta';
    // static asyncStorageThemeKey = '@storage_ThemeEmrAmalaBeta';
    // static preinstallationkey = 'emr@amala';
    // static SplashHeading = 'EMR AMALA BETA TESTING';


    // static ipAddress = "59.92.234.144"; // NIRMALA
    // static port = "8090";
    // static version = "2025031104"; // 2025031101
    // static hospitalcode = 7;
    // static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    // static headerfooter = [
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    // ];
    // static asyncStorageAppKey = '@storage_KeyEmrNirmala';
    // static asyncStorageThemeKey = '@storage_ThemeEmrNirmala';
    // static preinstallationkey = 'emr@nirmala';
    // static SplashHeading = 'EMR NIRMALA';


    // static ipAddress = "45.116.228.73"; // MMT 45.116.228.73
    // static port = "9292";
    // static version = "2025062001"; // 5
    // static hospitalcode = 5;
    // static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    // static headerfooter = [
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    // ];
    // static asyncStorageAppKey = '@storage_KeyEmrMmt';
    // static asyncStorageThemeKey = '@storage_ThemeEmrMmt';
    // static preinstallationkey = 'emr@mmt';
    // static SplashHeading = 'EMR MMT';



    // static ipAddress = "103.171.224.161"; // DEVAMATHA
    // static port = "9192";
    // static betaversion = false;
    // static version = "2025072201"; //2025071601 2025070401 2025062501 2025061901 2025031201
    // static hospitalcode = 3;
    // static hospitallogo = ["https://www.devamathahospital.org/images/logo.png"];
    // static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    // static headerfooter = [
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    // ];
    // static asyncStorageAppKey = '@storage_KeyEmrDevamatha';
    // static asyncStorageThemeKey = '@storage_ThemeEmrDevamatha';
    // static preinstallationkey = 'emr@devamatha';
    // static SplashHeading = 'EMR DEVAMATHA';


    // static ipAddress = "103.171.224.161"; // DEVAMATHA BETA
    // static port = "9595";
    // static betaversion = true;
    // static betacolor = 'red';
    // static version = "8";
    // static hospitalcode = 4;
    // static hospitallogo = ["https://www.devamathahospital.org/images/logo.png"];
    // static licenseIp = "http://" + Global.ipAddress + ":" + Global.port + "/validation/licensedata/licensevalidation ";
    // static headerfooter = [
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/header.png",
    //     "http://" + Global.ipAddress + ":" + Global.port + "/file/getCommonFile/image/footer.png"
    // ];
    // static asyncStorageAppKey = '@storage_KeyEmrDevamathaBeta';
    // static asyncStorageThemeKey = '@storage_ThemeEmrDevamathaBeta';
    // static preinstallationkey = 'emr@devamatha';
    // static SplashHeading = 'EMR DEVAMATHA BETA TESTING';



    // static ipAddress = "59.92.234.144"; // NIRMALA static ip nirmala = "59.92.234.144"
    // static port = "8090";
    // static version = "7"
    // static hospitalcode = "NMC8090"
    // static hospitalname = "Nirmala Medical Centre";
    // static hospitaladdress = "Muvattupuzha, Kerala";
    // static hospitalnabh = '(NABH Accredited (Entry Level))';
    // static hospitalmore = '( Muvattupuzha, Ernakulam';
    // static hospitalwebsite = 'Pin: 686661 Ph: (0485) 2835343; Web: www.nirmalamedicalcentre.com; ';
    // static hospitalemail = 'Email: contact@nirmalamedicalcentre.com';
    // static hospitallogo = [
    //     require('../Asset/images/amalalogoN.jpg'),
    //     require('../Asset/images/amalalogoN.jpg'),
    //     "https://i.ibb.co/QpnkSY4/nirmalalogo.jpg",
    //     "https://firebasestorage.googleapis.com/v0/b/emrapp-67396.appspot.com/o/AppImages%2Fnirmalanabh.jpg?alt=media&token=cfbfc02f-65a5-4d68-ac8f-4747e30137c5",
    //     require('../Asset/images/nirmalanabh.jpeg'),
    //     { width: 60, height: 45 },
    //     "https://i.ibb.co/tzFykMP/169285578127377075.png"]
    // static xRay = "http://172.16.1.201:5000/#/"
    // static licenseIp = "http://59.92.234.144:8090/validation/licensedata/licensevalidation "
    // static headerfooter = ["http://59.92.234.144:9192/labfile/getCommonFile/image/header.png",
    //     "http://59.92.234.144:9192/labfile/getCommonFile/image/footer.png",]
    // static asyncStorageAppKey = '@storage_KeyEMR';
    // static asyncStorageThemeKey = '@storage_KeyAppTheme';




    // static ipAddress = "45.116.228.73"; // static ip mmt = "45.116.228.73"
    // static port = "9292";
    // static version = 5;
    // static hospitalcode ="MMT9292"
    // static hospitalname = "Mundakayam Medical Trust Hospital";
    // static hospitaladdress = "Idukki, Kerala";
    // static hospitalnabh = '(NABH Accredited [Entry Level])';
    // static hospitalmore = 'We take good care';
    // static hospitalwebsite = 'Pin: 686 513 Ph: 94464 62400 ; Web: mmthospital.com; ';
    // static hospitalemail = 'Email: mmthospital@gmail.com';
    // static hospitallogo = [require('../Asset/images/mundakayamlogo.png'),
    // require('../Asset/images/mundakayamlogo.png'),
    //     "https://i.ibb.co/2KJPWJK/mmtlogo.png",
    //     "https://i.ibb.co/2KJPWJK/mmtlogo.png",
    // require('../Asset/images/mundakayamlogo.png'),
    // { width: 60, height: 45 },
    //     "https://mmthospital.com/theme_assets/images/mundakkayam-medical-trust-hospital-logo.png"]
    // static licenseIp = "http://45.116.228.73:9292/validation/licensedata/licensevalidation "
    //   static headerfooter = ["http://45.116.228.73:9292/labfile/getCommonFile/image/header.png",
    //     "http://45.116.228.73:9292/labfile/getCommonFile/image/footer.png"]
    // static asyncStorageAppKey = '@storage_KeyEMR';
    // static asyncStorageThemeKey = '@storage_KeyAppTheme';


    static AppTheme = {
        "primary_color": Global.betaversion ? Global.betacolor : "#094485",
        "secondary_color": "black",
        "text_color": "#fff",
        "heading_text_color": "darkblue",
        "bg_button": "#fff",
        "icon_color": "darkblue"
    };

}

// appcenter codepush release-react -a infoconnectionssoftwares/HOMESEMR -d JesconJWT
// :app:assembleRelease