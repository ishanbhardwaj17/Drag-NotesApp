import React, { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (

        <>
            <nav className="w-full h-16 px-6 bg-[#0B0F14] border-b border-white/10 flex items-center">

                {/* Left - Logo */}
                <div className="flex items-center gap-2 text-slate-100 font-semibold">

                    Recall
                </div>

                {/* Center - Search (INPUT) */}
                <div className="mx-auto w-105">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-white/10 focus-within:border-indigo-500/50">

                        {/* Search Icon */}
                        <svg
                            className="w-4 h-4 text-slate-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                            />
                        </svg>

                        {/* Actual Input */}
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Right - Actions */}
                <div className="flex items-center gap-4">

                    <button className="text-sm px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition">
                        Add Task
                    </button>

                    <button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-slate-300 hover:bg-white/10 transition">
                        🌙
                    </button>

                    {/* Avatar */}

                </div>

            </nav>

        </>


    );

};

export default Navbar;
