import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { dropDownLanguageOptions } from '../../constants';

interface LanguageOption {
  value: string;
  label: string;
}

interface LanguageDropdownProps {
  defaultLanguage: string;
}

//Dropdown for language selction
const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ defaultLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(defaultLanguage);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const languageOptions: LanguageOption[] = dropDownLanguageOptions;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //Change language from i18n
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  //Chanhe language of dropdown and set i18n language
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    changeLanguage(language)
    setDropdownOpen(false); 
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleDropdown}>
        <button
          type="button"
          className="dropdown-button"
          id="language-options-menu"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          {languageOptions.find((option) => option.value === selectedLanguage)?.label || 'Select Language'}
        </button>
      </div>

      {/* Dropdown Content */}
      {dropdownOpen && (
        <div
          className="dropdown"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-options-menu"
        >
          <div className="py-1" role="none">
            {languageOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleLanguageChange(option.value)}
                className={`${
                  option.value === selectedLanguage
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                } group w-full text-left px-4 py-2 text-sm`}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
