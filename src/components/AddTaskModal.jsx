import React from "react";

const AddTaskModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <div className="relative w-105 rounded-xl bg-[#0B0F14] border border-white/10 p-6 z-10">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-slate-100">
                        Add New Task
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-200"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">

                    {/* Title */}
                    <div>
                        <label className="text-sm text-slate-400">Title</label>
                        <input
                            type="text"
                            placeholder="Task title"
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-[#111827] border border-white/10 
                         text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm text-slate-400">Description</label>
                        <textarea
                            rows="3"
                            placeholder="Task details..."
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-[#111827] border border-white/10 
                         text-slate-200 placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        />
                    </div>

                    {/* Tag + Date */}
                    <div className="flex gap-3">

                        <div className="flex-1">
                            <label className="text-sm text-slate-400">Tag</label>
                            <input
                                type="text"
                                placeholder="#Work"
                                className="mt-1 w-full px-3 py-2 rounded-lg bg-[#111827] border border-white/10 
                           text-slate-200 focus:outline-none"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="text-sm text-slate-400">Due Date</label>
                            <input
                                type="date"
                                className="mt-1 w-full px-3 py-2 rounded-lg bg-[#111827] border border-white/10 
                           text-slate-200 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
                        >
                            Add Task
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;
