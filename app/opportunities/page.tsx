"use client";
import {Opportunities,columns} from './columns'
import {DataTable} from '@/components/data-table'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React,{ useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

async function getData(): Promise<Opportunities[]> {
    const oppdata=[
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
            
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        },
        {
            opportunity: "Microsoft",
            startDate: "21/04/2024",
            endDate: "25/04/2024",
            role: "SDE Intern",
            package:"6-7 LPA",
            eligibility:"2025-Passout",
            action:"https://google.com"
        }
    ]
    return oppdata
}

export default async function Opportunites(){
    
    useEffect(()=>{
        let ctx=gsap.context(()=>{
        const textWrapper=document.querySelectorAll(".navbar")
        const head=document.querySelectorAll(".opp")
        const p=document.querySelectorAll(".para")
        const q1=document.querySelectorAll(".quotes1")
        const q2=document.querySelectorAll(".quotes2")
        const h2=document.querySelectorAll(".h2")
        const p2=document.querySelectorAll(".p2")
        const ul=document.querySelectorAll(".ul")
        const job=document.querySelectorAll(".job")
        const a=document.querySelectorAll(".a")
        const b=document.querySelectorAll(".b")
        const c=document.querySelectorAll(".c")
        const d=document.querySelectorAll(".d")
        const pinTrigger=ScrollTrigger.create({
            trigger:".content-wrapper",
            pin:true,
            start:"top -25%",
            end:"top -20%",
        });
        const pinTrigger2=ScrollTrigger.create({
            trigger:".content-wrapper",
            pin:true,
            start:"top -90%",
            end:"top -80%",
            //markers:true,
            
        });

    let tl=gsap.timeline();
    let t2=gsap.timeline();
    tl.to(textWrapper,{
        backgroundColor:"rgb(88 28 135)",
        opacity:0.9,
        duration:1,
        height:"4rem",
        scrollTrigger:{
        start:()=>pinTrigger?.start,
        end:()=>pinTrigger?.end,        
        scrub:2,

    }
    })
    let t3=gsap.timeline();
    t3.from([job,p2],{
        y:20,
        opacity:0,
        stagger:1,
        duration:1,
        scrollTrigger:{
        start:()=>pinTrigger2?.start,
        end:()=>pinTrigger2?.end,        
        scrub:2,
        
    }
    })
    gsap.from([a,b,c,d],{
        opacity:0,
        y:40,
        duration:1,
        stagger:0.5,
        scrub:true,
    })
    t2.from([head,p],{
        opacity:0,
        duration:1,
        y:52,
        delay:0.5,
        stagger:0.5,

    })
    gsap.from([h2,ul],{
        opacity:0,
        duration:1,
        y:20,
        stagger:0.3,
        
    })
    gsap.from(q1,{
        duration:1,
        x:-10,
        delay:2,
    })
    gsap.from(q2,{
        duration:1,
        x:10,
        delay:2,
    })
        return()=>{
            pinTrigger?.kill();
            tl.kill();
        }
    })
    return()=>ctx.revert();
    },[]);
    const data=await getData()
    return(
        
        <body className="content-wrapper">
            <div className="w-screen h-80 bg-purple-900" >
            <nav className=" navbar flex justify-between h-12 w-screen p-3 pr-8 fixed z-99 font-namdhinggo"style={{borderBottom:"1px solid white"}}>
                <h2 className="h2 *:first-letter:text-xl md:text-2xl font-bold text-white md:pl-8">AISSMS<span className="text-red-700 ml-1">COE</span></h2>
           <ul className="ul flex gap-10 md:text-xl text-white hover:cursor"><a className="hover:cursor" href="#"><li>Home</li></a>
           <li><a className="hover:cursor" href="#">Resources</a></li>
           <li><a className="hover:cursor"href="#">Opportunities</a></li>
           <li><a className="hover:cursor"href="#">Events</a></li>
           </ul>
            </nav>
            <div className="clip flex justify-center align-middle">
            <img className="a hidden md:inline-block h-96 pl-10 pt-6"src="/images/1.png"></img>
            <img className="b hidden xl:inline-block h-96 pl-10 pt-2"src="/images/1_5.png"></img>
            <img className="c h-96 p-2 " src="/images/3.png"></img>
            <img className="d hidden lg:inline-block h-96 pb-5" src="/images/2_5.png"></img>
            </div>
           
            </div>
            <div className="flex flex-col  items-center w-screen bg-white">
                      
                <div className="flex justify-center mt-2 flex-wrap">
                <svg className="quotes1 h-4 w-4 md:w-8 md:h-8 text-purple-400 dark:text-gray-600  rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
                <h1 className=" opp text-2xl md:text-4xl font-bold font-namdhinggo text-purple-900 mx-3">OPPORTUNITY MATRIX</h1>
                <svg className=" quotes2 w-4 h-4 md:h-8 md:w-8 text-purple-400  dark:text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
                </div>
                <p className="para font-medium text-l font-namdhinggo md:text-xl text-slate-700 mb-1">Navigate your Career Journey with our Job Table</p>
                <div className="w-96 h-0.5  bg-purple-900 rounded-xl"></div>
                <div className="container mx-auto py-2 m-4">
      <DataTable columns={columns} data={data} />
            </div>
            <div className="h-0.5  bg-purple-900 rounded-xl mx-20 px-20" style={{width:"75%"}}></div>
        <div className="flex flex-col flex-wrap items-center mt-1">
            <h1 className="job text-3xl font-bold font-namdhinggo text-purple-900 mb-3">Job Opportunities</h1>
            <p className="text-purple-800 mx-10 px-20 text-center font-medium pb-8 text-0.75xl" style={{lineHeight:"40px"}}>The table presents a comprehensive overview of job opportunities spanning various industries and sectors. It outlines positions ranging from entry-level roles to senior management positions, catering to diverse skill sets and qualifications. Each job listing includes essential details such as job title, company name,package  and qualifications required, enabling individuals to make informed career decisions. With a wide array of options showcased, the table serves as a valuable resource for job seekers seeking meaningful employment opportunities.</p>
        </div>
        <div className="h-40 w-screen bg-purple-900"></div>
            </div>           
        </body>
        
    )
}