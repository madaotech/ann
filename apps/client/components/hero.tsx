'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Gradient } from '@/lib/gradient'
import { useEffect } from 'react'
import Link from 'next/link'

const Hero = () => {
  useEffect(() => {
    const gradient = new Gradient()

    gradient.initGradient('#gradient-canvas')
  }, [])
  return (
    <AnimatePresence>
      <svg style={{ filter: 'contrast(125%) brightness(110%)' }} className="fixed z-[1] w-full h-full opacity-[35%]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
      <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.95,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
        >
          <svg className="inline-block w-[82px] row-start-2 mb-8 md:mb-6" viewBox="0 0 170 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 110L70 0H40L0 110V200H30L60 110H30ZM140 110L100 0H130L170 110V200H140L110 110H140Z" fill="#1E2B3A" />
          </svg>
          nnotation <br />
          share <span className="text-[#407BBF]">anywhere</span>
          <span className="font-inter text-[#407BBF]">.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.95,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
        >
          <div className="w-1/2">
            <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">Platform</h2>
            <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">Full access to our platform, including all questions and solutions.</p>
          </div>
          <div className="w-1/2">
            <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">Community</h2>
            <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">Join a community of like-minded individuals, and learn from each other.</p>
          </div>
        </motion.div>

        <div className="flex gap-[15px] mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.55,
              ease: [0.075, 0.82, 0.965, 1],
            }}
          >
            <Link
              href="https://github.com/madaotech/ann"
              target="_blank"
              className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
              style={{
                boxShadow: '0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)',
              }}
            >
              <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                <svg className="w-[16px] h-[16px] text-white" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                  ></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 6.5L12 12.25L18.5 6.5"></path>
                </svg>
              </span>
              Star on Github
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.55,
              ease: [0.075, 0.82, 0.965, 1],
            }}
          >
            <Link
              href="/"
              aria-disabled
              className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
              style={{
                boxShadow: '0 1px 1px #0c192714, 0 1px 3px #0c192724',
              }}
            >
              <span className="mr-2"> Try it out </span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#1E2B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 12H4.75" stroke="#1E2B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>

      <div
        className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
        style={{
          clipPath: 'polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)',
        }}
      ></div>

      <motion.canvas
        initial={{
          filter: 'blur(20px)',
        }}
        animate={{
          filter: 'blur(0px)',
        }}
        transition={{
          duration: 1,
          ease: [0.075, 0.82, 0.965, 1],
        }}
        style={{
          clipPath: 'polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)',
        }}
        id="gradient-canvas"
        data-transition-in
        className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
      ></motion.canvas>
    </AnimatePresence>
  )
}

export default Hero
