import React from 'react'
import ReactDOM from 'react-dom/client'
import Table from './components/Table'
import Header from './components/Header'
import Section from './components/Section'

let app = document.querySelector('#root')
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <Header/>
    <Table/>
    <Section/>
  </React.StrictMode>,
)
