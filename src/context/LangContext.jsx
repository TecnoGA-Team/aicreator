'use client'
import { createContext, useState,useEffect } from "react";
import { ThemeContext } from "styled-components";
export const LangContext=createContext();




export const LangProvider=({children})=>{

    const [lang,setLang]=useState('En');
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
        const storedLang=localStorage.getItem('lang')||'En';
        setLang(storedLang);
    },[])
    if(!(isMounted)){
        return<>Loading ...</>
    }
    const changeLang =(lang)=>{
        setLang(lang);
        localStorage.setItem('lang',lang);
    };

    return(
        <LangContext.Provider value={{lang,changeLang}}>
            {children}
        </LangContext.Provider>
    );
};

