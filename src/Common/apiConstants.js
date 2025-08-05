 import { Global } from "./Global"; 

export const BASE_URL   = Global.ipAddress;
export const PORT = Global.port; 


export const DebugMode = 0; // 1- (debug Mode)  0 - (APK)
export const BuildNumber = '202102231654A'+"-"+DebugMode; // format --- yyyymmddttmm{I/A/O}-debugmode i=inside the office,A-AMALA,O- OFFICE urloutside
export const getLogin = 'http://' + BASE_URL + ':' + PORT + '/'+ 'emrcommon'+'/' + 'common' + '/' + 'rnlalogin '  ;
export const APIURL = 'http://' + BASE_URL + ':' + PORT + '/';
export const mediaURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/1/'; 
export const patientphotoURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/1/';

export const imageURL = 'http://' + BASE_URL + ':' + PORT + '/file/getFile/image/';
export const xrayURL = 'http://' + BASE_URL + ':' + PORT + '/xray/getXRay/';
export const audioURL = 'http://' + BASE_URL + ':' + PORT + '/file/getFile/audio/'; 
export const videoURL = 'http://' + BASE_URL + ':' + PORT + '/file/getFile/video/'; 
export const pdfURL = 'http://' + BASE_URL + ':' + PORT + '/file/getFile/document/'; 
export const drawingURL = 'http://' + BASE_URL + ':' + PORT + '/file/getFile/image/'; 
export const fileURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/6/'; 
export const iconURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/8/';
export const labimageURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/9/';
export const commonURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/10/';
export const optionURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/2/';
export const optionDetailURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/3/'; 
export const columnURL = 'http://' + BASE_URL + ':' + PORT + '/file/getImage/1/4/';


export const CGetCommon1            = APIURL + `emr/emrcommonget/`; 
export const CGetDoctorProfile1     = APIURL + `file/filedownload/doctorprofile/`; 
export const CGetCommonImage1       = APIURL + `file/getFile/image/`; 
export const CGetPatientProfile1    = APIURL + `file/filedownload/patientprofile/`; 
export const CSaveDoctorProfile1    = APIURL + `file/fileupload/doctorprofile/`; 
export const CSavePatientProfile1   = APIURL + `file/fileupload/patientprofile/`; 
export const CSaveCommon            = APIURL + `commondelete/RnCommonDelete`;
export const APIURLLOCALHOST = 'http://' + 'localhost' + ':' + PORT + '/';
export const CGetPatientProfile1Localhost = APIURLLOCALHOST + `file/filedownload/patientprofile/`; 


export const EMRAPI = {   

    'getDoctorProfile'               : CGetDoctorProfile1 ,
    'getCommonImage'                 : CGetCommonImage1 ,
    'getPatientProfile'              : CGetPatientProfile1 ,
    'saveDoctorProfile'              : CSaveDoctorProfile1 ,
    'savePatientProfile'             : CSavePatientProfile1 ,
    'getPatientProfileLocalhost'     : CGetPatientProfile1Localhost ,
    
    'getTprVitalsignSetup'           : CGetCommon1 + 'rnhosumrvsdetailscore ',
    'getConsultationAdmissionHistory': CGetCommon1 + 'rnpatientconsultationdetails_30042025 ',
    'getSymptomAllocation'           : CGetCommon1 + 'rnhosumrsymptomsallocationdepartment ',
    'getRnliDropdown'                : CGetCommon1 + 'rnladropdowntokensubcategory ',
    'getPatientData'                 : CGetCommon1 + 'rnhopapatientpresence ',
    'getDropDown1'                   : CGetCommon1 + 'rnladropdowntokensubcategory',
    'getSymptomDropDown'             : CGetCommon1 + 'rnladropdown 21',
    'getDepartmentDropDown'          : CGetCommon1 + 'rnladropdown 23',
    'getBodyPartDropDown'            : CGetCommon1 + 'rnladropdown 22',
    'getAvailableUserType'           : CGetCommon1 + 'rnladropdown 33',
    'getHospitalBlock'               : CGetCommon1 + 'rnladropdown 39',
    'getFloorNo'                     : CGetCommon1 + 'rnhosufloor ',
    'saveCommon'                     : CSaveCommon,
    'saveSymptom'                    : 'hosumrsymptoms1',
    'saveSymptomAllocation'          : 'hosumrsymptomsallocation1'
}
