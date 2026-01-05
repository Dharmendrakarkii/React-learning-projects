import ThinBar from "@/components/thin-bar/page";
import UserCard from "@/components/user-card/page";
import { Contact, Ellipsis, Images, MenuIcon, MessageCircleCode, PhoneCall, Settings, Users, Users2Icon } from "lucide-react";
import React from "react";

const chat = () => {
  return (

<div> <ThinBar/>

    <div className=" flex h-screen">
      < div className="bg-pink-200  rouned-200 w-[5%]">
        <div className="flex flex-col items-center mt-4 space-y-6">
         <input placeholder='Search your friends'/>
         <UserCard/>


        </div>
        <div className='bg-green-400 w-[63%]'>a</div>

    
    
      </div>
    
    </div>
    </div>
  )
}


export default chat;