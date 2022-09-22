import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./Landing_Page/Pages/Home";
import SignIn from "./SignIn_Page/SignIn";
import { Route, Routes } from "react-router-dom";
import Products from "./Landing_Page/Pages/Products/Products";
import Registration from "./Registeration_Page/Registration";
import AdminDashboard from "./Company_Admin/AdminDashboard";
import CompanyHome from "./Company_Admin/CompanyHome";
import Approvals from "./Company_Admin/Approvals";

import Reports from "./Company_Admin/Reports";
import Employees from "./Company_Admin/Employees";
import Pricing from "./Landing_Page/Pages/Pricing";
import { SystemAdminMenu } from "./System_Admin/SystemAdminMenu";
import SystemAdminDashboard from "./System_Admin/SystemAdminDashboard";
import SystemAdminHome from "./System_Admin/SystemAdminHome";
import Companies from "./System_Admin/Companies";
import Advances from "./Company_Admin/Advances";
import EmployeeHome from "./Employee/EmployeeHome";



export const App = () => (
  <ChakraProvider theme={theme}>
      {/* <EmployeeHome/> */}
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="registration" element={<Registration />} />
        <Route path="system-admin-menu" element={<SystemAdminMenu />} />
        <Route path="admin-dashboard" element={<AdminDashboard />}>
        <Route index element={<AdminDashboard />} />
        <Route path="admin" element={<CompanyHome />} />
          <Route path="company" element={<CompanyHome />} />
          <Route path="employees" element={<Employees />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="advances" element={<Advances />} />
          <Route path="reports" element={<Reports />} />
          </Route>
        <Route path="home" element={<CompanyHome/>} />
        <Route path="pricing" element={<Pricing/>} />
      </Route>
    </Routes>
  </ChakraProvider>
);
  {/* <Route path="system-admin" element={<SystemAdminDashboard/>}/>
        <Route index element={<SystemAdminDashboard/>}/>
        <Route path="admin" element={<SystemAdminHome />} />
          <Route path="system-admin-home" element={<SystemAdminHome/>}/>
          <Route path="companies" element={<Companies/>}/> */}
