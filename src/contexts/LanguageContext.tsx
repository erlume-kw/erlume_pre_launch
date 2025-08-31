import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
	currentLanguage: Language;
	setLanguage: (language: Language) => void;
	t: typeof translations.en;
	isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

	const setLanguage = (language: Language) => {
		setCurrentLanguage(language);
	};

	const t = translations[currentLanguage];
	const isRTL = currentLanguage === "ar";

	return (
		<LanguageContext.Provider
			value={{ currentLanguage, setLanguage, t, isRTL }}>
			{children}
		</LanguageContext.Provider>
	);
};
