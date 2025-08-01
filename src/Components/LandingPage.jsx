import "./LandingPage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power2, Power4 } from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import t2 from "../assets/Images/HomePage/t1.png";

import LocomotiveScroll from 'locomotive-scroll';

// import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";
import React, { useEffect, useMemo, useRef, useState } from "react";


gsap.registerPlugin(useGSAP, ScrollTrigger);


const kitchenCategories = [
  { name: 'Kitchens', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786015/2_bl3cxj_sz6tvo.webp' },
  { name: 'Island Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786223/12_cc9sti_o2fy4a.webp' },
  { name: 'L-Shape Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786022/6_bcp1bw_gi2khr.webp' },
  { name: 'U-Shape Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786194/1_a8rmpg_bqiwyd.webp' },
  { name: 'Parallel Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786199/3_z9eejg_rhhask.webp' },
  { name: 'Island Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786202/4_qbnmsq_ou9rof.webp' },
  { name: 'Straight Kitchens', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786204/5_t7kwot_i6vyb9.webp' },
  { name: 'L-Shape Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786207/6_pkw7mo_il4qpv.webp' },
  { name: 'U-Shape Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786212/8_ohp7fb_bdvpnc.webp' },
  { name: 'Parallel Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786214/9_kvomih_gi692x.webp' },
  { name: 'Island Kitchen', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786223/12_cc9sti_o2fy4a.webp' },
];


const wardrobeCategories = [
  { name: 'Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746616039/nnpixsron965x7qgsrsy_nrtivx.webp' },
  { name: '1-Door Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788541/22_itwnc3_ojvjeb.webp' },
  { name: 'Sliding Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788482/20_ynxzl7_h545mk.webp' },
  { name: 'Sliding Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788478/19_uhtobz_ygevi4.webp' },
  { name: 'Walk-in-Closet Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788474/18_gx25rn_yuzyzi.webp' },
  { name: 'Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241117/20_ohlmrl.webp' },
  { name: '1-Door Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788450/15_n8tldp_mjxl9v.webp' },
  { name: '2-Door Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788443/13_pdrznd_bukmze.webp' },
  { name: 'Sliding Wardrobe', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788426/8_hxhlwq_unvxvc.webp' },
];


const lightingCategories = [

  { name: 'Lamps And Lightings', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784756/3_dgj8x9_s1g4gj.webp' },

  { name: 'Ceiling Lights', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746616038/bhxzfd5szxwtg6fdskyw_p9uqrv.webp' },
  { name: 'Lighting', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785285/12_iynrag_cezwz0.webp' },
  { name: 'Ceiling Lights', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785421/19_ymupwm_fycjwx.webp' },
  { name: 'Wall Lights', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784769/13_d14wqe_avysz4.webp' },
  { name: 'Outdoor Lights', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746616039/trc0hvgzaaq4gnbfbcde_jcjthe.webp' },
  { name: 'Bedroom Lights', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785285/12_iynrag_cezwz0.webp' },
  { name: 'Lamps', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785423/20_qcvhqq_zumimo.webp' },
  { name: 'Lighting', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784776/17_nnfcow_nnkafu.webp' },
  { name: 'Ceiling Lights', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746616038/bhxzfd5szxwtg6fdskyw_p9uqrv.webp' },
];


const decorCategories = [

  { name: 'All Decors', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785067/21_jhvm8s_rhsr7m.webp' },
  { name: 'Mirrors', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785571/17_f5c53m_w4j235.webp' },
  { name: 'Clocks', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785544/5_jzcfnw_yl4hdk.webp' },
  { name: 'Wall Paintings', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785303/1_c7dty2_sqrlik.webp' },
  { name: 'Clocks', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785461/18_dpibm5_utu44j.webp' },
  { name: 'Wall Paintings', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785061/18_unhqk1_e4xmrp.webp' },
  { name: 'All Decors', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785542/4_t5ayax_zyr6ib.webp' },
  { name: 'Wall Decors', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785351/21_chxhty_r43p2r.webp' },
  { name: 'Mirrors', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784862/13_qnfczx_gklebd.webp' },
  { name: 'Wall Decors', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746616040/ygpwkcrwzccgni6mofiq_btpcsk.webp' },
  { name: 'Vases', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785039/5_qmqgz4_codah9.webp' },
  { name: 'Clocks', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785544/5_jzcfnw_yl4hdk.webp' },
  { name: 'Wall Paintings', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785303/1_c7dty2_sqrlik.webp' },
];


const furnitureCategories = [
  { name: 'TV units Designs', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786928/18_nrfdzt_mwidyc.webp' },
  { name: 'Commercial Furniture', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784275/15_zrilzh_ooc8tp.webp' },
  { name: 'Pooja Room Designs', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786761/13_x6vgns_dbzra8.webp' },
  { name: 'Domestic Furniture', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784333/14_sgloqa_sjq5mx.webp' },
  { name: 'Commercial Furniture', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784265/4_kdfjtu_nczros.webp' },
  { name: 'Bar Counter', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786657/26_onevwv_o5b644.webp' },
  { name: 'TV Panels Designs', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786894/12_fayle0_yst2dd.webp' },
  { name: 'Pooja Room Designs', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786772/17_z1yl7f_ndkzrn.webp' },
  { name: 'Domestic Furniture', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784337/16_iev7yy_lrtpb8.webp' },
  { name: 'Commercial Furniture', imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784275/15_zrilzh_ooc8tp.webp' },
];

const logos = [
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292689/12_nemoqd.webp', alt: 'logo of explore himalaya travel and adventure', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292688/11_wden5x.webp', alt: 'logo of clove dental ', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292688/10_vzf3q3.webp', alt: 'logo of walk talk radio ', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292687/9_zax6ge.webp', alt: 'logo of arun constructions and developer ', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292686/8_lf5poo.webp', alt: 'logo of jumpstart the coworking hub ', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292685/7_btlfve.webp', alt: 'logo of iipm ', width: 176, height: 212 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292684/5_um4fjv.webp', alt: 'logo of orris expect the best ', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292684/4_zuqakh.webp', alt: 'logo of DND fine dine restaurant and bar ', width: 176, height: 112 },
    

    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292684/2_wz76lt.webp', alt: 'logo of srivaas group of companies ', width: 176, height: 112 },
    
    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292684/3_jk8vrs.webp', alt: 'logo of green palace hotel ', width: 176, height: 112 },
    

    { src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747292684/1_n59lw9.webp', alt: 'logo of prasad psycho ', width: 176, height: 112 },
    




  ];
import 'react-lazy-load-image-component/src/effects/blur.css';
 
import PopUp from "./PopUp";
import { Helmet } from "react-helmet-async";



function LandingPage() {

  
  useGSAP(() => {


    gsap.set(".slidesm", {
      scale: 5,
    });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      ".vdodiv",
      {
        clipPath: "circle(0% at 50% 50%)",
        ease: "power2",
      },
      "a"
    );

    tl.to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    );

    tl.to(
      ".lft",
      {
        xPercent: -30,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );

    tl.to(
      ".rgt",
      {
        xPercent: 30,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
  });


  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'),
      smooth: true,
      smoothMobile: false,
      scrollSpeed: 50,

    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);


  const imageIds = [
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785923/4_z536dw_obynie.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786223/12_cc9sti_o2fy4a.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785351/21_chxhty_r43p2r.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785280/10_ahmy1m_f7vu8i.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785119/13_uqhjvu_tfyzfx.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785058/16_rcttg8_wjq5nx.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784924/12_qomfy8_kbtadr.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786761/13_x6vgns_dbzra8.webp',
    'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786663/28_j2djr6_eep95x.webp',

  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adhunik DecoDive",
    "image": "https://adhunikdecodive.com/logo.jpg",
    "description": "Top luxury interior designers in Gurugram, Haryana, specializing in bespoke home and office interiors. Rated 5.0 by 7 Google reviews.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "603, Reach My Tower, Sector 70",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.3909507",
      "longitude": "77.0294258"
    },
    "telephone": "+91-9289126052",
    "url": "https://adhunikdecodive.com/",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "7"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61560707765598",
      "https://www.instagram.com/adhunikdecodive/",
      "https://www.linkedin.com/in/adhunik-decodive-032347337/"
    ]
  };

  const slideData = [
    {
      name: "Shabnam Gupta",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
      position: "Mumbai",
      testimonial:
        "Adhunik Decodive completely transformed my living room into a luxurious, inviting space. They understood my design vision and paid close attention to every detail. Their creativity and professionalism made the entire experience seamless. Highly recommended for anyone looking for high-end interior design in India!",
    },
    {
      name: "Ambrish Arora",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
      position: "Chennai",
      testimonial:
        "We hired Adhunik Decodive to remodel our outdated kitchen, and the results were stunning! The design team was punctual, professional, and made the entire renovation process enjoyable. Their knowledge of luxury interior design really stands out. Perfect blend of function and style.",
    },
    {
      name: "Tanya Gyani",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/woman_gphihr_q3qguw.webp",
      position: "New Delhi",
      testimonial:
        "Our home now looks like a feature from a design magazine, thanks to Adhunik Decodive. The space feels fresh, modern, and super cozy. There were a couple of hiccups in communication, but the end result exceeded expectations. Truly one of the best interior design teams in Delhi NCR.",
    },
    {
      name: "Priya Rastogi",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/woman_gphihr_q3qguw.webp",
      position: "Agra",
      testimonial:
        "We got stunning custom furniture for our home and ergonomic office chairs that fit perfectly into our workspace. Adhunik Decodive listened to our style and budget needs, delivering beautiful, functional pieces. Their team made interior styling feel easy and exciting. Great experience!",
    },
    {
      name: "Akari Studio",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
      position: "Shimla",
      testimonial:
        "I discovered Adhunik Decodive’s decor collection and fell in love instantly. Every home decor piece—from throw pillows to art—feels handpicked for elegance and warmth. It’s amazing how these small details changed the entire vibe of our living space.",
    },
    {
      name: "Manit Rastogi",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
      position: "Varanasi",
      testimonial:
        "Our kitchen renovation by Adhunik Decodive was simply amazing! The layout, design, and materials were thoughtfully planned. Their recommendations made a big difference in the final look and feel. We now have a luxurious, functional kitchen that adds real value to our home.",
    },
    {
      name: "Rhea Malhotra",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/woman_gphihr_q3qguw.webp",
      position: "Gurgaon",
      testimonial:
        "Working with Adhunik Decodive was the best decision we made for our Gurgaon home. Their expert interior designers turned our house into a modern luxury space that reflects our lifestyle perfectly. From custom furniture to the smallest decor accents, every element was curated with care. If you're searching for the best luxury interior designers in Gurgaon, look no further.",
    },
  ];

  const blogPosts = [
    {
      id: 5,
      title: "Minimalist Interior Design in Every Style",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/ab6_omdoa9_sb4lfm.webp",
      description: "Discover the beauty of minimalist interior design with Adhunik DecoDive. Focused on simplicity and...",
      date: "December 2024",
      link: "https://adhunikdecodive.com/blogs/5"
    },
    {
      id: 2,
      title: "Spice Up Your Kitchen: Trendy Modular Designs to Try in 2024",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/ssd_t9jpex_xljukf.webp",
      description: "Spice things up with Adhunik DecoDive's 2024 trends! We are talking smart storage, multifunctional...",
      date: "January 2025",
      link: "https://adhunikdecodive.com/blogs/2"
    },
    {
      id: 3,
      title: "Stunning Wardrobe Design Ideas for Indian Homes",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/sd_etqleb_1_myputd.webp",
      description: "From space-saving sliders to luxurious walk-in options, our wardrobes seamlessly blend modern trends with...",
      date: "January 2025",
      link: "https://adhunikdecodive.com/blogs/3"
    },
    {
      id: 4,
      title: "Bar Counter Design Ideas to Replicate in Your Home In 2024",
      image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784143/home_bar_rmncdx_sg9fx1.webp",
      description: "Whether you’re dreaming of a cozy corner for cocktails or a stylish entertainment space, our designs...",
      date: "February 2025",
      link: "https://adhunikdecodive.com/blogs/4"
    }
  ];

  const accordionData = useMemo(() => [
    {
      title: " What is the ideal budget for hiring top home and office interior designers in Gurgaon?",
      content:
        "A good budget for hiring an interior designer in Gurgaon depends on several key factors, including the designer’s expertise, reputation, project complexity, and the size and scope of the space being redesigned. Whether it's a home or office project, prices can vary widely based on customization levels, materials used, and design aesthetics.On average, interior design costs in Gurgaon typically range between ₹400 to ₹1,500 per square foot. Basic interior work for smaller spaces may fall toward the lower end of the spectrum, while premium or luxury designs with high-end materials and intricate detailing may lean toward the higher range. It’s recommended to consult with top interior designers in Gurgaon to get a tailored quote based on your specific needs, style preferences, and space dimensions.",
    },

    {
      title: " What types of home and office interior design projects do your expert designers in Gurgaon specialize in? ",
      content:
        <>
          <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">
      Interior Design Services We Offer in Gurgaon
    </h2>
    <p className="text-lg mb-6 text-center">
      You can feel free to contact us for the following interior design services, 
      executed by our highly experienced interior designers in Gurgaon.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-4">🏠 Residential</h3>
        <p className="text-gray-600">
          Interior design and decoration for apartments, villas, bungalows, and independent houses.
          End-to-end solutions for modular kitchens, wardrobes, living spaces, and more.
        </p>
      </div>

     
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-4">🏢 Commercial</h3>
        <p className="text-gray-600">
          Office interiors, retail stores, showrooms, cafés, restaurants, hotels, clinics, and hospitals—
          customized for branding and functionality.
        </p>
      </div>

      
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-4">🏨 Hospitality</h3>
        <p className="text-gray-600">
          Complete design services for lodges, resorts, guest houses, and boutique stays—
          blending luxury with guest experience.
        </p>
      </div>

    
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-4">🎓 Institutional</h3>
        <p className="text-gray-600">
          Interiors for schools, colleges, universities, libraries, museums, and historical societies—
          merging tradition with modern-day design functionality.
        </p>
      </div>
    </div>
  </div>
</section>

        </>,
    },

    {
      title: " Do you design interiors based on the latest interior design trends in Gurgaon & Delhi NCR? ",
      content: <>
       <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    
    
    <p className="text-lg mb-6 text-center">
      Yes, we absolutely design interiors based on the latest trends in Gurgaon & Delhi NCR.
    </p>
    
    <p className="text-gray-600">
      At Adhunik Decodive, staying updated with current interior design trends is not just a preference — it’s part of our design philosophy. We blend <strong>modern aesthetics with timeless elegance</strong>, creating interiors that are both stylish and deeply personal.
    </p>

    <p className="text-gray-600">
      Our expert team thoughtfully incorporates trending elements—whether it’s minimalist layouts, sustainable materials, or smart technology—<strong>without overwhelming the space</strong>. Every project is tailored to reflect your unique personality, lifestyle, and long-term vision.
    </p>

    <p className="text-gray-600">
      We focus on creating residential and commercial spaces that are not only trend-forward today but continue to feel fresh, functional, and loved for years to come.
    </p>
  </div>
</section>


      </>,
    },

    {
      title: "Is it possible to design my own home or office without the help of an interior designer?",
      content:
       <>
        <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
  
    
    <p className="text-lg mb-6 text-center">
      It is entirely possible to design your own space without hiring an interior designer.
    </p>
    
    <p className="text-gray-600">
      However, it’s important to recognize that creating a well-designed home or office requires considerable time, effort, and a set of specialized skills. While you may have a vision for your space, interior design goes beyond just style—it includes functionality, space planning, and the careful selection of materials.
    </p>

    <p className="text-gray-600">
      Hiring an interior designer offers several benefits:
    </p>

    <ul className="list-disc pl-6 text-gray-600">
      <li><strong>Avoiding costly mistakes:</strong> An experienced designer helps prevent common design errors that could lead to extra costs.</li>
      <li><strong>Saving time and money:</strong> With their expertise and industry connections, designers streamline the design process, making it more efficient and cost-effective.</li>
      <li><strong>Ensuring the best implementation of your vision:</strong> Interior designers bring your vision to life, ensuring every detail is executed to perfection.</li>
    </ul>
  </div>
</section>

       </>,
    },

    {
      title: "What is the pricing structure and payment process for your interior design services?",
      content:
       <>
       <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
   

    <p className="text-lg mb-6 text-center">
      Our fees are flexible and tailored to the size and nature of each project.
    </p>

    <p className="text-gray-600">
      We offer clear and affordable rates to ensure that you can make the best decision for your business or home. Before any work begins, we provide a comprehensive estimate that outlines the total cost of the project, along with a transparent breakdown of the payment schedule throughout the implementation process.
    </p>

    <p className="text-gray-600">
      This allows you to plan and manage your budget with confidence, knowing exactly what to expect at each stage.
    </p>
  </div>
</section>

       </>,
    },
    
    {
      title: "What is the typical turnaround time for your interior design projects?",
      content:
       <>
      <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
   

    <p className="text-lg mb-6 text-center">
      The turnaround time for each interior design project depends on its type, scale, and specific requirements.
    </p>

    <p className="text-gray-600">
      During the initial consultation, we assess the project scope and provide an estimated timeline for completion. We also keep you updated on any potential changes or delays throughout the process, ensuring full transparency from start to finish.
    </p>
  </div>
</section>


       </>,
    },
   
    {
      title: "Do you assist with sourcing furniture and home décor for interior design projects?",
      content:
       <>
  <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
   

    <p className="text-lg mb-6 text-center">
      Absolutely! We go beyond just design—we help you bring your space to life with the perfect furniture and decor.
    </p>

    <p className="text-gray-600">
      We have strong relationships with trusted local artisans, high-quality furniture makers, and décor suppliers. Our team ensures that every piece complements your interior vision while maintaining the highest standards of quality.
    </p>

    <p className="text-gray-600">
      Additionally, we operate a spacious 9,000 sq. ft. fabrication unit where we custom-build exclusive furniture and decor tailored specifically for your space, ensuring every element fits your style and needs perfectly.
    </p>
  </div>
</section>



       </>,
    },
   

    {
      title: "How do I get started with an interior design project with your team?",
      content:
       <>
 <section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
     

    <p className="text-lg mb-6 text-center">
      Getting started is easy! Schedule a <a href="/support-form" className="font-semibold text-blue-600">FREE CONSULTATION</a> with our expert interior designers.
    </p>

    <p className="text-gray-600">
      During this initial session, we’ll discuss your project goals, design preferences, budget, and any questions you may have. From there, our team will guide you through the entire process—ensuring a smooth, creative, and personalized interior design experience from concept to completion.
    </p>
  </div>
</section>


       </>,
    },
   

    {
      title: "What should I consider when choosing an interior design firm in Gurgaon?",
      content:
       <>
<section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    

    <p className="text-lg mb-6 text-center">
      Choosing an interior designer can be as simple or detailed as you prefer. Here are some key factors to guide your decision :
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-600">
      <li><strong>Experience & Expertise :</strong> Ensure the designer has a proven track record in handling similar projects.</li>
      <li><strong>Budget :</strong> Confirm that their pricing aligns with your financial plan and expectations.</li>
      <li><strong>Design Style & Tone :</strong> Their style should resonate with your personal taste and project goals.</li>
      <li><strong>Portfolio :</strong> Review past work to evaluate the quality and consistency of their designs.</li>
      <li><strong>Client Reviews :</strong> Read online testimonials and feedback to assess their reliability and professionalism.</li>
    </ul>

    <p className="mt-6 text-gray-600">
      Taking these factors into account will help you confidently select the right interior designer for your space in Gurgaon.
    </p>
  </div>
</section>



       </>,
    },
   

    {
      title: "What is the checklist before hiring an interior design company in Gurgaon?",
      content:
       <>
<section className="py-12 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
   

    <p className="text-lg mb-6 text-center">
      Consider the following essential factors before choosing an interior design company in Gurgaon :
    </p>

    <ul className="list-disc pl-6 space-y-3 text-gray-600">
      <li>
        <strong>Portfolio :</strong> Review their past projects and ensure they align with your design taste and style preferences.
      </li>
      <li>
        <strong>Experience :</strong> Choose a firm with proven expertise in luxury interiors or specialized requirements like home offices, spa bathrooms, or modular kitchens.
      </li>
      <li>
        <strong>Reputation :</strong> Read client reviews, ratings, and testimonials online to gauge their credibility and client satisfaction.
      </li>
      <li>
        <strong>Fees & Payment Structure :</strong> Be upfront about your budget. Understand their pricing, and clarify payment milestones and contract terms.
      </li>
      <li>
        <strong>Communication :</strong> Ensure the design team actively listens, understands your vision, and maintains clear, timely communication throughout the project.
      </li>
    </ul>

    <p className="mt-6 text-gray-600">
      Following this checklist will help you find a trustworthy and skilled interior design partner who can bring your dream space to life.
    </p>
  </div>
</section>


       </>,
    },
   




  ], []);


  const [activeIndex, setActiveIndex] = useState(null);

  const refs = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      refs.current = refs.current.slice(0, accordionData.length);
    }
  }, [accordionData]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (

    <>



      <PopUp/>

      <Helmet>

        <title>Best Luxury Interior Designers in Gurugram & Delhi NCR | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Looking for top interior designers in Gurgaon? Adhunik Decodive crafts luxurious, functional interiors tailored to your style. Discover modern elegance today." />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        
        <link rel="canonical" href="https://adhunikdecodive.com/" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Best Luxury Interior Designers in Gurgaon - Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="interior designers in gurugram ,interior designers in gurgaon, best home interior designers Gurugram, office interiors Gurugram, luxury interiors Gurugram, commercial interior designers Gurugram, interior design company in Gurugram, top interior decorators in Gurugram, home renovation Gurugram, modern interiors Gurugram, custom interior solutions Gurugram, interior designers in Gurgaon, best interior design services Gurgaon" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top interior design company for luxury home & office interiors. From concept to installation, we deliver bespoke, functional spaces. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Luxury Interior Designers in Gurugram | Premium Home & Office Interiors – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top interior design company for luxury home & office interiors. From concept to installation, we deliver bespoke, functional spaces. Free consultation!" />


        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>




      </Helmet>



      <div className="main w-full font-['Rejouice-Headline']">
        <div className="home section w-full h-screen relative" >
          <div className="w-full sticky top-0 left-0">
            <div className="btmtext absolute bottom-[7%] z-[4] w-52 left-[3%]">
              <h2>
                Luxury <br />
                Interior Visionary
                <br />
                Minimalist & Aesthetic
              </h2>
            </div>


            <div
              style={{ clipPath: "circle(100% at 50% 50%)" }}
              className="  z-[3] vdodiv w-full h-screen absolute top-0 left-0 bg-black overflow-hidden"
            >

             
              

              <video src="https://cdn.pixabay.com/video/2024/05/16/212213_large.mp4 " 
               autoPlay
                loop
                muted
                poster="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
                playsInline
                type="video/mp4"  className="object-cover object-center  w-screen h-screen"
></video>

            </div>


            <div className="marqueesContainer w-full h-screen relative overflow-hidden">
              <div className="heading absolute top-[7%] left-1/2 -translate-x-1/2">
                <h2 className="text-xl font-regular w-60 text-center">
                  Best Interior Designers in Gurgaon

                </h2>
              </div>

              <div className="slidesm w-[90%] scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="slidesm w-[90%] scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">


                  <div className="row lft -translate-x-1/4 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {kitchenCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                            <img

                             src={category.imgSrc}
                               
                              sizes="50px"
                            
                              loading="lazy"
                              className="object-cover h-12 w-12"
                              alt={category.name}
                             
                              decoding="async"
                            />

                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row rgt -translate-x-2/3 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {wardrobeCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          
                            <img
                             
                             src={category.imgSrc}

                              loading="lazy"

                              className="object-cover h-12 w-12"

                              alt={category.name}

                              decoding="async"
                            />

                          </div>

                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row lft -translate-x-1/4 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {lightingCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">

                          {category.name}

                        </h2>

                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">

                          <img
        src={category.imgSrc}
         loading="lazy"
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              
                              decoding="async"
                            />

                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row rgt -translate-x-2/3 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {decorCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          <img
        src={category.imgSrc}
         loading="lazy"
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              
                              decoding="async"
                            />

                          </div>
                        )}
                      </div>
                    ))}
                  </div>



                  <div className="row lft -translate-x-1/4 w-full flex items-center gap-3 md:gap-6 mt-2 whitespace-nowrap">
                    {furnitureCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                            <img
                              src={category.imgSrc}                            
                             
                              loading="lazy"
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              
                              decoding="async"
                            />

                          </div>
                        )}
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="h-full flex flex-col px-5 gap-6  justify-evenly items-center md:flex-row text-center p-5  m-4">

          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center  h-full ">
              <div>
                <div className="   ">
                  <div className=" w-auto">


                    <img loading="lazy" className=" h-auto w-auto border-2 rounded-2xl " src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746790416/indiaawards_k0es0f_e5zffp.webp"  decoding="async"
                    alt="Modular Kitchen Designs" />




                  </div>

                </div>


              </div>
            </div>
          </div>

          <div className="md:w-[40%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h1 className=" text-[6vw]  md:text-4xl mb-3  ">
            India Business Awards 2025 | Adhunik Decodive
            </h1>
            <p className=" text-justify md:text-center">
              Adhunik Decodive is honored to receive the India Business Awards 2025, recognizing our excellence in interior design and innovation. This prestigious award reaffirms our commitment to creating exceptional, functional, and luxurious spaces for our clients. We extend our gratitude to our team, partners, and customers for their continuous support in our journey towards design excellence.
            </p>

          </div>
        </div>


        <div className="w-full  h-full ">
          <div className="w-full h-full row flex flex-col md:flex-row mx-auto my-auto">
            <div
              className="lg:h-screen h-auto md:w-5/12 p-8 flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${t2})`,
                backgroundSize: "fill",
                backgroundPosition: "center",
                filter: "brightness(1)",
              }}
            >
              <h2 className="font-semibold text-5xl text-center mb-9">
                Explore The <span className="text-[#9f9f9f]">Art</span> of Decor
              </h2>
              <p className=" py-4 mx-auto  text-[1.7vh] xl:text-[2vh]   text-center w-[95%]">
                At Adhunik Decodive, our legacy is built on transforming spaces into breathtaking realities. With over 10 years of experience and a portfolio boasting 500+ delighted clients, our commitment to excellence shines through every project.
                <br />
                Our team of top interior designers in Gurgaon are passionate professionals dedicated to delivering extraordinary results within your budget. Whether it's a stylish business environment or a warm, inviting home, we bring an unmatched level of creativity and precision to every design.
                <br />
                
                Our vision at Adhunik Decodive is to be a leading interior designers  in Gurgaon and beyond. We strive for the highest standards in quality, creativity, beautiful designs, and practical functionality in every project we undertake.   </p>
              <div className="flex flex-col lg:flex-row justify-center mt-4">
                {/* Item 1 */}
                <div className="w-full lg:w-6/12 h-full flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
                  <div className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 mr-4">

                    <img
                     loading="lazy"
                       className="  w-full h-full object-cover text-black "
                        alt="DURABILITY
Lasting 10 Years" 
src={'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785960/durability_aynv6g_t4hvbu.webp'} />

                  </div>
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-semibold">DURABILITY</h2>
                    <p className="text-sm">Lasting 10 Years</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="  w-full lg:w-10/12 h-full flex items-center justify-center lg:justify-start">
                  <div className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 mr-4 lg:ml-7">

                    <img loading="lazy"   decoding="async"
                      
                       className="  w-full h-full object-cover"
                        alt="MODERN INTERIOR" 
                        src={'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785993/modern_t76wou_g4dil3.webp'} />

                  </div>
                  <div className="text-center lg:text-left ">
                    <h2 className="text-2xl font-semibold">MODERN INTERIOR</h2>
                    <p className="text-sm">Exclusive 10 Year Warranty</p>
                  </div>

                </div>
              </div>
              <div className="card p-9 flex">
                <Link
                  to="/AboutUs"
                  className=" justify-start bg-[#163C48] text-white text-1xl px-7 py-3 rounded-sm mt-5    "
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className=" h-[40vh] md:h-auto lg:h-screen md:w-7/12 z-0 ">
              <Swiper
                grabCursor={true}
                effect={"creative"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                speed={2000}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper3"
              >
                {imageIds.map((url, index) => (
                  <SwiperSlide key={index}>



                    <img
                     decoding="async"
                      key={index}
                      width='100%'
                      height='100%'
                      className=" w-full  object-cover object-left"
                    
                      loading="lazy"
                      alt={`Image ${index + 1}`}
                      src={url}
                    />
                  </SwiperSlide>

                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full h-auto ">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-5/12 p-4 lg:p-14 h-[40vh] hidden md:block md:h-screen">
              <div
                className=" mx-auto my-auto flex rounded_photo w-full h-full rounded-t-full border-double border-8 border-white"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(1)",
                }}
              >


                <div className="hidden md:flex row flex gap-10 relative content-end top-[89%] left-[15%] ">
                  <div className="w-6/12 h-10">
                    <div
                      className=" border  border-[#293C3C] h-[18vh] w-[10vw]  flex flex-col justify-center items-center  rounded-xl "
                      style={{
                        background:
                          "linear-gradient(177.9deg, rgba(200, 203, 226, 0.53) 3.6%, rgba(22, 60, 72, 0.72) 105.8%)",
                      }}
                    >

                      <img  decoding="async"
                         loading="lazy"
                        className=" h-11 w-11 mb-2" alt="Design inside imac using paint" src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785958/designk_ghb9u1_p0fozd.webp"} />

                      <h2 className=" text-center text-[3vw] lg:text-3xl  text-white">
                        Design
                      </h2>
                    </div>
                  </div>

                  <div className="w-6/12 h-10">
                    <div
                      className=" border  border-white h-[18vh] w-[10vw]  flex flex-col items-centerflex justify-center items-center rounded-xl"
                      style={{
                        background:
                          "linear-gradient(177.9deg, rgba(200, 203, 226, 0.53) 3.6%, rgba(22, 60, 72, 0.72) 105.8%)",
                      }}
                    >

                      <img  decoding="async"
                          loading="lazy"
                         className=" h-11 w-11 mb-2" alt="Build product and step up" src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785946/build_nz2i8p_ufoym1.webp"} />

                      <h2 className="  text-center text-[3vw] lg:text-3xl  text-white">
                        Build
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-7/12 h-full md:h-screen flex items-center justify-center">
              <div className="p-4 lg:p-10">
                <h2 className="text-4xl lg:text-5xl text-center mb-5">
                  Make Your Dream Space a Reality: <br /> Why Choose Us?
                </h2>

                {/* Features List */}
                <div className="space-y-6  w-full 2xl:w-[70%] xl:text-justify xl:mx-auto">
                  {/* Feature 1 */}

                  <div className="flex-col md:flex-row flex justify-center items-center">

                    <img   decoding="async"
                         loading="lazy"
                      className="h-12 w-12 " alt="Quality Design of home" src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785988/interior_vymssy_axnunl.webp"} />

                    <div className="  md:pl-5">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        Quality Design
                      </h2>
                      <p className="text-sm lg:text-base  text-gray-500">
                        We turn your vision and lifestyle into a beautiful space
                        you'll love, using premium materials and construction
                        methods.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex-col md:flex-row flex justify-center items-center">
                    <img  decoding="async"
                        loading="lazy"
                        className="h-12 w-12 " alt="Team of Experts , skilled designers bring expertise to every project"
                         src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785954/design_xotkss_ssaaef_c8gcsw.webp"} />


                    <div className=" md:pl-5">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        Team of Experts
                      </h2>
                      <p className="text-sm lg:text-base text-gray-500">
                        Our passionate and skilled designers bring expertise to
                        every project, creating a space that reflects your
                        unique style and needs.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex-col md:flex-row flex justify-center  items-center">
                    <img  decoding="async"
                        loading="lazy"
                        className="h-12 w-12 " alt="Expect clear communication" src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785949/com_uonsax_ou0dzc.webp"} />
                    <div className="md:pl-5 ">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        Professional Service
                      </h2>
                      <p className="text-sm lg:text-base text-gray-500">
                        Expect clear communication, thorough planning, and
                        timely execution every step of the way. We stick to your
                        budget and make your space transformation hassle-free.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex-col md:flex-row flex justify-center  items-center">
                    <img  decoding="async"
                       loading="lazy"
                       className="h-12 w-12 " alt="On-time Delivery" src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785951/delivery_euogle_nqyjga.webp"} />
                    <div className=" md:pl-5">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        On-time Delivery
                      </h2>
                      <p className="text-sm lg:text-base text-gray-500">
                        We promise on-time delivery within 6 weeks or less. Your
                        project is our priority, and we're committed to ensuring
                        timely completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="w-full h-full p-4 bg-zinc-100 overflow-hidden relative ">
          <div className="w-full text-center">
            <p className="text-4xl">
              Discover the Process <br /> Unveiling in 3 Simple Steps <br />
            </p>
            <p className="text-[#702b4f] mt-3">
              Unlock The Process For Your Ideal All Interior Design
            </p>
          </div>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
            {/* First Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                  <img  loading="lazy"
                     alt="make your interior style and space optimization using professional designers"   src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746616039/myh1ynmcgsmxmde8nwqy_ttfmha.webp" />



                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Show your style and space optimization
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Dream big for your space! Share your inspiration, goals, and
                    budget, and let us help you design a space you will adore.
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <div className="text-center">
                    <h2 className="bg-black w-auto  px-12 py-2 rounded-full text-1xl text-white inline-block p-2">
                      STEP 1
                    </h2>
                  </div>
                </div>

              </div>
            </div>

            {/* Second Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img   loading="lazy"
                     alt="Revitalize your interior kitchen space." 
                    src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785991/meeting2_qa5a1w_muck4u.avif"} />


                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Revitalize your space
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Your dedicated designer will collaborate with you
                    individually to transform your vision into reality,
                    delivering a comprehensive 3D rendering of your specific
                    space.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-center">
                    <h2 className="bg-black w-auto  px-12 py-2 rounded-full text-1xl text-white inline-block p-2">
                      STEP 2
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                  <img   loading="lazy"
                      alt="Get Professional Installation & Shop with Confidence" 
                   src={"https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"} />

                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Get Professional Installation & Shop with Confidence
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Browse and purchase designs effortlessly in one simple
                    transaction & enjoy exclusive discounts.
                  </p>

                </div>
                <div className="p-6 pt-0">
                  <div className="text-center">
                    <h2 className="bg-black w-auto  px-12 py-2 rounded-full text-1xl text-white inline-block p-2">
                      STEP 3
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className=" w-full h-full flex justify-center items-center py-5">
          <h2 className=" text-4xl text-center  font-extrabold  w-96  ">Best Interior Design Services  in Gurgaon
          </h2>
        </section>



        <div className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center  h-full ">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl   ">
                  <div className=" w-auto">
                    <div className=" w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <img loading="lazy" className=""   decoding="async"
                        src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746616038/mkcwo034pfiodziddr6z_orlgsq.webp"
                         alt="Modular Kitchen Designs" />

                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">
                      Kitchen Designs
                    </h2>
                    <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                      Style in Every Tile, Our Modular Kitchens Redefine your
                      Lifestyle
                    </p>
                    <Link
                      to="./modular-kitchen-designs"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className=" text-[6vw]  md:text-4xl mb-3 hidden md:block">
              Modular Kitchen Designs
            </h2>
            <p className=" text-justify md:text-center">
              Discover the perfect heart for your dream home in Gurgaon, where laughter, delicious food, and memories come alive. At Adhunik Decodive, our luxury modular kitchens transform your culinary dreams into reality with a curated selection of styles—from minimalist havens to elaborate masterpieces. Our modular kitchen designs in Gurgaon are crafted for beauty and functionality, featuring innovative, space-saving solutions that make cooking a joy. Personalize your custom modular kitchen to perfectly fit your unique needs, and experience the best in modern kitchen design. As one of the top interior designers in Gurugram, we bring premium quality, creative flair, and unparalleled workmanship to every project.
            </p>
            <div className="show_m mt-5">
              <Link
                to="./modular-kitchen-designs"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className="text-[6vw]  md:text-4xl mb-3 hidden md:block">
              Wardrobe Designs
            </h2>
            <p className=" text-justify md:text-center">
              Feeling overwhelmed by a cluttered closet in your Gurgaon home? Step into a world of calm with Adhunik Decodive’s premium wardrobe designs. Our exquisite wardrobe collection blends smart storage with timeless style, bringing both functionality and elegance into your space.

              Imagine effortless mornings with everything neatly organized—sparking joy each time you open the doors. Say goodbye to the mess and hello to stylish, space-saving wardrobes designed to fit your lifestyle. Whether you’re in Gurgaon or Gurugram, discover the perfect blend of luxury and practicality with one of the top interior designers in the region.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/wardrobes"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <img loading="lazy" 
                      src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746786006/wr_qfshhd_mjbnwm.webp"} 
                      
                       alt="Wardrobe Designs" />

                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-2xl md:text-3xl font-bold text-white">
                      Wardrobe Designs
                    </h2>
                    <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm pt-2">
                      Wardrobes that Elevate,Year After Year
                    </p>
                    <Link
                      to="/wardrobes"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative  rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">

                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <img
                      src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746616038/ckhkwnh3brr4o0k0b1iv_du6iqu.webp"
                        loading="lazy"
                        className="object-cover"
                        alt="pink and grey sofa and wooden table with glass Furniture"
                      />

                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">
                      Furniture
                    </h2>
                    <p className="mb-3 text-sm pt-2 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Step Up Your Space, It's Time to Groove with Trendy
                      Furniture
                    </p>
                    <Link
                      to="/furniture-categories"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className="text-[6vw]   md:text-4xl mb-3 hidden md:block">
              Furniture
            </h2>
            <p className=" text-justify md:text-center">
              Enhance your work-from-home experience in Gurgaon with Adhunik Decodive’s curated range of stylish and functional home office furniture. Discover ergonomic chairs, spacious desks, and smart storage solutions—each piece thoughtfully designed to boost your productivity and comfort.

              Whether you're creating a cozy corner or a full home office setup, our furniture combines modern aesthetics with everyday functionality. Build your perfect workspace with one of the top interior designers in Gurgaon and turn your home into a productivity powerhouse.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/furniture-categories"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className=" text-[6vw]  md:text-4xl mb-3 hidden md:block">Home Decor </h2>
            <p className=" text-justify md:text-center">
              Gurgaon home with Adhunik Decodive, Our handpicked collections of modern furniture, stylish lighting, and elegant décor capture the essence of contemporary design. From clean lines to bold accents, discover pieces that spark joy and elevate your interiors.

              Whether you're updating a room or transforming your entire space, our designs help you create a home that reflects your unique personality—effortlessly. Trust one of the top interior designers in Gurgaon to bring beauty, comfort, and style into every corner of your home.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/home-decors"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group  rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <img loading="lazy"  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746616038/dse47cfgiznpkyjfqcu8_fljods.webp" alt="Home Decor " />

                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">
                      Home Decor
                    </h2>
                    <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm pt-2">
                      Make Your Space Shine with Stunning Pieces that Inspire
                      You
                    </p>
                    <Link
                      to="/home-decors"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full" >
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-xl">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <img loading="lazy"
                      src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746786865/2_k9vhdt_hsp5ru.webp"}
                        
                        alt="TV Unit Panels" />


                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">

                      TV Unit Panels
                    </h2>
                    <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm pt-2">
                      Awaken the Style of Your Living Room with Sleek TV Panels
                    </p>
                    <Link
                      to="/storage-furniture"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className="text-[6vw]  md:text-4xl mb-3  hidden md:block"> TV Unit Panels</h2>
            <p className=" text-justify md:text-center">

              Level up your living rooms ambiance with Adhunik Decodive stunning TV unit panels in Gurgaon. More than just furniture, our TV units are statement pieces that set the tone for your entire space.

              Whether you love a sleek modern look, a warm rustic feel, or something uniquely yours, our wide range of finishes and customizable configurations let you design a TV area that reflects your personal style.

              Make your living room speak volumes about your taste with one of the top interior designers in Gurgaon — where every detail is crafted for beauty, function, and flair.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/storage-furniture"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
        </div>


        <div className="row h-full w-full px-5 py-5 bg-[#F3F4F6] ">

          <div className=" py-4 inline-flex items-center justify-center w-full mx-auto md:mt-0  my-7 md:mb-0">
            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
            <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-[#F3F4F6] left-1/2  text-center text-[20px]  md:text-4xl text-1xl capitalize font-semibold ">                  Testimonials
            </h2>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 3500,
              speed: 2800,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              888: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper z-0"
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index} className="p-4 rounded-lg">
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <div className="row h-14 w-14">
                      <img
                        decoding="async"
                        loading="lazy"
                       
                        className=" w-full h-full object-cover object-center"
                        alt={slide.name}
                        src={slide.image}
                      />
                    </div>
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="block  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {slide.name}
                        </h5>
                        {/* Rating icons can be added dynamically */}
                        <div className="flex items-center gap-0 5 text-[#FBBF2C]">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-start block  text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        {slide.position}
                      </p>
                    </div>
                  </div>
                  <div className="p-0 mb-6">
                    <p className="block  text-base text-justify antialiased font-light leading-relaxed text-inherit">
                      {slide.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

<div className="row">
     <section>
          <div className="row  py-6">
            <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

              <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

              <h2 className="absolute text-3xl px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > OUR CLIENTS
              </h2>

            </div>
            <style jsx>{`
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-infinite-scroll {
    animation: infinite-scroll 15s linear infinite;
  }
`}</style>

            <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {[...Array(2)].map((_, index) => (
                <ul
                  key={index}
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  aria-hidden={index === 1 ? 'true' : 'false'}
                >
                  {logos.map((image, index) => (
                    <li key={index}>
                      <img loading='lazy' 
                      src={image.src}
                       className=' object-center  object-cover'
                        width={image.width}
                         height={image.height}
                         alt={image.alt} />
                    </li>
                  ))}
                </ul>
              ))}

            </div>


          </div>
        </section>

</div>

        <aside aria-label="Related Blogs" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related Blogs</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {blogPosts.map((post) => (
                <article key={post.id} className="max-w-xs">
                  <div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="mb-5 rounded-lg w-full h-56 object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">{post.description}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    {post.date}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </aside>

        <div className="row">


          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-1 gap-4 md:gap-8 xl:gap-20 md:items-center pb-16">


              <div>
                <h2 className="mt-3 text-5xl  text-center  font-bold text-gray-800 dark:text-neutral-400"> FAQ's

                </h2>
                <div className="container mx-auto mt-8 mb-10">
                  {accordionData.map((item, index) => (
                    <div
                      className="border-[#F6F6F8] mb-4 rounded border"
                      key={index}
                    >
                      <div
                        className=" font-medium text-[14px] accordion-header bg-[#F6F6F8] cursor-pointer px-4 py-2 flex justify-between items-center"
                        onClick={() => handleClick(index)}
                      >
                        {item.title}
                        <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            {activeIndex === index ? (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            )}
                          </svg>
                        </span>
                      </div>
                      <div
                        ref={(el) => (refs.current[index] = el)}
                        className={` font-medium text-[13px] text-justify accordion-content overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                          }`}
                        style={{
                          height: activeIndex === index ? `${refs.current[index]?.scrollHeight}px` : '0px',
                        }}
                      >
                        <div className="px-4 pb-4 pt-2">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>


              {showModal ? (
                <>
                  <div
                    className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    onClick={closeModal}
                  >
                    <div
                      className="relative  my-6    container-fluid "
                      onClick={(e) => e.stopPropagation()}
                    >

                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="relative  flex-auto">

                          <iframe className="responsive-iframe" width="860" height="515" src="https://www.youtube.com/embed/jtizPl_Y744?si=oWwFcUq_IwXZgvjD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}


            </div>

          </div>

        </div>



      </div>




    </>
  );
}

export default LandingPage;
