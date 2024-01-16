import React from 'react'
import '../cv/style.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import SkillList from '../skils/SkillList';
import Projects from '../project/Projects';
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
                            <div className="timeline-bg">  <section className="timeline profile-infos mobile-padd">
                                <div className="line row timeline-margin">
                                    <div className="content-wrap">
                                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" />
                                        <div className="col-md-9 bg1 full-height" /> </div> </div>   <div className="line row">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" > </div>   <div className="col-md-8 content-wrap bg1">
                                        <h2 className="section-title">PROFİL</h2></div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>
                                <div className="line row">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />
                                    <div className="col-md-8 content-wrap bg1"> <div className="line-content">
                                        <h3 className="section-item-title-1">TAM İSİM</h3>   <p>Kaan Okluçam</p></div> </div>
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                </div>
                                <div className="line row">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />
                                    <div className="col-md-8 content-wrap bg1">
                                        <div className="line-content">
                                            <h3 className="section-item-title-1">Email</h3>
                                            <p>kaan.oklu06[at]gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>
                                       <div className="line row"> 
                                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />  
                                         <div className="col-md-8 content-wrap bg1"> 
                                         <div className="line-content">
                                        <h3 className="section-item-title-1">DOĞUM</h3> 
                                          <p>Ekim 1998 - Ankara</p>
                                          </div> 
                                        </div> 
                                          <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>  </section> 
                                        <section className="timeline education" id="education">  <div className="line row timeline-margin"> <div className="content-wrap"> <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" /> <div className="col-md-9 bg1 full-height" />
                                        </div> </div>  
                                         <div className="line row"> 
                                          <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                          <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" > </div>  
                                           <div className="col-md-8 content-wrap bg1">  <h2 className="section-title">EĞİTİM</h2></div> 
                                             <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>  
                                              <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                              <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-education " />  
                                               <div className="col-md-8 content-wrap bg1"> 
                                               <div className="line-content line-content-education">  
                                               <h3 className="section-item-title-1">Yönetim BiliSim Sistemleri  LİSANS</h3>  
                                                <h4 className="graduation-time"><i className="fa fa-university" /> Mehmet Akif Ersoy Universitesi
                                            <span className="graduation-date"> 2017-2021 (3.16)</span></h4> 
                                              <div className="graduation-description">
                                                 <p>Algorithms, Web development , data structures, gibi bilgisayar bilimlerinin ve yazılım teknolojilerinin temelerini oluşturan derslerden oldukça yüksek notlar alarak lisans eğitimini tamamladım. </p> 
                                                  <p>Bitirme Stajımı Arca Yazılımda Yazılım Stajyeri olarak tamamladım.</p> </div></div>
                                                   </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>    
                                                   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                   <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-education " />   
                                                   <div className="col-md-8 content-wrap bg1"> <div className="line-content line-content-education"> 
                                                    <h3 className="section-item-title-1">Andiçen Meslek LİSESİ</h3> 
                                                      <h4 className="graduation-time"><i className="fa fa-university" /> Ortaöğretim (4 Yıl) - <span className="graduation-date">2012 - 2016 (88 Not ortalaması)</span></h4>   
                                                      <div className="graduation-description"> <p>Lisede  Web Tasarım bölümünü seçtim ve bu süreçte özellikle bölüm derslerine büyük bir odaklanma gösterdim. Web alanında kendimi geliştirmek için yoğun bir çaba sarf ettim ve bu süre zarfında yazılım temellerimi sağlam bir şekilde atmış oldum.</p> </div></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div></section>   <section className="timeline work-experience" id="works">  <div className="line row timeline-margin"> <div className="content-wrap"> <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" /> <div className="col-md-9 bg1 full-height" /> </div> </div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" />   <div className="col-md-8 content-wrap bg1">  <h2 className="section-title">İŞ TECRÜBESİ</h2></div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">
                                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-work " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content line-content-education">  <h3 className="section-item-title-1">Piernet Yazılım</h3>   <h4 className="job"><i className="fa fa-flag" /> Front-end Developer / Yazılım Mühendisi - <span className="job-date">Ağustos 2022 - Halen</span></h4>   <div className="job-description"> <p>Şu anki işim, e-ticaret web sitelerini oluşturmak ve yönetmek üzerine odaklanmaktadır. Bu bağlamda, Shopify&apos;un güçlü temelini kullanarak özgün ve etkileyici e-ticaret platformları oluşturuyorum. Özellikle, kullanıcı dostu arayüzleri ve özelleştirilebilir özellikleri sayesinde müşterilerin ve işletmelerin ihtiyaçlarını en iyi şekilde karşılayan çözümler sunmayı amaçlıyorum. Hem tasarım hem de işlevselliği bir araya getirerek, müşterlere desk veriyorum.</p>
                                                    <p><ul><li>HTML, CSS, JS, BOOSTRAP, LIQUID</li>
                                                        <li>GitHub</li>
                                                        <li>Shopify, Json</li></ul></p> </div></div> </div>  
                                                         <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-work " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content line-content-education">  <h3 className="section-item-title-1">Instituto Superior de Tecnologias Avançadas – ISTEC  (Erasmus +Intern)            </h3>   <h4 className="job"><i className="fa fa-flag" /> Software Intern - <span className="job-date">Ocak 2022 - Haziran 2022</span></h4>   <div className="job-description"> <p>Eramus Stajımi tamamlamak için gittiğim Lizbon Protekizde Üniversitede,<strong>It</strong> bünyesinde <strong>Stajyer yazılımcı </strong> olarak çalıştım. Çalıştığım süre zarfı içerisinde bu teknolojileri kullandım ve bu teknolojilerde kendimi geliştirdim : </p> <ul><li>C#, MVC ASP.net</li>
                                                            <li>HTML, CSS, JS Jquery,Boostrap</li>
                                                            <li>MSSQL</li></ul></div></div> </div>  
                                                            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   
                                                            <div className="line row"> 
                                                             <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                             <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-work " />   
                                                             <div className="col-md-8 content-wrap bg1"> 
                                                             <div className="line-content line-content-education">  
                                                             <h3 className="section-item-title-1">Arca Software</h3>   
                                                             <h4 className="job"><i className="fa fa-flag" /> Stajyer - Yazılım Geliştirici- <span className="job-date">Ocak 2021 - Haziran 2021</span></h4>   
                                                             <div className="job-description">
                                                                 <p>Arca Yazılım Bünyesinde:</p>
                                                                  <ul className="job-list">
                                                                     <li>C# ,ASP .net</li> 
                                                                     <li> Online Eğitim Sistemi oluşturulması</li>
                                                                      <li>Trend takip sisteminin ve altyapısının oluşturulması</li>
                                                                       <li>Yönetim panelinin güncellenmesi</li>
                                                                  </ul> 
                                                                        </div>
                                                                        </div> 
                                                                        </div>   
                                                                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>
                                                                        </section>   
                                                                        <Projects/>
                                                                             
                                                                
                                                                <section className="timeline" id="interests">  
                                                                <div className="line row timeline-margin"> 
                                                                <div className="content-wrap"> 
                                                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" />
                                                                 <div className="col-md-9 bg1 full-height" /> </div> </div>  
                                                                  <div className="line row"> 
                                                                   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" />  
                                                                     <div className="col-md-8 content-wrap bg1"> 
                                                                      <h2 className="section-title">İLGİ ALANLARI</h2></div>  
                                                                       <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   
                                                                       <div className="line row">  
                                                                       <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                                                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />
                                                                           <div className="col-md-8 content-wrap bg1"> 
                                                                           <div className="line-content">  <h3 className="section-item-title-1">ALGORİTMALAR</h3>
                                                                              <p>Lise yıllarından beridir algoritmalara ve zeka sorularına meraklıyım. Özellikle çözülmesi zor problemler için, saatlerimi de harcayacak olsam bir algoritma geliştiriyor olmak bana zevk verir.</p></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">FELSEFE</h3>   <p>İlk çağ felsefesi, mitoloji, insanlık tarihi ve insanların düşünme biçimleri üzerine meraklıyımdır. Bertrand Russell, Friedrich Nietzsche, Oruç Aruoba sevdiğim düşünürlerdendir.</p>
                                                                              <p>Düşüncelerim <a href="http://tr.wikipedia.org/wiki/Analitik_felsefe" target="_blank" rel="nofollow">analitik</a> ve 
                                                                              <a href="http://tr.wikipedia.org/wiki/Varolu%C5%9F%C3%A7uluk" target="_blank" rel="nofollow">varoluşçu</a> 
                                                                              felsefeye daha yakındır.</p></div> </div>  
                                                                               <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>
                                                                               
                                                                               </section>
                                                                                <SkillList main_title="TEKNİK BECERİLER" skillsData={mySkillsData} />

                            </div> </div>   <footer id="footer" className="row">  <p className="quote">“Hayat, ya yaşanır bir maceradır ya da anlamsız bir bekleyiş. Seçim senin, her anını değerlendirmek senin elinde.”</p></footer></div>
                            
                </div>
          
            )}
        </section>
    )
}

export default MyCv