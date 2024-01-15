import React from 'react'
import '../cv/style.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Skil from '../skils/Skil';
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
                                <h2 className="intro-title2">Front-end Dev. / Shopify Dev. / Yazılım Mühendisi</h2>  
                                 <p><strong>Burdur Mehmet Akif Ersoy Üniversitesi Yönetim Bilişim Sistemleri</strong> bölümünden mezunum, <strong>NodeJs</strong>, <strong>React</strong> ve <strong>Web Geliştirme</strong> ile uğraşmayı seven yazılım mühendisiyim. Şu an <strong>Piernet</strong>&apos;de <strong>Front-end Developer</strong> olarak çalışıyorum.</p><p> Okurum, öğrenirim,  kod yazarım .</p>
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
                                                                        <section className="timeline work-experience" id="projects-and-others">  
                                                                        <div className="line row timeline-margin"> 
                                                                        <div className="content-wrap"> 
                                                                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" /> 
                                                                        <div className="col-md-9 bg1 full-height" /> </div> </div>   
                                                                        <div className="line row">  
                                                                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                                                                         <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" />   
                                                                         <div className="col-md-8 content-wrap bg1">  
                                                                         <h2 className="section-title">Projelerim</h2></div>
                                                                            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   
                                                                            <div className="line row"> 
                                                                             <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                                             <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-work " />   
                                                                             <div className="col-md-8 content-wrap bg1"> 
                                                                             <div className="line-content line-content-education"> 
                                                                             <div className="job-description"> 
                                                                             <ul className="neler-yaptim">
                                                                                 <li><strong>1999</strong> : Henüz 8 yaşındayken bilgisayar operatörlüğü belgemi aldım.</li> 
                                                                                 <li><strong>2006</strong> : 100 saatlik web tasarım/programlama eğitimi aldım.</li> 
                                                                                 <li><strong>2009</strong> : TÜBİTAK proje yarışmasına katıldığım bilgisayar projesi ile AFLİVA birincilik ödülü aldım.</li> 
                                                                                 <li><strong>2010</strong> : ODTÜ’de düzenlenen UPEM’e katıldım, yarışmada Ege Üniversitesini temsil ettim.</li> 
                                                                                 <li><strong>2010 – 2011</strong> : Ege Üniversitesi Bilgisayar Mühendisliği bünyesinde Photoshop eğitimi verdim.</li> 
                                                                                 <li><strong>2011</strong> : TEGV’den gelen katılımcılara internet ve web teknolojileri eğitimi verdim.</li>
                                                                                 <li><strong>2012</strong> : OBSS’nin düzenlediği Ege Üniversitesi Java Roadshow yarışmasında birincisi oldum.</li> 
                                                                                 </ul> </div></div> </div>   
                                                                                 <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div></section>   
                                                                                 <section className="timeline skills" id="skills">  
                                                                                 <div className="line row timeline-margin">
                                                                                     <div className="content-wrap"> 
                                                                                     <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                                                     <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" /> 
                                                                                     <div className="col-md-9 bg1 full-height" /> </div> </div>   
                                                                                     <div className="line row">  
                                                                                     <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> 
                                                                                     <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" />  
                                                                                     <div className="col-md-8 content-wrap bg1">  <h2 className="section-title">TEKNİK BECERİLER</h2></div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   
                                                            <div className="col-md-8 content-wrap bg1"> 
                                                                <div className="line-content"> 
                                                                <h3 className="section-item-title-1">PROGRAMLAMA DİLLER</h3>  
                                                                    <ul className="skills-list"> 
                                                                    <Skil skilName="Java" wid='40' percant='40' skills={mySkills } color=""/>
                                                                    <Skil skilName="C#" wid='45' percant='45' skills={cSharpSkills} color ="2"/>
                                                                    <Skil skilName="NodeJs" wid='60' percant='60' skills={nodeJsSkilss} color ="3"/>
                                                                    </ul>
                                                                </div>
                                                            </div>  
                                                                            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">WEB TEKNOLOJİLERİ / SCRIPTING DİLLERİ</h3>   
                                                                            <ul className="skills-list">  
                                                                            <li> 
                                                                                <div className="progress">
                                                                                     <div className="progress-bar" data-percent="85%" role="progressbar" style={{ width: '85%' }}>
                                                                                         <span className="sr-only">85% Complete</span> 
                                                                                    </div>
                                                                                     <span className="progress-type">HTML / CSS</span> 
                                                                                     <span className="progress-completed">85%</span> 
                                                                                </div> 
                                                                                <ul className="skill-usage"> 
                                                                                <li>Div tabanlı responsive tasarımlar,</li>
                                                                                 <li>Bootstrap, LESS gibi güncel araç tecrübesi,</li>
                                                                                  <li>Kullanıcı deneyimi bilgisi.</li> 
                                                                                </ul> 
                                                                            </li>   
                                                                            <li> 
                                                                                <div className="progress">
                                                                                     <div className="progress-bar progress-bar-2" data-percent="80%" role="progressbar" style={{ width: '80%' }}> 
                                                                                     <span className="sr-only">80% Complete</span> 
                                                                                </div>
                                                                                 <span className="progress-type">JavaScript</span> 
                                                                                 <span className="progress-completed">80%</span> 
                                                                            </div> 
                                                                            <ul className="skill-usage">
                                                                                 <li>Scope kavramına hakimlik, object oriented tasarımlar,</li> <li>jQuery ile DOM yönetimi, dinamik tasarımlar,</li> <li>AngularJS MVW kütüphanesi kullanımı,</li> <li>NodeJS ile küçük uğraşılar.</li> </ul> </li>   <li> <div className="progress"> <div className="progress-bar progress-bar-3" data-percent="70%" role="progressbar" style={{ width: '70%' }}> <span className="sr-only">70% Complete</span> </div> <span className="progress-type">PHP</span> <span className="progress-completed">70%</span> </div> <ul className="skill-usage"> <li>OO Php uygulamaları,</li> <li>Wordpress, Drupal, Joomla gibi CMS&apos;ler ve PhpBB,SMF,vBulletin gibi forum uygular hakkında plugin geliştirebilecek seviyede bilgi sahipliği.</li> <li>Admin paneli uygulamaları geliştirilmesi,</li> <li>Data toplama amaçlı scriptler.</li> </ul> </li></ul></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">VERİTABANI YÖNETİMİ / KULLANIMI</h3>  
                                                                                  <ul className="skills-list"> 
                                                                                     <li>
                                                                                         <div className="progress"> 
                                                                                         <div className="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style={{ width: '44%' }}>
                                                                <span className="sr-only">40% Complete</span>
                                                            </div>
                                                             <span className="progress-type">MySql</span> 
                                                             <span className="progress-completed">40%</span> 
                                                             </div> 
                                                             <ul className="skill-usage">
                                                               <li>Popüler CMS&apos;lerin MySql kullanımı, yönetimi hakkında tecrübe sahipliği,</li> 
                                                               <li>Database güvenliği ve data yedekleme konusunda tecrübe sahipliği.</li>
                                                             </ul> 
                                                                </li> 
                                                                <li> <div className="progress"> <div className="progress-bar" data-percent="40%" role="progressbar" style={{ width: '40%' }}> <span className="sr-only">40% Complete</span> </div> <span className="progress-type">MongoDB</span> <span className="progress-completed">40%</span> </div> <ul className="skill-usage"> <li>Doküman tabanlı veri modelleme yetisi,</li> <li>Lokasyon tabanlı indexler ve arama hakkında tecrübe sahibi,</li> <li>MongoDB ile ilişkisel bir veri tabanınınin birlikte yönetimi hakkında bilgi sahibi.</li> </ul> </li>   <li> <div className="progress"> <div className="progress-bar progress-bar-2" data-percent="30%" role="progressbar" style={{ width: '30%' }}> <span className="sr-only">30% Complete</span> </div> <span className="progress-type">PostgreSQL</span> <span className="progress-completed">30%</span> </div> <ul className="skill-usage"> <li>Temel ihtiyaçlar için kullanım,</li> <li>Entity Framework ile entegrasyon hakkında tecrübe sahibi.</li> </ul> </li></ul></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">İŞLETİM SİSTEMLERİ / UYGULAMA SUNUCULARI</h3>   <ul className="skills-list">  <li> <div className="progress"> <div className="progress-bar progress-bar-3" data-percent="80%" role="progressbar" style={{ width: '80%' }}> <span className="sr-only">80% Complete</span> </div> <span className="progress-type">LINUX (Ubuntu, CentOS, Solaris)</span> <span className="progress-completed">80%</span> </div> <ul className="skill-usage"> <li>Kullanıcı yönetimi tecrübesi,</li> <li>Paket yöneticisi uygulamaları kullanım bilgisi,</li> <li>*NIX / Bash komutlarına hakimlik,</li> <li>Apache uygulama sunucusu yönetimi tecrübesi,</li> <li>Temel düzey kernel bilgisi.</li> </ul> </li>   <li> <div className="progress"> <div className="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style={{ width: '60%' }}> <span className="sr-only">60% Complete</span> </div> <span className="progress-type">Windows (Server 2008, Server 2012)</span> <span className="progress-completed">60%</span> </div> <ul className="skill-usage"> <li>IIS service hakkında bilgi sahipliği,</li> <li>MSDOS komutlarına hakimlik,</li> <li>Temel düzel Active Directory bilgisi.</li> </ul> </li></ul></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">YARDIMCI PROGRAMLAR / ARAÇLAR</h3>   <ul className="skills-list">  <li> <div className="progress"> <div className="progress-bar progress-bar-2" data-percent="70%" role="progressbar" style={{ width: '70%' }}> <span className="sr-only">70% Complete</span> </div> <span className="progress-type">Adobe Photoshop</span> <span className="progress-completed">70%</span> </div> <ul className="skill-usage"> <li>İki yıl Photoshop eğitmenliği tecrübesi</li> </ul> </li>   <li> <div className="progress"> <div className="progress-bar progress-bar-3" data-percent="60%" role="progressbar" style={{ width: '60%' }}> <span className="sr-only">60% Complete</span> </div> <span className="progress-type">Eclipse IDE</span> <span className="progress-completed">60%</span> </div> <ul className="skill-usage"> <li>Plug-in development bilgi sahipliği,</li> <li>Eclipse JAVA için pek çok kısayola hakimlik.</li> </ul> </li></ul></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div></section>   <section className="timeline" id="interests">  <div className="line row timeline-margin"> <div className="content-wrap"> <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" /> <div className="col-md-9 bg1 full-height" /> </div> </div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" />   <div className="col-md-8 content-wrap bg1">  <h2 className="section-title">İLGİ ALANLARI</h2></div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">ALGORİTMALAR</h3>   <p>Lise yıllarından beridir algoritmalara ve zeka sorularına meraklıyım. Özellikle çözülmesi zor problemler için, saatlerimi de harcayacak olsam bir algoritma geliştiriyor olmak bana zevk verir.</p></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div>   <div className="line row">  <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /> <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />   <div className="col-md-8 content-wrap bg1"> <div className="line-content">  <h3 className="section-item-title-1">FELSEFE</h3>   <p>İlk çağ felsefesi, mitoloji, insanlık tarihi ve insanların düşünme biçimleri üzerine meraklıyımdır. Bertrand Russell, Friedrich Nietzsche, Oruç Aruoba sevdiğim düşünürlerdendir.</p><p>Düşüncelerim <a href="http://tr.wikipedia.org/wiki/Analitik_felsefe" target="_blank" rel="nofollow">analitik</a> ve <a href="http://tr.wikipedia.org/wiki/Varolu%C5%9F%C3%A7uluk" target="_blank" rel="nofollow">varoluşçu</a> felsefeye daha yakındır.</p></div> </div>   <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" /></div></section>
                            </div> </div>   <footer id="footer" className="row">  <p className="quote">“Bir kişinin kendisine verdiği zararı başka hiç kimse veremez.”</p></footer></div>
                            
                </div>
          
            )}
        </section>
    )
}

export default MyCv