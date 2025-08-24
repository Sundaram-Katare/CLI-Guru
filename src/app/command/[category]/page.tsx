"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState, setCategory, setCommand, setResponse } from "@/store/store";
import { Button, TextField, Box, Container } from "@mui/material";
import { useEffect, use, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

export default function CommandPage({ params }: { params: Promise<{ category: string }> }) {
  const unwrappedParams = use(params);
  const { category, command, response } = useSelector((state: RootState) => state.command);
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    dispatch(setCategory(unwrappedParams.category));
  }, [unwrappedParams.category, dispatch]);

  const handleSubmit = async () => {
    const res = await fetch("/api/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, command })
    });

    const data = await res.json();
    dispatch(setResponse(data.message));
  };

  if (!mounted) return null;

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
        <motion.div className="grid grid-cols-2 gap-15">

          <div className="text-white flex flex-col p-20">
            <h2 className="text-2xl font-semibold mb-4 text-6xl mb-10 text-center font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-800 via-white">{unwrappedParams.category.slice(0, 1).toUpperCase() + unwrappedParams.category.slice(1)}</h2>
            <input
              type="text"
              placeholder="Enter Command"
              value={command}
              onChange={(e) => dispatch(setCommand(e.target.value))}
              className="bg-white border rounded-2xl mb-10 p-2 text-black"
            />
            <Button onClick={handleSubmit} variant="contained" className="mt-16 max-w-fit">
              Get Details
            </Button>
          </div>

          {response ? (
            <div className="mt-6 p-4 border rounded bg-white text-black">
              <h3 className="font-bold text-center text-blue-400 text-3xl mb-5">Response:</h3>
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          ) : (
            <div className="flex justify-center p-5 border-white-500 border-2 m-5 rounded-2xl bg-white">
              <motion.img src="https://static.wixstatic.com/media/2c6884_dd3074ee9112423a95fdf3b4cdb13a38~mv2.gif" alt=""
                className="object-cover"
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              />
            </div>
          )}

        </motion.div>
      </Box>
    </>
  );
}