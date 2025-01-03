"use client"

import Image from "next/image"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"



function page() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 justify-evenly items-center mt-10">
        <Button className="w-36 h-14 font-semibold hover:bg-blue-100" variant="outline" 
         onClick={(e)=>{
          router.push("/form")
         }}
        >Create Booking</Button>
        <Button className="w-42 h-14 font-semibold hover:bg-blue-100" variant="outline">Show Available Booking</Button>
        <Button className="w-36 h-14 font-semibold hover:bg-blue-100" variant="outline">Delete Booking</Button>

      </div>
    </>
  )
}

export default page
