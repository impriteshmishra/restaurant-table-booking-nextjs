"use client"


import { useRouter } from 'next/router'
import React from 'react'
import Form from './form/page';

function page() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={(e) => {
          router.push("/Form")
        }}>
        Click
      </button>
      <Form />
    </div>
  )
}

export default page
