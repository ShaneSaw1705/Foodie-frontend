'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="bg-base-100 w-full h-screen grid grid-cols-[auto_1fr]">
      <div className="bg-base-300 w-[300px] flex flex-col justify-between p-4">
        <div>
          <h1 className="text-2xl flex items-center justify-center p-4">DashboardLayout</h1>
          <div className="flex flex-col">
            <Link
              href={"/dashboard/page1"}
              className={`btn btn-ghost ${pathname === "/dashboard/page1" ? "bg-base-100" : ""}`}
            >
              Page 1
            </Link>
            <Link
              href={"/dashboard/page2"}
              className={`btn btn-ghost ${pathname === "/dashboard/page2" ? "bg-base-100" : ""}`}
            >
              Page 2
            </Link>
            <Link
              href={"/dashboard/page3"}
              className={`btn btn-ghost ${pathname === "/dashboard/page3" ? "bg-base-100" : ""}`}
            >
              Page 3
            </Link>
          </div>
        </div>
        <button className="btn btn-secondary">Log out</button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;