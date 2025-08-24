import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { title } from "process";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const steps = [
    {
        num: "Step 1",
        title: "Select a Category",
        description: "Choose a category from the options provided."
    },
    {
        num: "Step 2",
        title: "Enter Command",
        description: "Type in the command you want help with."
    },
    {
        num: "Step 3",
        title: "Get Response",
        description: "Receive a detailed response based on your command."
    }
]

export default function HowItWorks() {
    return (
        <>
            <motion.div className="flex flex-col p-6 sm:p-8 m-2 sm:m-4 min-h-screen justify-center items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-500 via-white">
                    How It Works
                </h2>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
                    {steps.map((step) => (
                        <motion.div
                            key={step.num}
                            className="bg-white p-4 sm:p-6 rounded-lg shadow text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-black">{step.num}</h2>
                            <h3 className="text-lg sm:text-xl font-bold text-black">{step.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}