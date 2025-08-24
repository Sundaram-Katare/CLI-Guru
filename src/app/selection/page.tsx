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
                    minHeight: '100vh',
                    backgroundColor: 'transparent',
                    backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            >
                <div className="flex flex-col justify-center items-center p-6 sm:p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-500 via-white">
                        Select One
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 lg:gap-40 mt-12 sm:mt-16 lg:mt-20">
                        {categories.map((cat) => (
                            <motion.div key={cat} whileHover={{ scale: 1.05 }}>
                                <Link href={`/command/${cat}`}>
                                    <button className="m-2 text-white text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-gray-400 to-gray-600 via-bg-gray-900 cursor-pointer hover:opacity-90 font-bold py-3 px-6 rounded-lg">
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