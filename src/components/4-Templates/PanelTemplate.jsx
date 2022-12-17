import React from 'react'
import Sidebar from "../3-Organisms/Sidebar";
import Topbar from "../3-Organisms/Topbar";
export default function PanelTemplate(props) {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        {props.children}
      </main>
    </div>
  )
}
