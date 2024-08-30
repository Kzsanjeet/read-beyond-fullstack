// import React from 'react'
// import { RiListSettingsFill } from "react-icons/ri";
// import { MdPrivacyTip } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
// import { IoLogOut } from "react-icons/io5";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
// import {
//     Tabs, TabsList, TabsTrigger, TabsContent
// } from "@/components/ui/tabs"
// import ProfileNav from '@/app/pComponent/ProfileNav'


// const page = () => {
//   return (
//     <div>
//         <ProfileNav/>
//         <div className='flex justify-center mt-5'>
//             <Tabs defaultValue="account" className="">
//                 <TabsList className='w-[900px]'>
//                     <TabsTrigger value="account" className='text-green-700 flex gap-2'><span><RiListSettingsFill /></span> General</TabsTrigger>
//                     <TabsTrigger value="privacy" className='text-blue-700 flex gap-2'><span><MdPrivacyTip /></span>Privacy</TabsTrigger>
//                     <TabsTrigger value="delete" className='text-red-600 flex gap-2'><span><MdDeleteForever /></span>Acoount Delete</TabsTrigger>
//                     <TabsTrigger value="logout" className='text-red-900 flex gap-2'><span><IoLogOut /></span>Logout</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="account">
//                     <div className='w-[900px] bg-slate-100 rounded-sm flex '>
//                         <div>
//                             <h1 className='text-2xl m-4'>General Settings</h1>
//                             <form action="" className='flex flex-col'>
//                                 <label htmlFor="">
//                                     <input type="text" name="" id="" placeholder="Name" className='w-1/2 h-[40px] pl-2 border-black mt-2 mb-2 ml-2 rounded-md'/>
//                                 </label>
//                                 <label htmlFor="">
//                                     <input type="email" name="" id="" placeholder="Email" className='w-1/2 h-[40px] pl-2 border-black mt-2 mb-2 ml-2 rounded-md'/>
//                                 </label>
//                                 <Select>
//                                     <SelectTrigger className="w-1/2 ml-2 mb-4 mt-2">
//                                         <SelectValue placeholder="Theme" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="light">Light</SelectItem>
//                                         <SelectItem value="dark">Dark</SelectItem>
//                                         <SelectItem value="system">System</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </form>    
//                         </div>
//                         <div className='w-[400px]'>
//                             <img src="/images/priv.png" alt="" />
//                         </div>
//                     </div>
//                 </TabsContent>
//                 <TabsContent value="password">Change your password here.</TabsContent>
//             </Tabs>
//         </div>      
//     </div>
//   )
// }

// export default page

import React from 'react';
import { RiListSettingsFill } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs, TabsList, TabsTrigger, TabsContent
} from "@/components/ui/tabs";
import ProfileNav from '@/app/pComponent/ProfileNav';

const Page = () => {
  return (
    <div>
      <ProfileNav />
      <div className='flex justify-center mt-5'>
        <Tabs defaultValue="account" className="">
          <TabsList className='w-[900px]'>
            <TabsTrigger value="account" className='text-green-700 flex gap-2'>
              <span><RiListSettingsFill /></span> General
            </TabsTrigger>
            <TabsTrigger value="privacy" className='text-blue-700 flex gap-2'>
              <span><MdPrivacyTip /></span> Privacy
            </TabsTrigger>
            <TabsTrigger value="delete" className='text-red-600 flex gap-2'>
              <span><MdDeleteForever /></span> Account Delete
            </TabsTrigger>
            <TabsTrigger value="logout" className='text-red-900 flex gap-2'>
              <span><IoLogOut /></span> Logout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <div className='w-[900px] bg-slate-100 rounded-sm flex'>
              <div>
                <h1 className='text-2xl m-4'>General Settings</h1>
                <form action="" className='flex flex-col'>
                  <label>
                    <input type="text" placeholder="Name" className='w-1/2 h-[40px] pl-2 border-black mt-2 mb-2 ml-2 rounded-md' />
                  </label>
                  <label>
                    <input type="email" placeholder="Email" className='w-1/2 h-[40px] pl-2 border-black mt-2 mb-2 ml-2 rounded-md' />
                  </label>
                  <Select>
                    <SelectTrigger className="w-1/2 ml-2 mb-4 mt-2">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </form>
              </div>
              <div className='w-[400px]'>
                <img src="/images/priv.png" alt="Privacy illustration" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy">
            <div className='w-[900px] bg-slate-100 rounded-sm p-4'>
              <h1 className='text-2xl m-4'>Privacy Settings</h1>
              <p>Configure your privacy settings here.</p>
            </div>
          </TabsContent>

          <TabsContent value="delete">
            <div className='w-[900px] bg-slate-100 rounded-sm p-4'>
              <h1 className='text-2xl m-4'>Delete Account</h1>
              <p>This action is irreversible. Please proceed with caution.</p>
            </div>
          </TabsContent>

          <TabsContent value="logout">
            <div className='w-[900px] bg-slate-100 rounded-sm p-4'>
              <h1 className='text-2xl m-4'>Logout</h1>
              <p>Are you sure you want to log out?</p>
              <button className='bg-red-600 text-white px-4 py-2 rounded mt-4'>Logout</button>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default Page;
