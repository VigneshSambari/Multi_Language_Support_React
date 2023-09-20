import i18n from "../../i18n"; 
import { useTranslation } from "react-i18next";

import LanguageDropdown from "./language_dropdown";
import { translationLangRef } from "../../constants";

//Settings sectioin
const Settings = () => {
    const currentLanguage = i18n.language
    const {t} = useTranslation();

    return (
        <div className="content-fill">
            <div className="font-semibold">{t(translationLangRef.settings.title)}</div>
            <div className="flex flex-row justify-between w-full pt-2 text-center">
                <div className="text-purple-700 pb-2">
                    {t(translationLangRef.settings.selectLang)}
                </div>
                {/* Dropdown-select language*/}
                <LanguageDropdown  defaultLanguage={currentLanguage}/>
            </div>
        </div>
    )
}

export default Settings;