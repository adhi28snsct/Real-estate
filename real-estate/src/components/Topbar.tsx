'use client';

import { Bell, Search } from 'lucide-react';

export default function Topbar() {
    return (
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between shadow-sm z-10">
            <div className="flex items-center gap-3 w-full max-w-md">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600 transition-colors">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search leads, properties..."
                        className="w-full bg-gray-50 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-100 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600 rounded-xl transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-100 cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 text-white flex items-center justify-center font-medium shadow-md group-hover:shadow-lg transition-all scale-100 group-hover:scale-105">
                        JS
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-semibold text-gray-900 leading-none mb-1">Jon Snow</p>
                        <p className="text-xs text-gray-500 leading-none">Sales Agent</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
