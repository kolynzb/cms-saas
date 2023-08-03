// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { ReactComponentElement } from "react";
import { FiHome, FiPackage } from "react-icons/fi";

export interface IRoute {
  name: string;
  // layout: string;
  // component: ReactComponentElement;
  icon: ReactComponentElement<any> | string;
  secondary?: boolean;
  path: string;
}

const routes: IRoute[] = [
  {
    name: "Main Dashboard",
    path: "/dashboard",
    icon: <FiHome className="h-6 w-6" />,
  },
  {
    name: "Resources",
    path: "/resources",
    icon: <FiPackage className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Pipeline",
    icon: <FaPeopleGroup className="h-6 w-6" />,
    path: "/pipeline",
  },
  {
    name: "Stats",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Sign In",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
  },
];

export default routes;
