"use client";
import { ColumnDef } from "@tanstack/react-table"
import Link from 'next/link'
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Opportunities = {
  opportunity: string
  startDate: string
  endDate: string
  role: string
  package:string
  eligibility:string
    action:string
}

export const columns: ColumnDef<Opportunities>[] = [
  {
    accessorKey: "opportunity",
    header: "Opportunity",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "package",
    header: "Package",
  },
  {
    accessorKey: "eligibility",
    header: "Eligibility",
  },
  {
    accessorKey: "action",
    header: "Action",
     cell: ({ row }) => {
         const dlink = String(row.getValue("action"));       
        return <div className="text-center font-medium bg-purple-700 p-2 rounded-xl text-white hover:bg-white hover:text-purple-800"><Link href={dlink}>Apply Now</Link></div>
      }
  }
  
]
