import { useNavBar } from "@/contexts/NavBarProvider";

interface NavBarContainerProps {
  children: ReactNode;
}

export default function NavBarContainer({ children }: NavBarContainerProps) {
  const { navHover } = useNavBar();
  return (
    <div
      className={`absolute top-0 left-0 right-0 z-10 pt-5 pb-5 pr-5 pl-5 
      ${navHover ? "bg-white " : ""} 
      transition-colors duration-300
    `}
    >
      <div className="w-full">
        <div className="flex justify-between items-center px-4 py-3">
          {children}
        </div>
      </div>
    </div>
  );
}
