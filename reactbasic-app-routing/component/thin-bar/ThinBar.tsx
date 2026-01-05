import { Contact, Ellipsis, Images, MenuIcon, MessageCircleCode, PhoneCall, Settings, User, Users, Users2Icon } from "lucide-react";

import React from 'react'

const ThinBar = () => {
  return (
    < div className=" flex h-screen">
          <div className="bg-black-100  rouned-200 w-[5%]">
            <div className="flex flex-col items-center mt-4 space-y-6">
              <div><MessageCircleCode/></div>
              <div><Contact/></div>
              <div><PhoneCall/></div>
              <div><Images/></div>
              <div><Settings/></div>
              <div><Users2Icon/></div>
      
          </div>
          </div>
          </div>
  )
}

export default ThinBar
 