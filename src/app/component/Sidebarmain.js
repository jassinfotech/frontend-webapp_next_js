'use client'
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './custom.css'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
const Sidebarmain = () => {

  
  const toggleBtn = () => {
    let sideBar = document.getElementById('sidebar');
    let header = document.getElementById('header');
    let main = document.getElementById('main');
    if (sideBar !== null && header !== null && main !== null) {
      sideBar.classList.toggle("sidebar-hideshow");
      header.classList.toggle("header-hideshow");
      main.classList.toggle("main-hideshow");

    }

  }
  return (
    <>
      <Topbar ToggleBtn={toggleBtn} />
      <Sidebar />
    </>
  )
}
export default Sidebarmain