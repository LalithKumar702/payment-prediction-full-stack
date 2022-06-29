import "./App.css";
import React, { Component, useState } from 'react'
import {StyleSheet,View, Text} from 'react-native'
import image from "./components/Group 20399.svg";
import logo from "./components/logo.svg";
import Headerr from "./components/Headerr"
import DataGridd from "./components/DataGridd";
import AddModal from "./components/AddModal";
import Footer from "./components/footer";
export default function App() {
  const [selectedRow,setSelectedRow]=useState([])
  const [reload,setReload]=useState(false)
  
  return (
    <div>
      <Headerr setReload={setReload} selectedRow={selectedRow}/>
      <DataGridd reload={reload} setSelectedRow={setSelectedRow}/>
      <Footer />
    </div>
    
  );
}

