import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

import { navItems } from "../constants";

//Navbar-Home,About,Settings
const Navbar = () => {
    const location = useLocation();
    const {t} = useTranslation();

    return (
        <div className="navbar">
            <span className="font-semibold">{t("title")}</span>
            <div className="flex">
                <ul className="flex flex-row gap-3 md:gap-5 justify-items-center">
                    {
                        navItems.map((item: any, index: any)=>{
                            return (
                                <li  key={index}>
                                    <Link to={item.link} >
                                            <span className={`${location.pathname===item.link?
                                                "nav-buttons-selected":"nav-buttons-not-selected"}`}>
                                                {t(item.title)}
                                            </span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;