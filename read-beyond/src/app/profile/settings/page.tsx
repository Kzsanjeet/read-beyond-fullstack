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
import "@/app/specificcss/buttonHover.css"

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
            <div className='w-[900px] rounded-sm bg-gray-100'>
              <div className='w-full flex flex-col'>
                <h1 className='text-2xl ml-80 pt-5 mx-10 text-green-700 font-bold'>General Settings</h1>
                <div className='flex justify-center'>
                    <div className='w-2/4 h-full ml-5 flex align  mt-24 flex-col'>
                    <form action="" className=''>
                        <label>
                            <input type="text" placeholder="Name" className='w-full h-[40px] pl-2 border-black mt-2 mb-2 ml-2 rounded-md' />
                        </label>
                        <label>
                            <input type="email" placeholder="Email" className='w-full h-[40px] pl-2 border-black mt-2 mb-2 ml-2 rounded-md' />
                        </label>
                        <Select>
                            <SelectTrigger className="w-full ml-2 mb-4 mt-2">
                            <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="light">Nepali</SelectItem>
                            <SelectItem value="dark">English</SelectItem>
                            <SelectItem value="system">Chinese</SelectItem>
                            <SelectItem value="system">Spanish</SelectItem>
                            <SelectItem value="system">Dutch</SelectItem>
                            <SelectItem value="system">Portugues</SelectItem>
                            <SelectItem value="system">Hindi</SelectItem>
                            </SelectContent>
                        </Select>
                    </form>
                    <button className='bg-green-600 ml-2 w-full h-[40px] rounded-md text-white' id='accBtn'>Save Changes</button>
                    </div>
                    <div className='w-1/2 h-full'>
                        <img src="/images/genralsetting.png" alt="Privacy illustration" />
                    </div>
              </div>
            </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy">
            <div className='w-[900px] bg-slate-100 rounded-sm p-6'>
                <div className='mb-6 flex justify-center'>
                <h1 className='text-2xl text-blue-700 font-bold'>Privacy Settings</h1>
                </div>

                {/* Profile Privacy */}
                <div className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Profile Privacy</h2>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" id="privateProfile" className='mr-2' />
                    <label htmlFor="privateProfile">Make profile private</label>
                </div>
                <div className='flex items-center'>
                    <input type="checkbox" id="allowIndexing" className='mr-2' />
                    <label htmlFor="allowIndexing">Allow search engines to index my profile</label>
                </div>
                </div>

                {/* Change Password */}
                <div className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Change Password</h2>
                <div className='mb-2'>
                    <input type="password" placeholder='Current Password' className='w-full h-[40px] pl-2 border border-gray-300 rounded-md mb-2' />
                </div>
                <div className='mb-4'>
                    <input type="password" placeholder='New Password' className='w-full h-[40px] pl-2 border border-gray-300 rounded-md' />
                </div>
                <button className='text-white px-4 py-2 rounded-md' id='changeBtn'>Change Password</button>
                </div>

                {/* Two-Factor Authentication */}
                <div className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Two-Factor Authentication</h2>
                <div className='flex items-center'>
                    <input type="checkbox" id="enable2FA" className='mr-2' />
                    <label htmlFor="enable2FA">Enable 2FA</label>
                </div>
                </div>

                {/* Email Notification */}
                <div className='mb-6'>
                <h2 className='text-xl font-semibold mb-2'>Email Notification</h2>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" id="emailNotification" className='mr-2' />
                    <label htmlFor="emailNotification">Enable Email Notification</label>
                </div>
                <div className='flex items-center'>
                    <input type="checkbox" id="systemUpdates" className='mr-2' />
                    <label htmlFor="systemUpdates">Receive updates about system changes</label>
                </div>
                </div>

                <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600' id='privBtn'>Save Changes</button>
            </div>
        </TabsContent>

        <TabsContent value="delete">
            <div className='w-[900px] bg-slate-100 rounded-sm p-6'>
                <div className='mb-6 flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-red-600 font-bold mb-2'>Delete Account</h1>
                <p className='text-gray-700'>
                    This action is <span className='font-semibold'>irreversible</span>. Once you delete your account, all your data will be permanently removed. Please proceed with caution.
                </p>
                </div>
                <div className='mt-8'>
                <button className='bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700' id='delBtn'>
                    Delete Account
                </button>
                </div>
            </div>
        </TabsContent>
        <TabsContent value="logout">
            <div className='w-[900px] bg-slate-100 rounded-sm p-4'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl m-4 text-red-900'>Logout</h1>
                    <p>Are you sure you want to log out?</p>
                </div>
                <div>
                    <button className='bg-red-600 text-white px-4 py-2 rounded mt-4' id='logoutBtn'>Logout</button>
                </div>
            </div>
        </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default Page;
