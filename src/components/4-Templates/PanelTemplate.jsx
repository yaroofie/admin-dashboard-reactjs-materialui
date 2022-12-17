import React from 'react'
import Sidebar from "../3-Organisms/Sidebar";
import Header from "../3-Organisms/Header";
export default function PanelTemplate(props) {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Header />
        {props.children}
      </main>
    </div>
  )
}
