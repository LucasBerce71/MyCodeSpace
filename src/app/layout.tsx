"use client";
import '../styles/global.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React, { useState } from 'react';
import { Menu } from '@/components/Menu'
import { Header } from '@/components/Header'
import { Explorer } from '@/components/Explorer'
import { Footer } from '@/components/Footer'
import { WelcomeModal } from '@/components/WelcomeModal'

export const metadata = {
  title: {
    default: 'Lucas Bercê de Jesus',
    template: '%s | Lucas Bercê de Jesus'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Front-end Engineer at @AP INTERACTIVE",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function handleAcceptTerms() {
    setAcceptedTerms(true);
  };

  function handleDeclineTerms () {
    window.location.href = 'https://my-portifolio2022.vercel.app/';
  };

  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        {!acceptedTerms ? (
          <WelcomeModal 
            onAccepted={handleAcceptTerms}
            onDecline={handleDeclineTerms}
          />
        ) : (
          <div className="z-10 relative h-screen p-20 flex items-center justify-center">
            <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
              <Header />

              <div className="grid grid-cols-editor max-h-full">
                <Menu />
                <Explorer />

                <div className="h-full relative">
                  {children}
                </div>
              </div>

              <Footer />
            </div>
          </div>
        )}
      </body>
    </html>
  )
}
