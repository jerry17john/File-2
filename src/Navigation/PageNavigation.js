import * as React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
// import Dashboard from '../Screens/Dashboard';
import Splash from '../Screens/Splash';
// import Notifications from '../Screens/Notification';
// import Consultation from '../Screens/Consultation';
// import ConsultationEdit from '../Screens/ConsultationEdit';
// import FileExplorer from '../Screens/FileExplorer';
// import WebPage from '../Screens/WebPage';
// import CCaptureImageWithoutEdit from '../Media/CCaptureImageWithoutEdit';
// import Test from '../Screens/Test';
// import ForgotPassword from '../Screens/ForgotPassword';
// import SaveTemplate from '../EmrTemplate/SaveTemplate';
// import RecordAudio from '../Media/RecordAudio';
// import RecordVideo from '../Media/RecordVideo';
// import Calendar from '../Screens/Calendar';
// import CImageGallery from '../Media/CImageGallery';
// import ChartScreen from '../Screens/ChartScreen';
// import Medications from '../Screens/Medications';
// import CalendarMedications from '../Screens/CalendarMedications';
// import SummaryTemplate from '../Screens/SummaryTemplate';
// import UserAllocation from '../Screens/UserAllocation';
// import CLabChart from '../CustomComponents/CLabChart';
// import LabResults from '../Screens/LabResults';
// import CShortPdf from '../CustomComponents/CShortPdf';
// import CVideoPlay from '../Media/CVideoPlay';
// import PdfViewer from '../Screens/PdfViewer';
// import CSignatureScreen from '../CustomComponents/CSignatureScreen';
// import SummaryReport from '../Screens/SummaryReport';
// import BarcodeScan from '../Media/BarcodeScan';
// import SwipeLeftView from '../Screens/SwipeLeftView';
// import HelpScreen from '../Screens/HelpScreen';
// import Report from '../Screens/Report';
// import { Platform } from 'react-native';
// import Admin from '../Screens/Admin';
// import Log from '../Screens/Log';
// import Investigations from '../Screens/Investigations';
// import InvestigationView from '../Screens/InvestigationView';
// import CValueSummary from '../CustomComponents/CValueSummary';
// import ResultPrint from '../Screens/ResultPrint';
// import EntryReports from '../Screens/EntryReports';
// import Chat from '../Screens/Chat';
// import ChatSend from '../Screens/ChatSend';
// import CDynamicReports from '../CustomComponents/CDynamicReports';
// import CXRay from '../CustomComponents/CXRay';
// import PdfPreview from '../Screens/PdfPreview';
// import SingleEditorPreview from '../Screens/SingleEditorPreview';
// import CSymptomAllocation from '../Screens/CSymptomAllocation';
// import RegistrationDetails from '../Screens/RegistrationDetails';
// import PdfUnSavedViewer from '../Screens/PdfUnSavedViewer';
// import CHtmlGallery from '../CustomComponents/CHtmlGallery';
// import WebViewGallery from '../Screens/WebViewGallery';
// import CPostpone from '../CustomComponents/CPostpone';
// import CPhotoGallery from '../CustomComponents/CPhotoGallery';
// import CPdfGallery from '../CustomComponents/CPdfGallery';
// import ChartScreenNew from '../Screens/ChartScreenNew';
// import CTprVitalsign from '../CustomComponents/CTprVitalsign';
// import CTprOverall from '../CustomComponents/CTprOverall';
// import CTestScreenNew from '../CustomComponents/CTestScreenNew';
// import Screen1 from '../Screens/Screen1';
// import Screen2 from '../Screens/Screen2';
// import CPatientServiceInvestigation from '../Screens/CPatientServiceInvestigation';
// import CPatientServiceInvestigationSetup from '../Screens/CPatientServiceInvestigationSetup';
// import OcrScreen from '../Screens/OcrScreen';
// import CHistoryScreen from '../Custom/TableComponent/CHistoryScreen';
// import MedicationHistoryScreen from '../Screens/MedicationHistoryScreen';
// import TokenAllocationScreen from '../Screens/TokenAllocationScreen';
// import BookingScreen from '../Screens/BookingScreen';
// import PostPoneScreen from '../Screens/PostPoneScreen';
// import CFilesEditor from '../CustomComponents/CFilesEditor';
// import CBrowser from '../CustomComponents/CBrowser';
// import SaveTemplateNew from '../EmrTemplate/SaveTemplateNew';
// import CIcdScreen from '../CustomComponents/CIcdScreen';
// import SingleMedication from '../Screens/SingleMedication';
// import Pharmacy from '../Screens/Pharmacy';
// import PatientsIcdHistory from '../Screens/PatientsIcdHistory';
// import CHtmlPreview from '../CustomComponents/CHtmlPreview';

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        animation: 'none',
        headerShown: false,
        // animation: true
        // animationEnabled: Platform.OS == 'ios' ? true : false
      }}>
        {/*<Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />*/}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        {/*<Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Consultation" component={Consultation} options={{}} />
        <Stack.Screen name="ConsultationEdit" component={ConsultationEdit} options={{}} />
        <Stack.Screen name="FileExplorer" component={FileExplorer} />
        <Stack.Screen name="WebPage" component={WebPage} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CCaptureImageWithoutEdit" component={CCaptureImageWithoutEdit} />
        <Stack.Screen name="SaveTemplate" component={SaveTemplate} />
        <Stack.Screen name="RecordAudio" component={RecordAudio} />
        <Stack.Screen name="RecordVideo" component={RecordVideo} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="CImageGallery" component={CImageGallery} />
        <Stack.Screen name="ChartScreen" component={ChartScreen} options={{ animation: 'none' }} />
        <Stack.Screen name="Medications" component={Medications} />
        <Stack.Screen name="CalendarMedications" component={CalendarMedications} />
        <Stack.Screen name="SummaryTemplate" component={SummaryTemplate} />
        <Stack.Screen name="UserAllocation" component={UserAllocation} />
        <Stack.Screen name="CLabChart" component={CLabChart} />
        <Stack.Screen name="LabResults" component={LabResults} />
        <Stack.Screen name="CShortPdf" component={CShortPdf} options={{ animation: 'none' }} />
        <Stack.Screen name="CVideoPlay" component={CVideoPlay} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} />
        <Stack.Screen name="CSignatureScreen" component={CSignatureScreen} />
        <Stack.Screen name="SummaryReport" component={SummaryReport} />
        <Stack.Screen name="BarcodeScan" component={BarcodeScan} />
        <Stack.Screen name="SwipeLeftView" component={SwipeLeftView} options={{ animation: 'none' }} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Log" component={Log} />
        <Stack.Screen name="Investigations" component={Investigations} />
        <Stack.Screen name="InvestigationView" component={InvestigationView} />
        <Stack.Screen name="CValueSummary" component={CValueSummary} />
        <Stack.Screen name="ResultPrint" component={ResultPrint} />
        <Stack.Screen name="EntryReports" component={EntryReports} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatSend" component={ChatSend} />
        <Stack.Screen name="CDynamicReports" component={CDynamicReports} />
        <Stack.Screen name="CXRay" component={CXRay} />
        <Stack.Screen name="PdfPreview" component={PdfPreview} />
        <Stack.Screen name="SingleEditorPreview" component={SingleEditorPreview} />
        <Stack.Screen name="CSymptomAllocation" component={CSymptomAllocation} />
        <Stack.Screen name="RegistrationDetails" component={RegistrationDetails} />
        <Stack.Screen name="PdfUnSavedViewer" component={PdfUnSavedViewer} />
        <Stack.Screen name="CHtmlGallery" component={CHtmlGallery} />
        <Stack.Screen name="WebViewGallery" component={WebViewGallery} />
        <Stack.Screen name="CPostpone" component={CPostpone} />
        <Stack.Screen name="CPhotoGallery" component={CPhotoGallery} />
        <Stack.Screen name="CPdfGallery" component={CPdfGallery} />
        <Stack.Screen name="ChartScreenNew" component={ChartScreenNew} />
        <Stack.Screen name="CTprVitalsign" component={CTprVitalsign} />
        <Stack.Screen name="CTprOverall" component={CTprOverall} />
        <Stack.Screen name="CTestScreenNew" component={CTestScreenNew} />
        <Stack.Screen name="CPatientServiceInvestigation" component={CPatientServiceInvestigation} />
        <Stack.Screen name="CPatientServiceInvestigationSetup" component={CPatientServiceInvestigationSetup} />
        <Stack.Screen name="OcrScreen" component={OcrScreen} />
        <Stack.Screen name="CHistoryScreen" component={CHistoryScreen} />
        <Stack.Screen name="MedicationHistoryScreen" component={MedicationHistoryScreen} />
        <Stack.Screen name="TokenAllocationScreen" component={TokenAllocationScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="PostPoneScreen" component={PostPoneScreen} />
        <Stack.Screen name="CFilesEditor" component={CFilesEditor} />
        <Stack.Screen name="CBrowser" component={CBrowser} />
        <Stack.Screen name="SaveTemplateNew" component={SaveTemplateNew} />
        <Stack.Screen name="CIcdScreen" component={CIcdScreen} />
        <Stack.Screen name="SingleMedication" component={SingleMedication} />
        <Stack.Screen name="Pharmacy" component={Pharmacy} />
        <Stack.Screen name="PatientsIcdHistory" component={PatientsIcdHistory} />
        <Stack.Screen name="CHtmlPreview" component={CHtmlPreview} />*/}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
