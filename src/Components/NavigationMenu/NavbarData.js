import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

export const NavbarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Appointments',
    path: '/appointments',
    icon: <FaIcons.FaCalendarAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Search patient',
    path: '/searchpatient',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Client EMR',
    path: '/clientemr',
    icon: <FaIcons.FaPlusCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Billing',
    path: '/billing',
    icon: <FaIcons.FaRegMoneyBillAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Inventory Catelogue',
    path: '/Invcatelogue',
    icon: <MdIcons.MdOutlineInventory />,
    cName: 'nav-text'
  },
  {
    title: 'Stock purchase',
    path: '/stockpurchase',
    icon: <AiIcons.AiOutlineStock />,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <SiIcons.SiSimpleanalytics />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text'
  },
  {
    title: 'Manage staff',
    path: '/managestaff',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];