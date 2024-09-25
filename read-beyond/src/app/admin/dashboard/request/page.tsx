"use client"

import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <div className='flex w-screen h-screen'>
      {/* Sidebar */}
      <div className="sideMenu w-64 bg-blue-800 text-white p-6 h-full flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Super Dashboard</h1>
          </div>
          {/* Horizontal Separator */}
          <Separator orientation="horizontal" className="my-4 bg-gray-400 h-[1px]" />

          <div className="space-y-4">
            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>🏠</span>
              <h2>Dashboard</h2>
            </div>

            <Link href="/admin/dashboard/request">
              <div className="flex items-center space-x-2 bg-blue-700 p-2 rounded-md cursor-pointer">
                <span><MdEmail className='h-2 w-4'/></span>
                <h2 className='pl-1'>Request</h2>
              </div>
            </Link>

            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>👤</span>
              <h2>Users</h2>
            </div>

            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>🏢</span>
              <h2>Providers</h2>
            </div>

            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>📢</span>
              <h2>Ads</h2>
            </div>

            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>💬</span>
              <h2>Feedbacks</h2>
            </div>

            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>💰</span>
              <h2>Revenue</h2>
            </div>

            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              <span>⚙️</span>
              <h2>Settings</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Table>
            <TableCaption className="text-lg font-semibold text-gray-700 mb-4">A list of top course providers</TableCaption>
            <TableHeader>
              <TableRow className="bg-blue-50 text-left">
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Ratings</TableHead>
                <TableHead className="text-right">Total Students</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-blue-50">
                <TableCell className="font-medium">Coursera</TableCell>
                <TableCell>Data Analytics</TableCell>
                <TableCell>4.8</TableCell>
                <TableCell className="text-right">250</TableCell>
              </TableRow>
              <TableRow className="hover:bg-blue-50">
                <TableCell className="font-medium">Google</TableCell>
                <TableCell>Data Science</TableCell>
                <TableCell>4.0</TableCell>
                <TableCell className="text-right">200</TableCell>
              </TableRow>
              <TableRow className="hover:bg-blue-50">
                <TableCell className="font-medium">Meta</TableCell>
                <TableCell>MERN</TableCell>
                <TableCell>4.5</TableCell>
                <TableCell className="text-right">210</TableCell>
              </TableRow>
              <TableRow className="hover:bg-blue-50">
                <TableCell className="font-medium">Sanjeet</TableCell>
                <TableCell>Data Visualization</TableCell>
                <TableCell>4.9</TableCell>
                <TableCell className="text-right">500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default page;
