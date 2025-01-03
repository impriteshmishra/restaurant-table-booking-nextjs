"use client"


// import Navbar from "./components/Navbar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"



function page() {
  const router = useRouter();
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col md:flex-row gap-10 justify-evenly items-center mt-10">
        <div className=" bg-gray-100 w-56 gap-4 p-5 flex flex-col items-center  justify-between rounded-md">
          <div class="text-center">
            <p class=" font-semibold">Make your booking here</p>
          </div>

          <Button className="text-center text-white bg-blue-500 font-semibold hover:border-blue-200 hover:text-black" variant="outline"
            onClick={(e) => {
              router.push("/form")
            }}
          >Click</Button>
        </div>
        <div className=" bg-gray-100 p-5 gap-4 w-52 flex flex-col items-center  justify-between rounded-md">
          <div class="text-center">
            <p class=" font-semibold">Recent Booking</p>
          </div>

          <Button 
           onClick={(e) => {
            router.push("/recent")
          }} className="text-center text-white bg-blue-500 font-semibold hover:border-blue-200 hover:text-black" variant="outline">Click</Button>
        </div>

        

      </div>
    </>
  )
}

export default page
