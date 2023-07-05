import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Routers from './router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <React.Fragment>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Header />
    <Routers />
    <Footer />
  </React.Fragment>
}

export default App;
