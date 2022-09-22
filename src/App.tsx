import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./Landing_Page/Pages/Home";
import SignIn from "./Landing_Page/Pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Products from "./Landing_Page/Pages/Products/Products";
import Registration from "./Landing_Page/Pages/Registration/Registration";
import AdminDashboard from "./Landing_Page/Pages/CompanyAdmin/AdminDashboard";
import CompanyHome from "./Landing_Page/Pages/CompanyAdmin/CompanyHome";
import Approvals from "./Landing_Page/Pages/CompanyAdmin/Approvals";
import Advances from "./Landing_Page/Pages/CompanyAdmin/Advances";
import Reports from "./Landing_Page/Pages/CompanyAdmin/Reports";
import Employees from "./Landing_Page/Pages/CompanyAdmin/Employees";
import Pricing from "./Landing_Page/Pages/Pricing";
import { SystemAdminMenu } from "./Landing_Page/Pages/SystemAdmin/SystemAdminMenu";
import SystemAdminDashboard from "./Landing_Page/Pages/SystemAdmin/SystemAdminDashboard";



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
