import React from "react";
import { Design } from "./components/Design";
import Header from "./components/Header";
import Banner from "./components/Banner";



function App() {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-white">
        <Header />
        <Banner />
      </div>
      <div className="w-full- h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}

export default App;
