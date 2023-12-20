"use client";
import {useState} from "react";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const poppins = Poppins({weight: "700", subsets: ["latin"]});

export default function RootLayout({children}) {
    const [showSideBar, setShowSideBar] = useState(false);

    const sidebarHandler = () => {
        setShowSideBar((prevState) => !prevState);
    };

    return (
        <html lang="en">
        <body className={`${poppins.className} antialiased `}>
        <Navbar sidebarHandler={sidebarHandler}/>

        <SideBar showSideBar={showSideBar} sidebarHandler={sidebarHandler}/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
