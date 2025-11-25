import React from "react";
import Mainlayout from "./layouts/MainLayouts";
import { Routes, Route, Navigate } from "react-router-dom";
import CallsLayout from "./layouts/callslayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./components/LoginForm";
import Otp from "./components/OtpForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AnotherDevice from "./components/AnotherDevice";
import ChatLayout from "./layouts/ChatLayout";

const App: React.FC = () => {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Navigate to="calls" replace />} />
          <Route path="calls" index element={<CallsLayout />} />
          <Route path="/chats" element={<ChatLayout />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<Otp />} />
          <Route path="anotherDevice" element={<AnotherDevice />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
