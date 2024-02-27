'use client'
import SectionCardGA1 from '@/components/compo/cardsGA/SectionCardGA1/SectionCardGA1'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import dataWebsite from '@/assets/json/DataBusiness.json'
function JobWebsite() {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const dataWeb=(lang=='Ar')?dataWebsite.ar:(lang=='En')?dataWebsite.en:dataWebsite.tr;
    // <CardGA1 id={card.id}  title={card.title} text={card.text}/>
    const [data,setData]=useState([
        {id:1 , title:dataWeb.website.Storewebsite.title , text: dataWeb.website.Storewebsite.text2},
        {id:2 , title:dataWeb.website.Shopwebsite.title , text: dataWeb.website.Shopwebsite.text2},
        {id:3 , title:dataWeb.website.Companywebsite.title , text: dataWeb.website.Companywebsite.text2},
        {id:4 , title:dataWeb.website.Privateteacherplatform.title , text: dataWeb.website.Privateteacherplatform.text2},
        {id:5 , title:dataWeb.website.Companywebsite.title , text:dataWeb.website.Schoolwebsite.text2},
        {id:6 , title:dataWeb.website.Privateschoolplatform.title , text: dataWeb.website.Privateschoolplatform.text2},
        {id:7 , title:dataWeb.website.Storemanagement.title,text: dataWeb.website.Storemanagement.text2}
    ])


    return (
        <div>
            <SectionCardGA1  title='Website' data={data} />
        </div>
    )
}

export default JobWebsite