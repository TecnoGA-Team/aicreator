'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';

import dataHR from '@/assets/json/DataBusiness.json'

export default function PricingHR() {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const dataHrP=(lang=='Ar')?dataHR.ar.HR:(lang=='En')?dataHR.en.HR:dataHR.tr.HR;

    return (
        <div>
            

            <style jsx>
                {`
                    ${ (theme=='dark') ? '.gallery { background-color-dark: var(--section-background);}' : '.gallery {background-color: var(--section-background);}' }

                    .pricing {
                      padding-top: var(--main-padding-top);
                      padding-bottom: var(--main-padding-bottom);
                      position: relative;
                      background-color: var(--section-background);
                    }
                    .pricing .container {
                      display: grid;
                      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                      gap: 30px;
                    }
                    .pricing .box {
                      position: relative;
                      box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
                      transition: var(--main-transition);
                      background: white;
                      text-align: center;
                      z-index: 1;
                    }
                    .pricing .box::before,
                    .pricing .box::after {
                      content: "";
                      width: 0;
                      height: 50%;
                      background-color: #f6f6f6;
                      position: absolute;
                      z-index: -1;
                      transition: var(--main-transition);
                    }
                    .pricing .box::before {
                      left: 0;
                      top: 0;
                    }
                    .pricing .box::after {
                      right: 0;
                      bottom: 0;
                    }
                    .pricing .box:hover::before,
                    .pricing .box:hover::after {
                      width: 100%;
                    }
                    @media (min-width: 1200px) {
                      .pricing .box.popular {
                        top: -20px;
                      }
                    }
                    .pricing .box.popular .label {
                      position: absolute;
                      writing-mode: vertical-rl;
                      background-color: var(--main-color);
                      color: white;
                      font-weight: bold;
                      padding: 10px 10px 35px 10px;
                      font-size: 18px;
                      right: 20px;
                      width: 40px;
                    }
                    .pricing .box.popular .label::before {
                      content: "";
                      position: absolute;
                      bottom: 0;
                      right: 0;
                      border-style: solid;
                      border-color: transparent transparent white;
                      border-width: 20px;
                    }
                    .pricing .box .title {
                      font-weight: bold;
                      margin: 30px 0;
                      font-size: 25px;
                      letter-spacing: -1px;
                    }
                    .pricing .box .imgGA {
                      width: 80px;
                      margin-bottom: 30px;
                    }
                    .pricing .box .price {
                      margin-bottom: 20px;
                    }
                    .pricing .box .amount {
                      display: block;
                      font-size: 60px;
                      font-weight: bold;
                      margin-bottom: 5px;
                      color: var(--main-color);
                    }
                    .pricing .box .time {
                      color: #777;
                    }
                    .pricing .box ul {
                      text-align: left;
                    }
                    .pricing .box ul li {
                      padding: 20px;
                      border-top: 1px solid #eee;
                    }
                    .pricing .box ul li::before {
                      font-family: "Font Awesome 5 Free";
                      content: "\f00c";
                      margin-right: 10px;
                      font-weight: 900;
                      color: var(--main-color);
                    }
                    .pricing .box a {
                      display: block;
                      width: fit-content;
                      border: 2px solid var(--main-color);
                      color: var(--main-color);
                      margin: 30px auto 40px;
                      padding: 15px 20px;
                      border-radius: 6px;
                      font-weight: bold;
                      transition: var(--main-transition);
                    }
                    .pricing .box a:hover {
                      background-color: var(--main-color-alt);
                      border-color: var(--main-color-alt);
                      color: white;
                    }

                `}

            </style>

            <div className="pricing" id="pricing">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">Pricing Plans</h2>
      <div className="container">
        <div className="box">
          <div className="title">{dataHrP.Basic.title1}</div>

          <div className="price">
            <span className="amount">$900</span>
            <span className="time">Per Month</span>
          </div>
          <ul>
            <li>{dataHrP.Basic.text1}</li>
            <li>{dataHrP.Basic.text2}</li>
            <li>{dataHrP.Basic.text3}</li>
            <li>{dataHrP.Basic.text4}</li>
            <li>{dataHrP.Basic.text5}</li>
            <li>{dataHrP.Basic.text6}</li>
          </ul>
          <a href="#">Choose Plan</a>
        </div>
        <div className="box popular">
          <div className="label">Most Popular</div>
          <div className="title">{dataHrP.professional.title1}</div>

          <div className="price">
            <span className="amount">$4000</span>
            <span className="time">Per Month</span>
          </div>
          <ul>
          <li>{dataHrP.professional.text1}</li>
            <li>{dataHrP.professional.text2}</li>
            <li>{dataHrP.professional.text3}</li>
            <li>{dataHrP.professional.text4}</li>
            <li>{dataHrP.professional.text5}</li>
            <li>{dataHrP.professional.text6}</li>
            <li>{dataHrP.professional.text7}</li>
            <li>{dataHrP.professional.text8}</li>
            <li>{dataHrP.professional.text9}</li>
            <li>{dataHrP.professional.text10}</li>
            <li>{dataHrP.professional.text11}</li>
            
          </ul>
          <a href="#">Choose Plan</a>
        </div>
        <div className="box">
          <div className="title">{dataHrP.toChoose.title1}</div>

          <div className="price">
            <span className="amount">$??</span>
            <span className="time">Per Month</span>
          </div>
          <ul>
          <li>{dataHrP.toChoose.text1}</li>
            <li>{dataHrP.toChoose.text2}</li>
          </ul>
          <a href="#">Choose Plan</a>
        </div>
      </div>
    </div>
        </div>
    )
}
