"use client"

import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import ConfirmationPdf from '../components/ConfirmationPdf';
// import form from './form'

function Page() {
  return (
    
      <PDFViewer className="w-full h-screen">
            <ConfirmationPdf
           formData= {formData}
            
            />
          </PDFViewer>
    
  )
}

export default Page;

