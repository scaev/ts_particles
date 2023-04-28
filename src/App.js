import React from "react";
import { Design } from "./components/Design";

function App() {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover text-white relative overflow-hidden">
      <div className="w-full- h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}

export default App;
