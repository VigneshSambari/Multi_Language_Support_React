import { useTranslation } from "react-i18next";
import { translationLangRef } from "../../constants";

//Home Section
const Home = () => {
    const {t} = useTranslation();

    return (
        <div className="content-fill">
            <div className="font-semibold">{t(translationLangRef.home.title)}</div>
            <div className="pt-2">
                {/* Adding html tags inside content text */}
                <p dangerouslySetInnerHTML={{ __html: t(translationLangRef.home.content) }}></p>
            </div>
        </div>
    )
}

export default Home;