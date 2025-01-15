"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ClientSection from "./client/page";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
export default function Home() {
  const pathname = usePathname();
  return (
    <div className="">
      {pathname === "/admin" ? (
        <div className="bg-light text-dark border p-4 rounded">
          <h1 className="text-center text-2xl font-bold">Admin Section</h1>
        </div>
      ) : (
        <div>
          <Header />
          <ClientSection />
          <Footer />
        </div>
      )}
    </div>
  );
}
