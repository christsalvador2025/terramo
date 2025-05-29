import "@fontsource/lato/index.css";
import { Suspense } from 'react';
// import { Provider } from 'react-redux';
import { useAppSelector } from './app/hooks';

// import { store } from './app/store';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import LoadingSpinner from './components/LoadingSpinner';
// import ProtectedRoute from "./components/protected-route/protected-route";
// import CustomerDashboard from "./pages/customer-dashboard";
import CustomersPage from "./pages/customers";
// import Login from "./pages/login";

// import UploadPage from "./pages/upload";
import NotFound from "./pages/not-found";
import { theme } from "./theme";
import LoginData from "./pages/login-v2"
import RequireAuth from "./api/RequiredAuth";
import { Toaster } from 'react-hot-toast'; 

// pages
import StakeHolders from "./pages/stakeholders/page";
import SingleStakeholder from "./pages/stakeholders/stakeholder";
import CustomerDashboard from "./pages/customer-dashboard";
// persons page
import Persons from "./pages/persons/page";
import SinglePerson from "./pages/persons/persondetails";
import SustainabilityAnalyzerForm from "./components/SustainabilityAnalyzerForm";
function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
   
    <Suspense fallback={<LoadingSpinner fullScreen />}>
    <BrowserRouter>
      
      <AppContent
        isAuthenticated={isAuthenticated}
         
      />
     
    </BrowserRouter>
    </Suspense>

  );
}

function AppContent({
  isAuthenticated,

}: {
  isAuthenticated: boolean;
  setIsAuthenticated?: (value: boolean) => void;
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  // isAuthenticated = true;
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster 
        position="top-right" // You can adjust the position as needed (e.g., "bottom-center")
        reverseOrder={false} // Determines if new toasts appear on top or bottom
        toastOptions={{
          // Optional: customize styling for success/error toasts
          success: {
            style: {
              background: '#4CAF50', // Green background
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#F44336', // Red background
              color: 'white',
            },
          },
        }}
      />
      <Layout currentPath={currentPath} isAuthenticated={isAuthenticated} >
        <Routes>
          
         
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/stakeholders" /> : <LoginData />}
        />
          {/* <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          /> */}
          {/* <Route
            path="/customers"
            element={isAuthenticated ? <CustomersPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/upload"
            element={isAuthenticated ? <UploadPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/customers/:id/dashboard/*"
            element={isAuthenticated ? <CustomerDashboard /> : <Navigate to="/login" />}
          /> */}
          <Route element={<RequireAuth/>}>
            <Route path="/stakeholders"  element={<StakeHolders/>}></Route>
            <Route path='/stakeholder/:id' element={<SingleStakeholder/>}/>

            {/* PERSONS */}
            <Route path="/persons"  element={<Persons/>}></Route>
            <Route path='/persons/:id' element={<SinglePerson/>}/>

            {/* Customers */}
            <Route path="/customers"  element={<CustomersPage/>}></Route>
            <Route
            path="/customers/:id/dashboard/*"
            element={<CustomerDashboard />}
            
            />
            <Route
              path="/sample-form"
              element={<SustainabilityAnalyzerForm />} 
            />
          </Route>
          <Route path="*" element={isAuthenticated ? <NotFound /> : <Navigate to="/login" />} />
        </Routes>
      </Layout>
    </ThemeProvider>
 
  );
}

export default App;
