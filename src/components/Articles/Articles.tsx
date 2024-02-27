'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleArticles.css'



export default function Articles() {
    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);


    return (
        <div>
            <style jsx>
                {`
                    ${ (theme=='dark') ? '.gallery { background-color-dark: var(--section-background);}' : '.gallery {background-color: var(--section-background);}' }

                `}
            </style>
            <div className="articles" id="articles">
      <h2 className="main-title">Articles</h2>
      <div className="container">
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-01.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-02.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-03.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-04.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-05.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-06.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-07.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <Image width={100} height={100}  src="/images/imgs/cat-08.jpg" alt="" />
          <div className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div className="spikes"></div>
        </div>
    )
}
