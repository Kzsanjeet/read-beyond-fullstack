"use client"

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AdminChart } from '@/app/pComponent/AdminChart';
import { PiStudentFill } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Separator } from '@radix-ui/react-separator';
import { MdEmail } from "react-icons/md";
import Link from 'next/link';


const page = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="sideMenu w-64 bg-blue-800 text-white p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Super Dashboard</h1>
        </div>
          {/* Horizontal Separator */}
          <Separator orientation="horizontal" className="my-4 bg-gray-300 h-[2px]" />
        <div className="space-y-4">
          <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
            <span>🏠</span>
            <h2>Dashboard</h2>
          </div>
          
          <Link href="/admin/dashboard/request">
            <div className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md cursor-pointer">
                <span><MdEmail className='h-4 w-4'/></span>
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

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-white p-4 shadow-md mb-6 rounded-lg">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-right">
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
          </div>
        </nav>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-red-300 p-4 rounded-lg shadow-md flex items-center space-x-4">
            {/* <img src="student" alt="" className="w-12 h-12" /> */}
            <PiStudentFill className='h-7 w-7'/>
            <div>
              <p className="text-sm text-black">Number of Students</p>
              <p className="text-xl font-bold">100</p>
            </div>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <GrUserManager className='h-7 w-7'/>
            <div>
              <p className="text-sm text-gray-600">Number of Providers</p>
              <p className="text-xl font-bold">50</p>
            </div>
          </div>
          <div className="bg-blue-300 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FiBookOpen className='h-7 w-7'/>
            <div>
              <p className="text-sm text-gray-600">Number of Courses</p>
              <p className="text-xl font-bold">75</p>
            </div>
          </div>
          <div className="bg-green-300 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <RiMoneyDollarCircleLine className='h-7 w-7'/>
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-xl font-bold">$50,000</p>
            </div>
          </div>
        </div>

        {/* Chart & Table Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AdminChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Table>
              <TableCaption>A list of top course providers.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Ratings</TableHead>
                  <TableHead className="text-right">Total Students</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Coursera</TableCell>
                  <TableCell>Data Analytics</TableCell>
                  <TableCell>4.8</TableCell>
                  <TableCell className="text-right">250</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Google</TableCell>
                  <TableCell>Data Science</TableCell>
                  <TableCell>4.0</TableCell>
                  <TableCell className="text-right">200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Meta</TableCell>
                  <TableCell>MERN</TableCell>
                  <TableCell>4.5</TableCell>
                  <TableCell className="text-right">210</TableCell>
                </TableRow>
                <TableRow>
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
    </div>
  );
}

export default page;
