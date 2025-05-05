"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HamburgerMenu() {
    const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Menu items with staggered animation
  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "/work" },
    { name: "CONTACT", href: "#contact" },
  ]

  // Animation variants
  const overlayVariants = {
    hidden: {
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    visible: {
      y: "0%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  // Letter animation for cooler text effect
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7 + i * 0.05,
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <>
      {/* Hamburger Button with hover animation */}
      <button
        onClick={toggleMenu}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed right-8 cursor-pointer top-8 z-50 flex flex-col gap-2 p-2 mix-blend-difference focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 8 } : isHovered ? { width: "2rem", x: -2 } : { width: "2rem", x: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="h-[2px] w-8 bg-white"
        />
        <motion.div
          animate={isOpen ? { rotate: -45 } : isHovered ? { width: "1.5rem", x: 2 } : { width: "2rem", x: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="h-[2px] w-8 bg-white"
        />
      </button>

      {/* Menu Overlay with improved animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden">
            {/* Background overlay with top-to-bottom animation */}
            <motion.div variants={overlayVariants} className="absolute inset-0 origin-top bg-white text-black" />
            {/* Menu content */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8">
              <nav className="flex flex-col items-center justify-center">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden py-3">
                    <Link
                         href={item.href}
                         onClick={toggleMenu}
                         className={`relative block text-7xl font-light transition-transform duration-300 hover:translate-x-2 md:text-8xl lg:text-9xl ${
                         pathname === item.href ? "text-blue-600" : "text-black"}`}>
                      {/* Letter by letter animation for cooler effect */}
                      {item.name.split("").map((letter, index) => (
                        <motion.span
                          key={index}
                          custom={i * 2 + index * 0.1}
                          variants={letterVariants}
                          className="inline-block"
                          style={{
                            display: "inline-block",
                            transformOrigin: "bottom center",
                          }}>
                          {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                      ))}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
