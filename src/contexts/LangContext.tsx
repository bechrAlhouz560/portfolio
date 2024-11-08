"use client";
import React, { useContext, useState } from "react";
import LangFr from "../../lang/fr.json";
import LangEn from "../../lang/en.json";

export interface LangContextProps {
  activeLang: "en" | "fr";
  setActiveLang: React.Dispatch<React.SetStateAction<"en" | "fr">>;
}

export function useLang(): typeof LangEn {
  const langContext = useContext(LangContext);
  if (langContext.activeLang === "fr") {
    // @ts-ignore
    return LangFr;
  }
  return LangEn;
}

export function useActiveLangName() {
  const langContext = useContext(LangContext);
  return langContext.activeLang;
}

export function useSetActiveLang() {
  const langContext = useContext(LangContext);

  return function (lang: "en" | "fr") {
    langContext.setActiveLang(lang);
  };
}
export const LangContext = React.createContext<LangContextProps>({
  activeLang: "en",
  setActiveLang: function () {},
});

export function LangContextProvider({ children }: React.PropsWithChildren) {
  const [activeLang, setActiveLang] = useState<"en" | "fr">("en");
  return (
    <LangContext.Provider
      value={{
        activeLang,
        setActiveLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}
