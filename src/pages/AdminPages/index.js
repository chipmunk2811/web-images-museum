import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import AppHeader from './Components/header';

export default function index() {
  if (localStorage.getItem("UserAdmin")) {
    const storedData = localStorage.getItem('UserAdmin');
    const { expiry } = JSON.parse(storedData);
    const now = new Date().getTime();
    if (now > expiry) return <Navigate replace to='/auth' />;
  }

  if (!localStorage.getItem("UserAdmin")) return <Navigate replace to='/auth' />;

  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  )
}
