import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import firebase from "../config/firebase";
import "firebase/auth";

import Home from "../components/pages/home";
import Artigos from "../components/pages/artigos";
import Bibliografia from "../components/pages/bibliografia";
import Hermeneutica from "../components/pages/hermeneutica";
import Newsletter from "../components/pages/newsletter";
import Parcerias from "../components/pages/parcerias";
import SobreUs from "../components/pages/sobre";



function ProtectedRoute({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>


    </div>;
  }

  return authenticated ? children : <Navigate to="/" />;
}

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/artigos" element={<Artigos/>} />
        <Route path="/bibliografia" element={<Bibliografia/>} />
        <Route path="/hermeneutica" element={<Hermeneutica/>} />
        <Route path="/newsletter" element={<Newsletter/>} />
        <Route path="/parceria" element={<Parcerias/>} />
        <Route path="/sobre" element={<SobreUs/>} />
      
      </Routes>
    </Router>
  );
};

export default Rotas;
