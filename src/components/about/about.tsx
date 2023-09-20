import React from "react";
import { useTranslation } from "react-i18next";
import { translationLangRef } from "../../constants";

//About section
const About = () => {
    const {t} = useTranslation();

    return (
        <div className="content-fill">
            <div className="font-semibold">{t(translationLangRef.about.title)}</div>
            <div className="pt-2">
            {/* Adding html tags inside content text */}
            <p dangerouslySetInnerHTML={{ __html: t(translationLangRef.about.content) }}></p>
            </div>
        </div>
    )
}

export default About;