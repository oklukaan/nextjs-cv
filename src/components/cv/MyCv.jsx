import React from 'react'
import '../cv/style.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import SkillList from '../skils/SkillList';
import Projects from '../project/Projects';
import Interest from '../interest/Interest';
import Works from '../works/Works';
import Education from '../education/Education';
import Profile from '../profile/Projile';

const MyCv = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);

 
    const mySkills = [
        "Java tabanlı web uygulamaları, (Spring, Play!, JSF desteği ile)",
        "SOAP, RESTful web servis tasarımı",
        "GWT + Swing ile masaüstü uygulamaları",
        "Pek çok tasarım deseni kullanarak katmanlı mimari tasarımı",
        "Asenkron multithread uygulamalar",
        "Maven, ANT, Grails"
      ];
    const cSharpSkills = [
        "Windows Forms ile masaüstü uygulamaları,",
        "TCP/IP, Soket uygulamaları,",
        "Entity Framework ve web servisler kullanılarak otomasyon sistemlerinin hazırlanması."
    ]

    const nodeJsSkilss = [
        "Express Js Kullanımı",
        "Veri Tabanı bağlantısı",
        "Framework backend servisleri ve ön yüz templeteleri oluşturulması."
    ]

    const htmlCss = [
        "Bootstrap, LESS gibi güncel araç tecrübesi",
        "Kullanıcı deneyimi bilgisi.",
        "Responsive Tasarım"

    ]
    const JavaScript = [
        "Scope kavramına hakimlik, object oriented tasarımlar</li>", 
        "jQuery ile DOM yönetimi, dinamik tasarımlar",
        "Vanilya JavaScript Hakimiyeti",
        "ReactJS, NextJs Framework kullanımı",
        "NodeJS ile küçük uğraşılar."
    ]
    const Php =[
        "OO Php uygulamaları",
        "Wordpress Php Geliştirmeleri"
    ]
    const mySql=[
        "Popüler CMS'lerin MySql kullanımı, yönetimi hakkında tecrübe sahipliği",
        "Database güvenliği ve data yedekleme konusunda tecrübe sahipliği."
    ]

    const mongoDb=[
        "Lokasyon tabanlı indexler ve arama hakkında tecrübe sahibi",
        "Node js MongoDb Veri tabanı bağlantısı",
        "MongoDB ile ilişkisel bir veri tabanınınin birlikte yönetimi hakkında bilgi sahibi."
    ]

    const linuxSystem = [
        "Kullanıcı yönetimi tecrübesi",
        "Paket yöneticisi uygulamaları kullanım bilgisi",
        "Temel düzey kernel bilgisi."
    ]
    const windowsSystem = [
        "IIS service hakkında bilgi sahipliği",
        "Temel düzel Active Directory bilgisi."
    ]
    const wordpress = [
        "2 Yılı Aşkın Wordpress web site tasarımı",
        "Wordpress Orta Düzey Olan Eklentilere Hakimlik",
        "Elementor Kullanımı",
        "Temel Düzeyde Kod tarafında Php Kullanımı",
        
    ]
    const wixVelo=[
        "2-3 Yıl arası Wix Web Site Tasarımı",
        "İleri Düzeyde Wix Velo Kullanımı",
        "Data set ve wix veritabanı hakimiyeti",
        "Api servis ve wix paket yönetimi",
        "Eklenti Geliştirmesi"
    ]

    const shopify=[
        "2 Yıl aşkın Süreder Shopif Web Site Tasarımı",
        "İleri Düzey Liquid Bilgisi",
        "İlerisi düzey Schema(veritabanı) Ve Shopify Kullanım Bilgisi",
        "İleri Düzey Tema Geliştirme"
    ]

    const mySkillsData = [
        {
          title: 'PROGRAMLAMA DİLLERİ',
          skills: [
            {skilName: 'Java', wid: '40', percant: '40', skills: mySkills, color: '' },
            {skilName: 'C#', wid: '45', percant: '45', skills: cSharpSkills , color: '2'},
            {skilName: 'NodeJs', wid: '60', percant: '60', skills: nodeJsSkilss , color: '3'},
            // Diğer beceriler...
          ],
        },
        {
          title: 'WEB TEKNOLOJİLERİ / SCRIPTING DİLLERİ',
          skills: [
            { skilName: 'Html/Css', wid: '90', percant: '90', skills: htmlCss, color: '' },
            { skilName: 'JavaScript', wid: '85', percant: '85', skills: JavaScript, color: '2' },
            { skilName: 'PHP', wid: '40', percant: '40', skills: Php, color: '3' }
            // Diğer beceriler...
          ],
        },
        {
            title: 'VERİTABANI YÖNETİMİ / KULLANIMI',
            skills: [
              { skilName: 'MsSql', wid: '40', percant: '40', skills: mySql, color: '' },
              { skilName: 'MongoDB', wid: '60', percant: '60', skills: mongoDb, color: '2' }
              // Diğer beceriler...
            ],
        },
        {
            title: 'İŞLETİM SİSTEMLERİ / UYGULAMA SUNUCULARI',
            skills: [
              { skilName: 'LINUX (Ubuntu)', wid: '25', percant: '35', skills: linuxSystem, color: '' },
              { skilName: 'Windows (Server 2008, Server 2012)', wid: '40', percant: '35', skills: windowsSystem, color: '2' }
              // Diğer beceriler...
            ],
        },
        {
            title: 'YARDIMCI PROGRAMLAR / DİĞER YAZILIMLAR',
            skills: [
              { skilName: 'Wordpress', wid: '80', percant: '80', skills: wordpress, color: '' },
              { skilName: 'Wix / WixVelo', wid: '90', percant: '90', skills: wixVelo, color: '2' },
              { skilName: 'Shopify / Shopify Theme Development', wid: '95', percant: '95', skills: shopify, color: '3' },

              
              // Diğer beceriler...
            ],
        },
        // Diğer kategoriler...
      ];

    return (

        <section id="content-body" className="containers animated fadeInUp">
            {domLoaded && (
                <div className="row justify-content-center" id="intro">
                    <div className="col-md-12 col-sm-12 col-lg-10 col-md-offset-2 col-sm-offset-1 resume-container">
                        <div className="row">
                            <div className="header-buttons col-md-10 col-md-offset-1">
                                <a href="/my_kaan_cv.pdf" target="_blank" className="btn btn-default btn-top-resume">
                                    <Image alt='Dowload image' className='seri' src="/download.png" width={20} height={20} />
                                    <span className="btn-hide-text">KISA ÖZGEÇMİŞİ İNDİR</span>
                                </a>
                                <a href="mailto:kaan.oklu06@gmail.com" className="btn btn-default btn-top-message">
                                    <Image alt='mail image' className='seri' src="/mail.png" width={20} height={20} />
                                    <span className="btn-hide-text"> Email gönder</span></a></div> </div>  
                                     <div className="profile-intro row"> 
                                      <div className="col-md-4 profile-col"> 
                                      <div className="profile-pic"> <div className="profile-border">
                                        <img src="my_picture.jpg" alt="personel picture" />
                                    </div>
                                    </div>
                                    </div>
                            <div className="col-md-7">
                                <h1 className="intro-title1">
                                    Merhaba, ben
                                    <span className="color1 bold"> Kaan!</span></h1>
                                <h2 className="intro-title2">Front-end Dev. / Shopify Dev. /</h2>  
                                 <p><strong>Burdur Mehmet Akif Ersoy Üniversitesi Yönetim Bilişim Sistemleri</strong> bölümünden mezunum, <strong>NodeJs</strong>, <strong>React</strong> ve <strong>Web Geliştirme</strong> ile uğraşmayı seven bir yazılımcıyım. Şu an <strong>Piernet</strong>&apos;de <strong>Front-end Developer</strong> olarak çalışıyorum.</p><p> Okurum, öğrenirim,  kod yazarım .</p>
                            </div>
                        </div>
                        <div className="timeline-wrap">
                            <div className="timeline-bg">  
                                <Profile/>
                                <Education/>
                                <Works/>
                                <Projects/>
                                <Interest/>
                                <SkillList main_title="TEKNİK BECERİLER" skillsData={mySkillsData} />

                            </div> 
                        </div>   
                        <footer id="footer" className="row">  
                        <p className="quote">“Hayat, ya yaşanır bir maceradır ya da anlamsız bir bekleyiş. Seçim senin, her anını değerlendirmek senin elinde.”</p>
                        </footer>
                    </div>
                            
                </div>
          
            )}
        </section>
    )
}

export default MyCv