import React from 'react'
import {

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function Confirmation({ name, date, time, guests, contact}) {
  return (
    <div>
      <Dialog>
        <DialogTrigger className='bg-gray-100 p-5 rounded-lg flex flex-col items-center mx-24'>
          <h1 className='font-bold'>Booking Successful! </h1>
          <p>Click to show Confirmation.</p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Congratulation! Your booking Successfull</DialogTitle>
            <DialogDescription>
              <p className='font-semibold'>Information about booking.</p>
              <ul className="list-inside list-disc mt-4">

                <li className='font-semibold text-black'> Date: {date}</li>
                <li className='font-semibold text-black'>Time: {time}</li>

                <li className='font-semibold text-black'>Name: {name}</li>
                <li className='font-semibold text-black'>Guest: {guests}</li>
                <li className='font-semibold text-black'>Contact: {contact}</li>
                
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Confirmation
