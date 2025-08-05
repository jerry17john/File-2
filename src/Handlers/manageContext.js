import { useContext } from "react";
import EmrResponseComponentContext from "./emrResponseComponentContext";
import STemplateContext from "./sTemplateContext";


export function manageContext(stemplateParam) {
    const { responseJSON, setResponseJSON } = useContext(EmrResponseComponentContext);
    const { sTemplateJSON, setSTemplateJSON } = useContext(STemplateContext);

    const stemplate = stemplateParam ?? false;

    const sources = {
        false: { contextdata: responseJSON, setContextData: setResponseJSON },
        true: { contextdata: sTemplateJSON, setContextData: setSTemplateJSON },
    };

    return sources[stemplate];
}