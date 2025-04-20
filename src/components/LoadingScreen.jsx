import React from "react";
export default function LoadingScreen() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img src="/logo.svg" alt="Logo" className=" animate-pulse" />
      </div>
    );
  }
  