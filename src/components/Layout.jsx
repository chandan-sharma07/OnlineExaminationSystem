import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { GraduationCap, LayoutDashboard, User } from 'lucide-react';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
                <div className="container h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            ExamPro
                        </span>
                    </Link>

                    {/* Navigation Removed */}

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <div className="text-right hidden md:block">
                                {/* User Info Removed */}
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                                <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 container py-8 animate-fade-in">
                <Outlet />
            </main>

            <footer className="border-t border-white/5 py-8 mt-auto">
                <div className="container text-center text-sm text-muted">
                    <p>© {new Date().getFullYear()} ExamPro. Crafted for Excellence.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
