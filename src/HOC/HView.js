import React, { forwardRef } from 'react';
// import CPainAssessmentSaved from '../Classification/CPainAssessmentSaved';
// import CSavedData from '../Classification/CSavedData';
// import CVitalSign from '../Classification/VitalSign/CVitalSign';
// import CVitalSignSavedData from '../Classification/VitalSign/CVitalSignSavedData';
// import CommonVitalSign from '../Classification/VitalSign/CommonVitalSign';
import EMRLoginLayout from '../Layout/EMRLoginLayout';
// import CustomVitalSign from '../Classification/VitalSign/CustomVitalSign';
// import CBMI from '../Classification/VitalSign/CBMI';
// import CTPR from '../Classification/VitalSign/CTPR';
// import CPrescriptionSaved from '../Classification/Prescription/CPrescriptionSaved';
// import CPrescription from '../Classification/Prescription/CPrescription';
// import CConsultation from '../Classification/Consultation/CConsultation';
// import CConsultationSaved from '../Classification/Consultation/CConsultationSaved';
// import CConsultationSave from '../Classification/Consultation/CConsultationSaved';
// import CAdmissionSave from '../Classification/Admission/CAdmissionSaved';
// import CAdmission from '../Classification/Admission/CAdmission';
// import CPaediatricImmunizationSaved from '../Classification/History/CPaediatricImmunizationSaved';
// import CPaediatricImmunization from '../Classification/History/CPaediatricImmunization';
// import CEyeEvaluationSave from '../Classification/EyeEvaluation/CEyeEvaluationSave';
// import CEyeEvaluation from '../Classification/EyeEvaluation/CEyeEvaluation';
// import CEyePreOperativeSave from '../Classification/EyeEvaluation/CEyePreOperativeSave';
// import CEyePreOperative from '../Classification/EyeEvaluation/CEyePreOperative';
// import CNutritionReAssessment from '../Classification/History/CNutritionReAssessment';
// import CNutritionReAssessmentSave from '../Classification/History/CNutritionReAssessmentSave';
// import CAssessment from '../Classification/Assessment/CAssessment';
// import CAssessmentSave from '../Classification/Assessment/CAssessmentSave';
// import CPregnancyChart from '../Classification/Pregnancy/CPregnancyChart';
// import CPatientService from '../Classification/PatientService/CPatientService';
// import CPatientServiceSaved from '../Classification/PatientService/CPatientServiceSaved';
// import CDiet from '../Classification/Diet/CDiet';
// import CDietSaved from '../Classification/Diet/CDietSaved';
// import CPregnancySave from '../Classification/Pregnancy/CPregnancySave';
// import CRoutine from '../Classification/CRoutine';
// import CSummary from '../CustomComponents/CSummary';
// import CSummarySave from '../CustomComponents/CSummarySave';
// import CConsentForm from '../CustomComponents/CConsentForm';
// import CDashBoardList from '../Custom/Charts/CDashBoardList';
// import CDashBoardTable from '../Custom/Charts/CDashBoardTable';
// import CustomSubLevel from '../Classification/Evaluation/CustomSubLevel';
// import CSpecimenCard from '../CustomComponents/CSpecimenCard';
// import CDescriptionResultView from '../Lab/CDescriptionResultView';
// import CAddDropDown from '../CustomComponents/CAddDropDown';
// import CBSA from '../Classification/VitalSign/CBSA';
// import CAddDropDownData from '../CustomComponents/CAddDropDownData';
// import CAddDesignation from '../CustomComponents/CAddDesignation';
// import CDeath from '../Classification/Admission/CDeath';
// import CAddDropDownPatientServiceInv from '../CustomComponents/CAddDropDownPatientServiceInv';


// function HView(props) {
function HViewFunction(props, ref) {
    const components = {
        EMRLoginLayout: EMRLoginLayout,
        // CSavedData: CSavedData,
        // CPainAssessmentSaved: CPainAssessmentSaved,

        // CVitalSign: CVitalSign,
        // CVitalSignSavedData: CVitalSignSavedData,
        // CommonVitalSign: CommonVitalSign,
        // CustomVitalSign: CustomVitalSign,
        // CBMI: CBMI,
        // CTPR: CTPR,
        // CBSA: CBSA,

        // CPrescription: CPrescription,
        // CPrescriptionSaved: CPrescriptionSaved,

        // CConsultation: CConsultation,
        // CConsultationSave: CConsultationSave,

        // CAdmissionSave: CAdmissionSave,
        // CAdmission: CAdmission,

        // CPaediatricImmunization: CPaediatricImmunization,
        // CPaediatricImmunizationSave: CPaediatricImmunizationSaved,

        // CEyeEvaluation: CEyeEvaluation,
        // CEyeEvaluationSave: CEyeEvaluationSave,

        // CEyePreOperative: CEyePreOperative,
        // CEyePreOperativeSave: CEyePreOperativeSave,

        // CNutritionReAssessment: CNutritionReAssessment,
        // CNutritionReAssessmentSave: CNutritionReAssessmentSave,

        // CAssessment: CAssessment,
        // CAssessmentSave: CAssessmentSave,
        // CPregnancyChart: CPregnancyChart,
        // CPatientService: CPatientService,
        // CPatientServiceSaved: CPatientServiceSaved,

        // CDiet: CDiet,
        // CDietSaved: CDietSaved,
        // CPregnancySave: CPregnancySave,

        // CRoutine: CRoutine,
        // CSummary: CSummary,
        // CSummarySave: CSummarySave,

        // CConsentForm: CConsentForm,
        // CDashBoardList: CDashBoardList,
        // CDashBoardTable: CDashBoardTable,

        // CustomSubLevel: CustomSubLevel,
        // CSpecimenCard: CSpecimenCard,
        // CDescriptionResultView: CDescriptionResultView,
        // CAddDropDown: CAddDropDown,

        // CAddDropDownData: CAddDropDownData,
        // CAddDesignation: CAddDesignation,

        // CDeath: CDeath,
        // CAddDropDownPatientServiceInv: CAddDropDownPatientServiceInv
    };

    const ViewHOCComponent = typeof components[props.component] !== "undefined" ? components[props.component] : null;

    return (
        ViewHOCComponent != null ?
            <ViewHOCComponent
                {...props}
                ref={ref}
            /> : null
    );
}
// export default HView;
// 👇 Wrap in forwardRef and export
// export const HView = forwardRef(HViewFunction);

const HView = forwardRef(HViewFunction);
export default HView; // ✅ Now it's the default export