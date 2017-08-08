import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { WorkDetailComponent } from 'Components/ourWorkSections'
import { withLang } from 'Hocs';

class WorkDetail extends Component {
  state = {
    contentLoaded: {
      name: '',
      mainHeader: '',
      subHeader1: '',
      subHeader2: '',
      subHeader3: '',
      content1: '',
      content2: '',
      content3: '',
      imageInfo: {
        webScreenShot: {
          path: '',
          client: '',
          service: '',
          year: '',
        },            
        logo: {
          path: '',              
        }, 
        slides: [
          {
            path:''
          }
        ],         
      }, 
    }
  }

  

  componentWillReceiveProps({ match: { params: { id, lang } } }) {
    const tempContent = {
      mac5: {
        th: {
          name: 'Mac-5',          
          mainHeader: 'เว็บไซต์ซอฟต์แวร์ ที่ทันสมัย ใช้งานได้ครบทุกฟังก์ชั่น พร้อมความสวยงาม',
          subHeader1: 'เว็บไซต์ของซอฟต์แวร์ ERP ที่เนื้อหาเยอะ จะจัดการอย่างไร?',
          subHeader2: 'ดีไซน์ที่สวยงาม ทำให้ผู้ใช้งานรู้สึกแปลกตา และประทับใจ',
          subHeader3: 'ในมือถือก็ใช้งานได้อย่างสวยงามราบรื่น',
          content1: 'เว็บไซต์ที่มีเนื้อหาค่อนข้างเยอะ และต้องการสื่อสารกับลูกค้าให้ครบถ้วน พร้อมการบริการออนไลน์ในการให้คำปรึกษาเกี่ยวกับซอฟต์แวร์ที่เข้าถึงลูกค้าได้ ทำให้เราชาวฮ็อบบิซต้องค้นหาตัวช่วยที่จะทำให้เว็บไซต์สามารถทำงานได้ในทุกส่วน หรือง่ายๆคือการค้นหา Plug-in ที่เหมาะสมในการใช้งาน เพื่อทุ่นแรงของลูกค้าในการทำงาน การจัดการเนื้อหาก็เช่นกัน เราเน้นการจัดหมวดหมู่ของเนื้อหา (Grouping) โดยดูถึงการใช้งาน และพฤติกรรมการใช้งานของลูกค้าเป็นหลัก เช่น เมนูแบบไหนที่คนนิยมกดเข้าเพื่อดูรายละเอียด หรือปุ่มแบบไหนที่ดึงดูดให้คนกดเพื่อเข้าอ่านข้อมูลมากที่สุด',
          content2: 'ปกติแล้วรูปแบบการดีไซน์เว็บไซต์ของโปรแกรมซอฟต์แวร์มักจะออกมาดูจริงจัง เป็นทางการ และเต็มไปด้วยเนื้อหา ทำให้ลูกค้าส่วนใหญ่(มักจะ)ไม่กดอ่าน และเข้ามาเพื่อมองหาแต่สิ่งที่ตนเองต้องการและจากไป เช่น ราคา หรือ ฟังก์ชั่นหลักของซอฟท์แวร์ โดยไม่ได้รู้สึกจดจำเกี่ยวกับเว็บไซต์สักเท่าไหร่นัก ฮ็อบบิซเน้นความสำคัญในการทำให้เว็บไซต์น่าใช้งาน และติดตาลูกค้าแม้ออกจากเว็บไซต์ไปแล้ว โดยการทำเว็บไซต์ MAC-5 ในครั้งนี้ เราเน้นการดึงสีที่ใช่ของ MAC-5 ออกมา พร้อมการเพิ่มลูกเล่นและเสน่ห์ ทำให้คนสนุกกับการเลื่อนเม้าส์เพื่อดูเว็บไซต์ทั้งหมด ส่งผลต่อคะแนนของเว็บไซต์ และส่งผลต่อการทำการตลาดออนไลน์ด้วย',
          content3: 'อย่างที่กล่าวข้างต้นว่าเว็บไซต์ MAC-5 นั้น เน้นการให้บริการที่เข้าถึงลูกค้าทุกคน ทำให้แม้กระทั่งในมือถือลูกค้าก็สามารถจองคอร์สอบรมออนไลน์ได้ทันที และทันใจ พร้อมใช้งานฟังก์ชั่นอื่นๆ ทั้งการให้คำปรึกษา และการพูดคุยออนไลน์ได้อย่างรวดเร็วอีกเช่นกัน เพิ่มประสิทธิภาพในการมีเว็บไซต์มากขึ้นได้อย่างที่ฮ็อบบิซตั้งใจไว้ ว่าเว็บไซต์บริษัทนั้นแสดงถึงวัฒนธรรมองค์กรณ์ และการมีเว็บไซต์ที่ดีนั้นเพิ่มมูลค่าให้กับแบรนด์อย่างแท้จริง',
          imageInfo: {
            webScreenShot: {
              path: 'mac5/mac5main.jpg',
              client: 'MAC-5 Enterprise',
              service: 'Web Development<br/>Corporate<br/>Modern',
              year: '2017',
            },            
            logo: {
              path: 'mac5/mac.png',            
            },   
             slides: [
               {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_04.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_05.jpg'
               }
             ],    
          },  
        },
        en: {
          name: 'Mac-5',          
          mainHeader: 'Content heavy website doesn’t need to be boring.',
          subHeader1: 'A beautiful website equipped with the tools that save you more sleeps',
          subHeader2: 'Forget stereotype, We make a groundbreaking design that impresses everyone.',
          subHeader3: 'Work smoothly on mobile too',
          content1: 'MAC-5 Enterprise is a renowned accounting ERP software for account and inventory management, which has the best analytical features tailored to specific industries such as Production, Manufacturing, and Trading. Showcasing large amount of content requires well planning and a structured layout which becomes one of the challenges for our team; hence, making sure that every content becomes visible to the relevant user while looking refreshing and attractive is a must for us. Apart from beautifying the appearance, it has to works as a platform to gather necessary information from the potential customers by integrating with third parties apps doing things such as Email Marketing, Customer Relationship Management (CRM) and Visitor Tracking. <b>This results in a well structured website that does more than having a pretty face. Our clients can use the collected data for future business development or marketing purpose with ease. How nice.</b>',
          content2: 'If you look at a typical website for accounting software in Thailand, many of them are loads with blocks of contents hoping for someone to discover but in reality leaving the users lost somewhere in a serious-looking website instead. <b>Why don’t we offer our users with an smooth browsing experience at the very first time they enter the site?</b> We aim to make people know how awesome MAC-5 software is right away even though they have minimal knowledge on an accounting software. The website needs to communicate and embrace the brand essence rather than confuse, we strongly believe.',
          content3: '<br>Why say design for everyone if still neglecting users on small devices?</br> Mac-5 website takes care every move on mobile, including viewing features by modules or booking a webinar class. The website is not only adaptive, but responsive to different screen sizes. Users can still do everything just like they browse on Desktop computer. No need to shift between browsers. No magnifying glass either.',
          imageInfo: {
            webScreenShot: {
              path: 'mac5/mac5main.jpg',
              client: 'MAC-5 Enterprise',
              service: 'Web Development<br/>Corporate<br/>Modern',
              year: '2017',
            },            
            logo: {
              path: 'mac5/mac.png',             
            },
             slides: [
               {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_04.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/mac5/mac5sub_05.jpg'
               }
             ],             
          },  
        },
      },
      asap: {
        th: {
          name: 'ASAP PROJECT',                    
          mainHeader: 'เว็บไซต์ที่ทันสมัย แปลกใหม่ และดึงดูดผู้ใช้งาน',
          subHeader1: 'เว็บไซต์ทันสมัย ที่ต้องสื่อสารกับลูกค้าให้ได้ใน 3 วิ',
          subHeader2: 'ลูกเล่นที่ดึงดูดให้ผู้ใช้อยู่ในเว็บไซต์นานยิ่งขึ้น',
          subHeader3: 'เว็บไซต์ที่เน้นการเขียนบล็อก และการให้ความรู้ มาพร้อมการใช้งานหลังบ้านที่ง่ายดาย',
          content1: 'หากเป็นเว็บไซต์ทั่วไป ส่วนใหญ่แล้วมักจะเป็นการขายสินค้า หรือการแนะนำบริษัท ซึ่งในทางดีไซน์เราถือว่าเป็นการมีสินค้าที่ช่วยในการกำหนด Mood & Tone ของเว็บไซต์ได้ แต่โจทย์ที่น่าสนใจในการทำเว็บไซต์ ASAP PROJECT คือการที่เราต้องสื่อให้ลูกค้าเข้าใจว่าเราทำอะไรภายใน 3 วินาทีที่เข้ามาเว็บไซต์ โดยลูกค้าต้องรู้ว่าเราเป็นใคร ทำอะไร ที่ไหน อย่างไร แล้วเขาสามารถใช้บริการ หรือได้ประโยชน์อย่างไรจากเราได้บ้าง ทำให้ฮ็อบบิซต้องแก้ไข Landing Page กันหลายครั้งเพื่อการแสดงคำอธิบายเกี่ยวกับทีม ASAP PROJECT ไว้ใน 1 Landing Page ท้าทายทีมฮ็อบบิซได้เป็นอย่างดี',
          content2: 'การที่ลูกค้าอยู่ในเว็บไซต์นานขึ้น ทำให้คะแนนของเว็บไซต์ดีขึ้น โอกาสติดการค้นหาใน Google มากขึ้น และทำให้การทำ SEO ง่ายขึ้น เพราะฉะนั้นการมีลูกเล่นที่ทำให้ลูกค้าอยู่ในเว็บไซต์นานขึ้นก็เป็นสิ่งที่สำคัญที่ฮ็อบบิซคำนึงถึงเป็นอันดับแรกๆ ในการทำโปรเจ็คต์นี้เราใช้การสื่อความเร็วของ ASAP PROJECT เป็นเครื่องบินกระดาษ แต่หากเป็นเครื่องบินกระดาษทั่วไปก็คงจะไม่เร็วพอ เราจึงแสดงคลื่นความเร็วออกมาในรูปแบบต่างๆ เพื่อเป็นการเน้นย้ำถึงการทำงานของ ASAP PROJECT ที่ให้คำปรึกษาได้อย่างรวดเร็วทันใจ ทันการใช้งาน อีกทั้งสีเหลืองและสีน้ำเงินก็แสดงถึงการเคลื่อนไหว และการทำงานอย่างเป็นระบบได้อย่างดี',
          content3: 'นอกจากการคำนึงถึงหน้าบ้านที่สวยงาม หลังบ้านที่ใช้งานง่ายก็สำคัญเช่นกัน หากการใช้งานหลังบ้านค่อนข้างยุ่งยาก อาจจะทำให้การสร้างเนื้อหาบนเว็บไซต์ได้ไม่ดีอย่างที่ต้องการ ดังนั้นฮ็อบบิซจึงทำหลังบ้านให้ลูกค้าใช้งานได้ง่ายที่สุด และมีหน้าตาที่สะอาดตาอยู่เสมอ กับเว็บไซต์ ASAP PROJECT ก็เช่นกัน เราเลือกหน้าตาที่ง่ายต่อการอัพเดทหลังบ้าน และด้วยการเป็นผู้เชี่ยวชาญเกี่ยวกับแอพพลิเคชั่น และปลั๊กอินต่างๆ ทำให้อาจะมีการเล่นและลองปลั๊กอินบนเว็บไซต์ได้อยู่เสมอ การทำหลังบ้านที่ซัพพอร์ตเรื่องนี้ก็เป็นอีกสิ่งหนึ่งที่สำคัญ',
          imageInfo: {
            webScreenShot: {
              path: 'asap/asap_main.jpg',
              client: 'ASAP<br/>PROJECT',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'asap/asaplogo.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/asap/asapsub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_04.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_05.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_06.jpg'
               }
             ],             
          },
        },
        en: {
          name: 'ASAP PROJECT',                              
          mainHeader: 'เว็บไซต์ที่ทันสมัย แปลกใหม่ และดึงดูดผู้ใช้งาน',
          subHeader1: 'Eye catching interface that communicates within 3 seconds',
          subHeader2: 'Magnetize your audiences with interactive elements',
          subHeader3: 'Powered by Wordpress. Extend unlimited functionality with over 10,000 plugins.',
          content1: 'At Hobbiz, every brand needs to communicate from the inside out. To put it simply, most companies tell people who they are, what they sell as well as the benefits the product has to offer; but what would resonate the audiences the most is why you do what you do. Your passion to create a brand is where connection between your brand and your audiences happens. And this also is where we can help you bring the best out of the brand and simplify to the content that is most relevant to the website – the content and the visual which make your potential customers understand within the first glance they look at the website.',
          content2: 'Talking about Google rank scoring, the more users stay, the better score is. This means if you make them stay in your website, you would have a better chance to reach the first pages of Google without having to pay. The universal rule is to have a great content or blog that is updated regularly. But what enhances it is  having a ‘fun’ element to play with. ASAP PROJECT is app researcher and implementer that focuses on speed and ease; therefore, we decided to use a paper plane which signifies that ASAP’s services are designed for every businesses and are super easy to get it up and running. Try playing with the paper plane icon at the right corner of the page, quick work for smooth work flow are exactly what ASAP does.',
          content3: 'Love to blog? Looking for new apps to integrate with website regularly? Worry-free if you run your website on Wordpress. This content management system is easy to update with a intuitive interface similar to standard blog writing website and open for thousands third-party integration that can help you doing work like CRM, social media sharing and SEO. Most importantly, with Wordpress, you will have control of nearly every aspect of your site and can make simple changes or updates by yourself.',
          imageInfo: {
            webScreenShot: {
              path: 'asap/asap_main.jpg',
              client: 'ASAP<br/>PROJECT',
              service: 'Web Development<br/>Corporate<br/>Modern',
              year: '2017',
            },            
            logo: {
              path: 'asap/asaplogo.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/asap/asapsub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_04.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_05.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/asap/asapsub_06.jpg'
               }
             ],             
          },       
        },
      },
      ygg: {
        th: {
          name: 'YGG Drazil',                                        
          mainHeader: 'เว็บไซต์โชว์ผลงานที่ดึงดูดคนให้อยู่ในเว็บทั้งวัน',
          subHeader1: 'โชว์ผลงานจำนวนมาก ในพื้นที่จำกัด และโหลดได้เร็ว',
          subHeader2: 'โหลดไวอาจยังไม่พอ หน้าตาเว็บต้องหล่อ และเท่',
          subHeader3: 'สีที่ใช่ ที่ไม่หนักเกินไป และไม่เบาเกินไป',
          content1: 'ถ้าพูดถึงการได้รับบรีฟในครั้งแรกของทีมฮ็อบบิซกับเว็บไซต์นี้ คงต้องนึกถึงข้อบังคับที่เราต้องทำให้ได้คือ โหลดเว็บไซต์ได้อย่างรวดเร็ว ด้วยความที่ลูกค้ามีผลงานจำนวนมาก และเป็นวีดีโอทั้งหมด ทำให้การโหลดของหน้าเว็บไซต์เดิมนั้นไม่เร็วมากนัก บวกกับ Langing Page ที่เป็นวีดีโอสั้นๆสำหรับโชว์ผลงาน ทำให้การโหลดดิ้งนั้นหนักขึ้นไปอีก หลังได้รับโจทย์ ทีมฮ็อบบิซได้รวมตัวกันขมักเขม้น และค้นหาไอเดียที่สามารถตอบโจทย์นี้ได้ ถือว่าเป็นงานที่ท้าทายทีมเราได้ดีเลย',
          content2: 'หลังจากหาหนทางที่จะนำไปสู่การโหลดดิ้งเว็บไซต์ได้รวดเร็วแล้ว เราจึงได้กลับมาถกประเด็นเกี่ยวกับ Mood & Tone ของเว็บไซต์ที่แสดงได้ถึงความเป็นตัวตนของลูกช้า เว็บไซต์ YGG Drazil เปรียบเหมือนผู้ชายคนนึงที่ทำงานเก่ง รวดเร็ว หล่อ แถมเท่ นั่นคือสิ่งที่เราได้จากการพูดคุยกัน เราจึงเน้นความเท่ที่เป็นตัวตนของ YGG Drzil ผสมกับความเป็นระเบียบเรียบร้อย เหมือนการจัดการเอกสารกองโต(ผลงาน) ให้อยู่เป็นหมวดหมู่ และง่ายต่อการค้นหาให้มากที่สุด เป็นธีมหลักในการออกแบบครั้งนี้',
          content3: 'หากดูเว็บไซต์เดิมของลูกค้า เราจะเห็นได้ว่ามีกลิ่นอายของความเป็นผู้ชายแมนๆ หนักแน่น และเคร่งขรึม ด้วยการคุมโทนสีขาว และสีดำ ทีมฮ็อบบิซจึงอยากนำความเป็น YGG Drazil ออกมาให้มากยิ่งขึ้น จึงไปปิ๊งกับสีแดงซึ่งเป็นสีหลักของโลโก้ ผสมผสานกับสีทองเล็กๆ สีเทา และสีขาวที่นำมาตัดกัน และเพิ่มลูกเล่นให้กับเว็บไซต์ด้วย element ที่ดึงมาจากบริการที่ลูกค้าเปิดอยู่ เช่น เกมส์ หรือ กล้องถ่ายวีดีโอ ทำให้เว็บไซต์นี้เป็นเว็บไซต์ที่เราทีมฮ็อบบิซสนุกกับการดึงตัวตนของแบรนด์มาร่วมออกแบบมากที่สุดอีกเว็บหนึ่ง',
          imageInfo: {
            webScreenShot: {
              path: 'ygg/ygg_main.jpg',
              client: 'YGG Drazil',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'ygg/ygg.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/ygg/yggsub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/ygg/yggsub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/ygg/yggsub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/ygg/yggsub_04.jpg'
               }
             ],             
          },
        },
        en: {
          name: 'YGG Drazil',                              
          mainHeader: 'เว็บไซต์โชว์ผลงานที่ดึงดูดคนให้อยู่ในเว็บทั้งวัน',
          subHeader1: 'Content heavy portfolio website that loads fast',
          subHeader2: 'Fast page-load might not be enough, the appearance also matters',
          subHeader3: 'สีที่ใช่ ที่ไม่หนักเกินไป และไม่เบาเกินไป',
          content1: 'What to do when most of your content is video but still want to get a high score on Google test? Yggdrazil Group is an international award-winning production studio, specialised in visual effect and post-production. Hence, our challenge we needed to solve here is how to display a great selection of portfolios in the order that is best accessible by local and international potential clients. Organising and load-speed are the key.',
          content2: 'หลังจากหาหนทางที่จะนำไปสู่การโหลดดิ้งเว็บไซต์ได้รวดเร็วแล้ว เราจึงได้กลับมาถกประเด็นเกี่ยวกับ Mood & Tone ของเว็บไซต์ที่แสดงได้ถึงความเป็นตัวตนของลูกช้า เว็บไซต์ YGG Drazil เปรียบเหมือนผู้ชายคนนึงที่ทำงานเก่ง รวดเร็ว หล่อ แถมเท่ นั่นคือสิ่งที่เราได้จากการพูดคุยกัน เราจึงเน้นความเท่ที่เป็นตัวตนของ YGG Drzil ผสมกับความเป็นระเบียบเรียบร้อย เหมือนการจัดการเอกสารกองโต(ผลงาน) ให้อยู่เป็นหมวดหมู่ และง่ายต่อการค้นหาให้มากที่สุด เป็นธีมหลักในการออกแบบครั้งนี้',
          content3: 'หากดูเว็บไซต์เดิมของลูกค้า เราจะเห็นได้ว่ามีกลิ่นอายของความเป็นผู้ชายแมนๆ หนักแน่น และเคร่งขรึม ด้วยการคุมโทนสีขาว และสีดำ ทีมฮ็อบบิซจึงอยากนำความเป็น YGG Drazil ออกมาให้มากยิ่งขึ้น จึงไปปิ๊งกับสีแดงซึ่งเป็นสีหลักของโลโก้ ผสมผสานกับสีทองเล็กๆ สีเทา และสีขาวที่นำมาตัดกัน และเพิ่มลูกเล่นให้กับเว็บไซต์ด้วย element ที่ดึงมาจากบริการที่ลูกค้าเปิดอยู่ เช่น เกมส์ หรือ กล้องถ่ายวีดีโอ ทำให้เว็บไซต์นี้เป็นเว็บไซต์ที่เราทีมฮ็อบบิซสนุกกับการดึงตัวตนของแบรนด์มาร่วมออกแบบมากที่สุดอีกเว็บหนึ่ง',
          imageInfo: {
            webScreenShot: {
              path: 'ygg/ygg_main.jpg',
              client: 'Yggdrazil Group',
              service: 'Web Development<br/>Content heavy<br/>Minimal  ',
              year: '2017',
            },            
            logo: {
              path: 'ygg/ygg.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/ygg/yggsub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/ygg/yggsub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/ygg/yggsub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/ygg/yggsub_04.jpg'
               }
             ],             
          },
        },
      },
      spring: {
        th: {
          name: 'SPRING',                                        
          mainHeader: 'เว็บไซต์ซอฟท์แวร์ ที่เป็น E-Commerce และมีหน้าตาระดับอินเตอร์',
          subHeader1: 'เว็บไซต์ซอฟต์แวร์ ที่ไม่ใช่แค่การให้ข้อมูล แต่มีการซื้อขายโปรแกรมบนเว็บไซต์ได้ทันที',
          subHeader2: 'เว็บไซต์สวยงาม การใช้งานที่นุ่มนวล การปิดการขายที่สวยงาม',
          subHeader3: 'เพลิดเพลินกับดีไซน์ จนเผลอคลิ๊กสั่งซื้อสินค้า',
          content1: 'หากการพูดถึงเว็บไซต์ E-commerce ที่มีในบ้านเราตอนนี้ ส่วนใหญ่จะมาในลักษณะการขายสินค้า เช่น ครีม เครื่องสำอาง และเสื้อผ้า แต่การขายซอฟท์แวร์ยังไม่มีให้เห็นมากนักในประเทศไทย ทำให้ครั้งนี้ฮ็อบบิซต้องทำการบ้านหนักมากขึ้นเพื่อจะได้เข้าใจถึงการซื้อขายซอฟท์แวร์ในระดับสากล หลังจากการทำการบ้านอย่างหนักแล้ว เราพบว่าการซื้อขายซอฟท์แวร์นั้นมีความซับซ้อน ละเอียดอ่อน และมีรายละเอียดค่อนข้างเยอะกว่าการซื้อขายสินค้าทั่วไป ทำให้เราต้องกลับมาระดมความคิดว่าหนทางไหนที่จะใช้ทรัพยากร(เซอร์วิส) ที่มีอยู่แล้วในประเทศไทย มาปั้นให้ตรงกับความต้องการของลูกค้ามากที่สุด',
          content2: 'เนื่องจากการเป็นเว็บไซต์ E-Commerce การซื้อขายจึงเป็นประเด็นที่สำคัญที่สุด เราต้องให้ความรู้เกี่ยวกับซอฟท์แวร์ให้กับลูกค้า ทำให้ลูกค้าเห็นถึงความสำคัญในการมีซอฟต์แวร์ตัวนี้ และเพลิดเพลินกับการรู้จักซอฟท์แวร์นี้มากขึ้นทีละนิดทีละนิด การขายที่ไม่ได้ขายแบบรุนแรงมากเกินไป มักจะให้ผลตอบรับที่ดีกว่าการขายที่แสดงออกทางดีไซน์ว่าอยากจะขาย ทำให้ดีไซน์ที่ขายแบบละมุนละม่อมมักจะปิดการขายได้ดีกว่า ฮ็อบบิซจึงเน้นการออกแบบหน้าตาของเว็บไซต์ให้สวยงาม และใช้งานง่ายที่สุดเป็นอันดับหนึ่ง',
          content3: 'โชคดีของฮ็อบบิซอีกครั้งที่ SPRING มีของที่น่าลองเล่น และลงดีไซน์ได้หลายอย่าง ไม่ว่าจะเป็นสีที่เป็นเอกลักษณ์ของแบรนด์ หรือ Element ที่มีลักษณะของหยดน้ำ และคลื่นน้ำ เป็นต้น ดีไซน์ที่ออกมาจึงเป็นการเน้นความรู้สึกของผู้ใช้งานเว็บไซต์ ที่จะทำให้จะจดจำได้ว่าเว็บนี้ มีสีนี้ มีคลื่นน้ำแบบนี้ แม้จะออกจากเว็บไซต์ไปแล้วก็ตาม ซึ่งโจทย์นี้ทำให้เราละเลงไอเดียกันได้เยอะมาก และออกมาเป็นรูปแบบสุดท้ายในปัจจุบัน เนื้อหาที่เยอะจะต้องถูกจัดให้เป็นระเบียบ ง่ายต่อการอ่านข้อมูลต่อไปเรื่อยๆ และมีปุ่ม Call to Action(CTA) ที่มองเห็นง่าย และกระตุ้นให้อยากคลิ๊กเพื่อสั่งซื้อมากที่สุด',
          imageInfo: {
            webScreenShot: {
              path: 'spring/spring_main.jpg',
              client: 'SPRING',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'spring/spring.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/spring/springsub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_04.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_05.jpg'
               }
             ],             
          },
        },
        en: {
          name: 'SPRING',                                        
          mainHeader: 'เว็บไซต์ซอฟท์แวร์ ที่เป็น E-Commerce และมีหน้าตาระดับอินเตอร์',
          subHeader1: 'เว็บไซต์ซอฟต์แวร์ ที่ไม่ใช่แค่การให้ข้อมูล แต่มีการซื้อขายโปรแกรมบนเว็บไซต์ได้ทันที',
          subHeader2: 'เว็บไซต์สวยงาม การใช้งานที่นุ่มนวล การปิดการขายที่สวยงาม',
          subHeader3: 'เพลิดเพลินกับดีไซน์ จนเผลอคลิ๊กสั่งซื้อสินค้า',
          content1: 'หากการพูดถึงเว็บไซต์ E-commerce ที่มีในบ้านเราตอนนี้ ส่วนใหญ่จะมาในลักษณะการขายสินค้า เช่น ครีม เครื่องสำอาง และเสื้อผ้า แต่การขายซอฟท์แวร์ยังไม่มีให้เห็นมากนักในประเทศไทย ทำให้ครั้งนี้ฮ็อบบิซต้องทำการบ้านหนักมากขึ้นเพื่อจะได้เข้าใจถึงการซื้อขายซอฟท์แวร์ในระดับสากล หลังจากการทำการบ้านอย่างหนักแล้ว เราพบว่าการซื้อขายซอฟท์แวร์นั้นมีความซับซ้อน ละเอียดอ่อน และมีรายละเอียดค่อนข้างเยอะกว่าการซื้อขายสินค้าทั่วไป ทำให้เราต้องกลับมาระดมความคิดว่าหนทางไหนที่จะใช้ทรัพยากร(เซอร์วิส) ที่มีอยู่แล้วในประเทศไทย มาปั้นให้ตรงกับความต้องการของลูกค้ามากที่สุด',
          content2: 'เนื่องจากการเป็นเว็บไซต์ E-Commerce การซื้อขายจึงเป็นประเด็นที่สำคัญที่สุด เราต้องให้ความรู้เกี่ยวกับซอฟท์แวร์ให้กับลูกค้า ทำให้ลูกค้าเห็นถึงความสำคัญในการมีซอฟต์แวร์ตัวนี้ และเพลิดเพลินกับการรู้จักซอฟท์แวร์นี้มากขึ้นทีละนิดทีละนิด การขายที่ไม่ได้ขายแบบรุนแรงมากเกินไป มักจะให้ผลตอบรับที่ดีกว่าการขายที่แสดงออกทางดีไซน์ว่าอยากจะขาย ทำให้ดีไซน์ที่ขายแบบละมุนละม่อมมักจะปิดการขายได้ดีกว่า ฮ็อบบิซจึงเน้นการออกแบบหน้าตาของเว็บไซต์ให้สวยงาม และใช้งานง่ายที่สุดเป็นอันดับหนึ่ง',
          content3: 'โชคดีของฮ็อบบิซอีกครั้งที่ SPRING มีของที่น่าลองเล่น และลงดีไซน์ได้หลายอย่าง ไม่ว่าจะเป็นสีที่เป็นเอกลักษณ์ของแบรนด์ หรือ Element ที่มีลักษณะของหยดน้ำ และคลื่นน้ำ เป็นต้น ดีไซน์ที่ออกมาจึงเป็นการเน้นความรู้สึกของผู้ใช้งานเว็บไซต์ ที่จะทำให้จะจดจำได้ว่าเว็บนี้ มีสีนี้ มีคลื่นน้ำแบบนี้ แม้จะออกจากเว็บไซต์ไปแล้วก็ตาม ซึ่งโจทย์นี้ทำให้เราละเลงไอเดียกันได้เยอะมาก และออกมาเป็นรูปแบบสุดท้ายในปัจจุบัน เนื้อหาที่เยอะจะต้องถูกจัดให้เป็นระเบียบ ง่ายต่อการอ่านข้อมูลต่อไปเรื่อยๆ และมีปุ่ม Call to Action(CTA) ที่มองเห็นง่าย และกระตุ้นให้อยากคลิ๊กเพื่อสั่งซื้อมากที่สุด',
          imageInfo: {
            webScreenShot: {
              path: 'spring/spring_main.jpg',
              client: 'SPRING',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'spring/spring.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/spring/springsub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_04.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/spring/springsub_05.jpg'
               }
             ],             
          },
        },
      },
      chula: {
        th: {
          name: 'CU Transparency',                                        
          mainHeader: 'เว็บไซต์หน่วยงานราชการจัดการเอกสาร พร้อมความโมเดิร์น',
          subHeader1: 'จะทำอย่างไรให้เว็บไซต์ที่นำเสนอข้อมูลจำนวนมากดูน่าอ่าน และน่าค้นหาในเวลาเดียวกัน',
          subHeader2: 'สีชมพูที่ใช่ ไม่ได้หากันง่ายๆ',
          subHeader3: 'เข้าถึงข้อมูลได้รวดเร็ว และมีความสุขเหมือนเดินเล่นในสวนสนุก',
          content1: 'โจทย์ง่ายๆ ที่ทีมเราใช้เวลาในการดีไซน์ รวมไอเดีย และพัฒนากันหลายรอบ เพราะเว็บที่นำเสนอข้อมูลนั้น มีจุดประสงค์เพื่อให้ผู้ใช้เว็บไซต์เข้าถึงข้อมูลให้ง่ายที่สุด และรวดเร็วที่สุด เราจึงจัดการนำปุ่มที่สำคัญทั้งหมด ใส่เข้าไว้ในตำแหน่งที่หาเจอง่าย มีขนาดที่ดึงดูดสายตา แต่ยังเรียบร้อย และมีความเป็นจุฬาอย่างชัดเจนรวมเข้าด้วยกัน',
          content2: 'หลังจากประชุมเรื่องการจัดระเบียบข้อมูล การวางระบบค้นหา และการเตรียมการข้อมูลทั้งหมดแล้ว ทีมดีไซน์เนอร์ก็คิด Mood & Tone ของเว็บไซต์อย่างเร่งด่วน เว็บไซต์ทางการที่ดูเข้าถึงง่าย เป็นระเบียบ และโดดเด่น นั่นคือคอนเซ็ปต์ที่ได้รับ โชคดีของเราที่สีชมพูของจุฬานั้นเป็น “สีที่ใช่” เมื่อนำมาใช้กับสีขาว และสีเทา ทำให้เว็บไซต์มีความสะอาดตา น่าอ่านมากขึ้น และติดตาผู้ใช้งาน เมื่อออกจากเว็บไซต์ไปแล้ว ความรู้สึกของสีชมพูที่อยู่บนเว็บไซต์จะยังคงติดตรึงลูกค้าไปอีกพักใหญ่ๆ ทำให้เว็บไซต์จดจำง่าย',
          content3: 'เราเพิ่มเสน่ห์ของเว็บไซต์โดยการใส่ Element อื่นๆเข้าไป หรือที่ฮ็อบบิซเรียกว่า “ของตกแต่ง” บนเว็บไซต์ ทำให้ความท้าทายเพิ่มขึ้นอีกเป็นเท่าตัว หากมองเว็บไซต์ข้อมูลที่สามารถค้นหาได้โดยทั่วไป มักจะมีกล่องสีเหลี่ยมสำหรับกรอก และคลิ๊กค้นหา แต่ครั้งนี้ เราเพิ่ม Filter ที่ลงรายละเอียดมากขึ้น ทำให้ผู้ใช้งานเว็บไซต์สามารถเข้าถึงข้อมูลได้เร็วขึ้น อีกทั้งยังสามารถแสดงความคิดเห็นบนเว็บไซต์ และติดต่อ ร้องเรียน เสนอแนะสิ่งต่างๆ ได้ง่ายขึ้น รวมทั้งเมลล์ที่จะถูกส่งถึงผู้ดูแลเว็บไซต์ได้อย่างแท้จริง',
          imageInfo: {
            webScreenShot: {
              path: 'chula/chula_main.jpg',
              client: 'CHULA <br/>TRANSPARENCY',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'chula/chula.png',              
            },
            slides: [
               {
                 path:'/assets/images/work/workDetail/chula/chulasub_01.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/chula/chulasub_02.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/chula/chulasub_03.jpg'
               },
                {
                 path:'/assets/images/work/workDetail/chula/chulasub_04.jpg'
               }
            ],             
          },
        },
        en: {
          name: 'CU Transparency',                                                  
          mainHeader: 'เว็บไซต์หน่วยงานราชการจัดการเอกสาร พร้อมความโมเดิร์น',
          subHeader1: 'จะทำอย่างไรให้เว็บไซต์ที่นำเสนอข้อมูลจำนวนมากดูน่าอ่าน และน่าค้นหาในเวลาเดียวกัน',
          subHeader2: 'สีชมพูที่ใช่ ไม่ได้หากันง่ายๆ',
          subHeader3: 'เข้าถึงข้อมูลได้รวดเร็ว และมีความสุขเหมือนเดินเล่นในสวนสนุก',
          content1: 'โจทย์ง่ายๆ ที่ทีมเราใช้เวลาในการดีไซน์ รวมไอเดีย และพัฒนากันหลายรอบ เพราะเว็บที่นำเสนอข้อมูลนั้น มีจุดประสงค์เพื่อให้ผู้ใช้เว็บไซต์เข้าถึงข้อมูลให้ง่ายที่สุด และรวดเร็วที่สุด เราจึงจัดการนำปุ่มที่สำคัญทั้งหมด ใส่เข้าไว้ในตำแหน่งที่หาเจอง่าย มีขนาดที่ดึงดูดสายตา แต่ยังเรียบร้อย และมีความเป็นจุฬาอย่างชัดเจนรวมเข้าด้วยกัน',
          content2: 'หลังจากประชุมเรื่องการจัดระเบียบข้อมูล การวางระบบค้นหา และการเตรียมการข้อมูลทั้งหมดแล้ว ทีมดีไซน์เนอร์ก็คิด Mood & Tone ของเว็บไซต์อย่างเร่งด่วน เว็บไซต์ทางการที่ดูเข้าถึงง่าย เป็นระเบียบ และโดดเด่น นั่นคือคอนเซ็ปต์ที่ได้รับ โชคดีของเราที่สีชมพูของจุฬานั้นเป็น “สีที่ใช่” เมื่อนำมาใช้กับสีขาว และสีเทา ทำให้เว็บไซต์มีความสะอาดตา น่าอ่านมากขึ้น และติดตาผู้ใช้งาน เมื่อออกจากเว็บไซต์ไปแล้ว ความรู้สึกของสีชมพูที่อยู่บนเว็บไซต์จะยังคงติดตรึงลูกค้าไปอีกพักใหญ่ๆ ทำให้เว็บไซต์จดจำง่าย',
          content3: 'เราเพิ่มเสน่ห์ของเว็บไซต์โดยการใส่ Element อื่นๆเข้าไป หรือที่ฮ็อบบิซเรียกว่า “ของตกแต่ง” บนเว็บไซต์ ทำให้ความท้าทายเพิ่มขึ้นอีกเป็นเท่าตัว หากมองเว็บไซต์ข้อมูลที่สามารถค้นหาได้โดยทั่วไป มักจะมีกล่องสีเหลี่ยมสำหรับกรอก และคลิ๊กค้นหา แต่ครั้งนี้ เราเพิ่ม Filter ที่ลงรายละเอียดมากขึ้น ทำให้ผู้ใช้งานเว็บไซต์สามารถเข้าถึงข้อมูลได้เร็วขึ้น อีกทั้งยังสามารถแสดงความคิดเห็นบนเว็บไซต์ และติดต่อ ร้องเรียน เสนอแนะสิ่งต่างๆ ได้ง่ายขึ้น รวมทั้งเมลล์ที่จะถูกส่งถึงผู้ดูแลเว็บไซต์ได้อย่างแท้จริง',
          imageInfo: {
            webScreenShot: {
              path: 'chula/chula_main.jpg',
              client: 'CHULA <br/>TRANSPARENCY',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'chula/chula.png',              
            },
            slides: [
              {
                path:'/assets/images/work/workDetail/chula/chulasub_01.jpg'
              },
              {
                path:'/assets/images/work/workDetail/chula/chulasub_02.jpg'
              },
              {
                path:'/assets/images/work/workDetail/chula/chulasub_03.jpg'
              },
              {
                path:'/assets/images/work/workDetail/chula/chulasub_04.jpg'
              }
            ],             
          },
        },
      },
      dp: {
        th: {
          mainHeader: 'การโปรโมตสินค้าผ่านมือถือที่เข้าถึงลูกค้าได้อย่างแท้จริง',
          subHeader1: 'จากเว็บไซต์หลักที่ไม่สามารถ Responsive ได้ สู่การทำ minisite สำหรับมือถือโดยเฉพาะ',
          subHeader2: 'เราช่วยวางแผนในการขายสินค้าผ่านเว็บไซต์',
          subHeader3: 'ยอดขายเพิ่มขึ้นตามความสะดวกสบายของลูกค้า',
          content1: 'โจทย์ที่เราได้รับมาในตอนแรกนั้นคือ การโปรโมตสินค้าหลักของลูกค้า โดยผ่านการใช้งานจากมือถือ หรือก็คือการมี Responsive ที่สวยงาม สื่ออย่างชัดเจนว่าขายสินค้าอะไร เพื่อกระตุ้นความสนใจในสินค้าของลูกค้าให้มากขึ้น และดีไซน์เว็บไซต์ให้ออกมาใช้งานง่าย',
          content2: 'จากประสบการณ์ทำงานที่ผ่านมา เรารักที่จะแชร์ความรู้ที่มีอยู่ให้กับลูกค้าในเรื่องของเว็บไซต์ และพฤติกรรมการใช้งานเว็บไซต์ที่แท้จริง โดยอิงจากสถิติของพฤติกรรมของกลุ่มเป้าหมาย จากอายุ เพศ อาชีพ ความชอบ เป็นต้น เมื่อรู้ว่ากลุ่มเป้าหมายที่ชัดเจนเป็นใคร การขายให้ถูกจุดก็ไม่ใช่เรื่องยากอีกต่อไป',
          content3: 'จากพฤติกรรมการใช้งานของลูกค้าของลูกค้า ทำให้เราทราบวิธีการที่จะอำนวยความสะดวกให้ลูกค้าในการเข้าถึงข้อมูล และสร้างความสะดวกสบายที่ง่ายแก่การซื้อขาย การนำ Widget ต่างๆ ที่สามารถกระตุ้นการขายมาผนวกกับดีไซน์และคอนเซ็ปต์ ทำให้ลูกค้าได้เว็บไซต์ขายสินค้าที่ติดเครื่องมือพร้อมขายแบบเต็มรูปแบบ โดยในครั้งนี้ เราได้ผนวกเครื่องมือแสดงตารางเวลาของคอร์สอบรมการใช้งานให้แก่ลูกค้า และปุ่มโทรออกเพื่อติดต่อบริษัท เพียงกลุ่มเป้าหมายคลิ๊กก็จะสามารถโทรออกได้ทันที',
          imageInfo: {
            webScreenShot: {
              path: 'dpMobile/dp_mobile_main.jpg',
              client: 'Double Pine',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'dpMobile/double.png',              
            },          
            slides: [
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_01.jpg'
              },
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_02.jpg'
              },
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_03.jpg'
              },
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_04.jpg'
              }
            ],   
          },
        },
        en: {
          mainHeader: 'การโปรโมตสินค้าผ่านมือถือที่เข้าถึงลูกค้าได้อย่างแท้จริง',
          subHeader1: 'จากเว็บไซต์หลักที่ไม่สามารถ Responsive ได้ สู่การทำ minisite สำหรับมือถือโดยเฉพาะ',
          subHeader2: 'เราช่วยวางแผนในการขายสินค้าผ่านเว็บไซต์',
          subHeader3: 'ยอดขายเพิ่มขึ้นตามความสะดวกสบายของลูกค้า',
          content1: 'โจทย์ที่เราได้รับมาในตอนแรกนั้นคือ การโปรโมตสินค้าหลักของลูกค้า โดยผ่านการใช้งานจากมือถือ หรือก็คือการมี Responsive ที่สวยงาม สื่ออย่างชัดเจนว่าขายสินค้าอะไร เพื่อกระตุ้นความสนใจในสินค้าของลูกค้าให้มากขึ้น และดีไซน์เว็บไซต์ให้ออกมาใช้งานง่าย',
          content2: 'จากประสบการณ์ทำงานที่ผ่านมา เรารักที่จะแชร์ความรู้ที่มีอยู่ให้กับลูกค้าในเรื่องของเว็บไซต์ และพฤติกรรมการใช้งานเว็บไซต์ที่แท้จริง โดยอิงจากสถิติของพฤติกรรมของกลุ่มเป้าหมาย จากอายุ เพศ อาชีพ ความชอบ เป็นต้น เมื่อรู้ว่ากลุ่มเป้าหมายที่ชัดเจนเป็นใคร การขายให้ถูกจุดก็ไม่ใช่เรื่องยากอีกต่อไป',
          content3: 'จากพฤติกรรมการใช้งานของลูกค้าของลูกค้า ทำให้เราทราบวิธีการที่จะอำนวยความสะดวกให้ลูกค้าในการเข้าถึงข้อมูล และสร้างความสะดวกสบายที่ง่ายแก่การซื้อขาย การนำ Widget ต่างๆ ที่สามารถกระตุ้นการขายมาผนวกกับดีไซน์และคอนเซ็ปต์ ทำให้ลูกค้าได้เว็บไซต์ขายสินค้าที่ติดเครื่องมือพร้อมขายแบบเต็มรูปแบบ โดยในครั้งนี้ เราได้ผนวกเครื่องมือแสดงตารางเวลาของคอร์สอบรมการใช้งานให้แก่ลูกค้า และปุ่มโทรออกเพื่อติดต่อบริษัท เพียงกลุ่มเป้าหมายคลิ๊กก็จะสามารถโทรออกได้ทันที',
          imageInfo: {
            webScreenShot: {
              path: 'dpMobile/dp_mobile_main.jpg',
              client: 'Double Pine',
              service: 'เว็บไซต์',
              year: '2017',
            },            
            logo: {
              path: 'dpMobile/double.png',              
            },            
            slides: [
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_01.jpg'
              },
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_02.jpg'
              },
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_03.jpg'
              },
              {
                path:'/assets/images/work/workDetail/dpMobile/dpsub_04.jpg'
              }
            ], 
          },
        },
      },
    }

    this.setState({ 
      contentLoaded: tempContent[id][lang],
    }) 
  }

  render() {
    const { lang } = this.props;
    const { contentLoaded } = this.state;

    return (
      <WorkDetailComponent lang={lang} contentLoaded={contentLoaded} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('ourWorks/WorkDetail')
);

export default enhance(WorkDetail);

