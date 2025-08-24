"use client";
import HowItWorks from "@/components/HowItWorks";
import { Button, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  return (
<>
  <Box
    sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'transparent',
      backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
      backgroundSize: '80px 80px',
    }}
  >
    <Container className="flex flex-col items-center p-6 md:p-10 text-center">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-500 via-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        CLI Guru
      </motion.h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        AI Powered Command Line Helper
      </h2>

      <Link
        className="bg-blue-500 text-white text-lg sm:text-xl md:text-2xl px-4 py-2 rounded mt-6 sm:mt-8 cursor-pointer hover:bg-blue-300"
        href={"/selection"}
      >
        Get Started
      </Link>

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/023/982/096/small_2x/robot-head-cyborg-face-on-transparent-background-created-with-generative-ai-png.png"
        alt="Robot Head"
        className="w-40 sm:w-52 md:w-64 lg:w-80 mt-8"
      />
    </Container>
  </Box>

  <HowItWorks />
</>
  );
}
