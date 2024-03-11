"use client";
import {Opportunities,columns} from './columns'
import {DataTable} from '@/components/data-table'


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
    const data=await getData()

    return(
        <body className="w-screen h-screen m-0 p-0">
            <div className="flex flex-col  items-center w-screen">
            <div className="h-40 w-screen bg-purple-950 flex items-center justify-center text-white" ><h1 className="text-white text-8xl font-extrabold font-namdhinggo" style={{letterSpacing:"5px"}}>HIRING</h1></div>          
                <div className="flex justify-center mt-2 flex-wrap">
                <svg className="h-4 w-4 md:w-8 md:h-8 text-purple-400 dark:text-gray-600  rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
                <h1 className="text-2xl md:text-4xl font-bold font-namdhinggo text-purple-900 mx-3">OPPORTUNITY MATRIX</h1>
                <svg className="w-4 h-4 md:h-8 md:w-8 text-purple-400  dark:text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
                </div>
                <p className="font-medium text-l font-namdhinggo md:text-xl text-slate-700 mb-1">Navigate your Career Journey with our Job Table</p>
                <div className="w-96 h-0.5  bg-purple-900 rounded-xl"></div>
                <div className="container mx-auto py-2 m-4">
      <DataTable columns={columns} data={data} />
            </div>
            <div className="h-0.5  bg-purple-900 rounded-xl mx-20 px-20" style={{width:"75%"}}></div>
        <div className="flex flex-col flex-wrap items-center mt-1">
            <h1 className="text-3xl font-bold font-namdhinggo text-purple-900 mb-3">Job Opportunities</h1>
            <p className="text-purple-800 mx-10 px-20 text-center font-medium pb-8 text-0.75xl" style={{lineHeight:"40px"}}>The table presents a comprehensive overview of job opportunities spanning various industries and sectors. It outlines positions ranging from entry-level roles to senior management positions, catering to diverse skill sets and qualifications. Each job listing includes essential details such as job title, company name,package  and qualifications required, enabling individuals to make informed career decisions. With a wide array of options showcased, the table serves as a valuable resource for job seekers seeking meaningful employment opportunities.</p>
        </div>
        <div className="h-40 w-screen bg-purple-900"></div>
            </div>           
        </body>
        
    )
}