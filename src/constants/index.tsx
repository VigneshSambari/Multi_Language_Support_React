//Constant pointing to json content of language
export const translationLangRef = {
    home: {
        content: "home.content",
        title: "home.title",
    },
    about: {
        content: "about.content",
        title: "about.title",
    },
    settings: {
        selectLang: "settings.selectLanguage",
        title: "settings.title",
    }
}

//Dropdown contents for language selection in settings
export const dropDownLanguageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'español' },
    { value: 'hi', label: 'हिन्दी' },
];


//Navbar items with ref to language json keys and links
export const navItems = [
    {
        title: "navItems.home",
        link: "/",
    },
    {
        title: "navItems.about",
        link: "/about",
    },
    {
        title: "navItems.settings",
        link: "/settings",
    }
];
