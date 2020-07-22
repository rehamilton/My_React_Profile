import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from './components/Nav'
import Portfolios from './components/Portfolios'
import ContactContainer from './components/ContactContainer';
import Footer from './components/Footer'


export default function App() {

  return (
    <div>
      <Nav />
      <Header />
      <Portfolios />
      <ContactContainer />
      <Footer />
    </div>
  );
}
