'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleCodeUse.css'

export default function CodeUse() {
    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    return (
        <div>
            
            <style jsx>
                {`

                    ${ (theme=='dark') ? 
                    '.CodeUse { background-color: var(--section-background-dark-2);}' 
                    : '.CodeUse {background-color: var(--section-background-2);}' }
                    ${ (theme=='dark') ? 
                    '.CodeUse .box { background-color: var(--section-background-dark);}' 
                    : '.CodeUse .box {background-color: var(--section-background);}' }
                    ${ (theme=='dark') ? 
                    '.CodeUse .box::before { background-color:  var(--main-color);}' 
                    : '.CodeUse .box::before {background-color:  var(--main-color);}' }
                    ${ (theme=='dark') ? 
                    '.CodeUse .box .info { background-color: #111;}' 
                    : '.CodeUse .box .info {background-color:  #ddd;}' }
                    ${ (theme=='dark') ? 
                    '.CodeUse .box .info.info::before { background-color:var(--main-color); color: black;}' 
                    : '.CodeUse .box .info.info::before {background-color:  var(--main-color); color: white;}' }
                    ${ (theme=='dark') ? 
                    '.CodeUse .box .info.info::after { background-color:#191919;}' 
                    : '.CodeUse .box .info.info::after {background-color:  #d2d2d2;}' }

                    
                `}
            </style>

            <div className="CodeUse" id="CodeUse">
                <h2 className="main-title">CodeUse</h2>
                <div className="container">
                    <div className="box">
                    <i className="fas fa-user-shield fa-4x"></i>
                    <h3>Security</h3>
                    <div className="info">
                        <a href="#">Details</a>
                    </div>
                    </div>
                    <div className="box">
                    <i className="fas fa-tools fa-4x"></i>
                    <h3>Fixing Issues</h3>
                    <div className="info">
                        <a href="#">Details</a>
                    </div>
                    </div>
                    <div className="box">
                    <i className="fas fa-map-marked-alt fa-4x"></i>
                    <h3>Location</h3>
                    <div className="info">
                        <a href="#">Details</a>
                    </div>
                    </div>
                    <div className="box">
                    <i className="fas fa-laptop-code fa-4x"></i>
                    <h3>Coding</h3>
                    <div className="info">
                        <a href="#">Details</a>
                    </div>
                    </div>
                    <div className="box">
                    <i className="fas fa-palette fa-4x"></i>
                    <h3>Security</h3>
                    <div className="info">
                        <a href="#">Design</a>
                    </div>
                    </div>
                    <div className="box">
                    <i className="fas fa-bullhorn fa-4x"></i>
                    <h3>Marketing</h3>
                    <div className="info">
                        <a href="#">Details</a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
