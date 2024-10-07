import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const Navigation = () => {
  return (
    <div>
      <div className="hidden md:flex items-center gap-5">
        <NavItem to="/explorer">Explorer</NavItem>
        <NavItem to="/docs">Docs</NavItem>
        <NavItem to="/dashboard">Dashboard</NavItem>
      </div>
      <div className="md:hidden relative">
        <div className="text-white-2">
          <RxHamburgerMenu className="text-[22px]" />
        </div>
        <div className="hidden absolute z-50 top-10 shadow-variant-2 -left-1 bg-white-2 w-[410%] px-3 py-2 rounded-md">
          <div className="block my-1">
            <NavItem to="/explorer">Explorer</NavItem>
          </div>
          <div className="block my-1">
            <NavItem to="/docs">Docs</NavItem>
          </div>
          <div className="block my-1">
            <NavItem to="/dashboard">Dashboard</NavItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

//Nav Menu Item Link
export const NavItem = ({ children, to, className }: NavProps) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return (
          "relative transition-all duration-[800ms] text-body-3 hover:text-black-5 md:hover:text-white-2 " +
          (isActive
            ? " md:text-white-1 text-black-6 !font-bold "
            : " text-black-6 md:text-white-4 font-medium md:font-normal ") +
          className
        );
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};
