import React from "react";
import Header from "./others/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Movies/Movies.js"
import Home from "./home/Home";

import Sports from "./Sports/Sports";
import Politics from "./Politics/Politics";

import PageNotFound from "./others/PageNotFound";
import { CategoryProvider } from "./context/Context";
import ViewData from "./others/ViewData";
import Business from "./Business/Business";

const AllComponents = () => {
  return (
    <div>
      <Router>
        <Header />
        <CategoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/politics" element={<Politics />} />
          
          <Route path="/movies/:id" element={<ViewData/>}/>
          <Route path="/business/:id" element={<ViewData/>}/>
          <Route path="/sports/:id" element={<ViewData/>}/>
          <Route path="/politics/:id" element={<ViewData/>}/>
        </Routes>
        </CategoryProvider>
      </Router>
    </div>
  );
};

export default AllComponents;
