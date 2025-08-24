"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Box } from "@mui/material";

export default function Selection() {
    const categories = ["linux", "docker", "github"];

    return (
        <>
            <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
        backgroundSize: '80px 80px', // Adjust spacing of dots
      }}
    >
            <div className="flex flex-col justify-center items-center p-8 ">
                <h1 className="text-8xl text-center font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-500 via-white">Select One</h1>
                <div className="grid grid-cols-3 gap-40 mt-20">
                    {categories.map(cat => (
                        <motion.div key={cat} whileHover={{ scale: 1.05 }}>
                            <Link href={`/command/${cat}`}>
                                <button className="m-2 text-white text-4xl bg-gradient-to-r from-gray-400 to-gray-600 via-bg-gray-900 cursor-pointer hover:bg-darkblue-500 font-bold py-2 px-4 rounded">
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            </Box>
        </>
    );
}