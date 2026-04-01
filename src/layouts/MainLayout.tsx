import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  
  return (
    <div className="flex h-screen">
      <div className="w-60 bg-gray-800 text-white p-4">
        Sidebar
      </div>

      <div className="flex-1">
        <div className="h-14 shadow px-4 flex items-center">
          Header
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}