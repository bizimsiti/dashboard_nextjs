import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="w-[10%]  lg:w-[16%] p-4">
        <Link
          href={"/"}
          className="flex items-center  justify-center lg:justify-start gap-2 pt-2"
        >
          <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
          <span className="hidden xl:block font-bold text-[#0084FF]">
            EducationCampus
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[90%] md:w-[92%] lg:w-[84%]  bg-[#f7f8fa] overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
