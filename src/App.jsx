import React from 'react';
import './App.css';
import Backgroundimage from "./assets/bg.jpg";
import FotoProfil from "./assets/pp.JPG"


function App() {
  return (
   <React.Fragment>
     <div className="antialiased relative text-gray-600">
       {/* ============================================ */}
       <div className="absolute w-full  min-h-screen">
         <div
          className="absolute top-0 w-full h-1/2 bg-cover bg-bottom" 
          style={{backgroundImage : `url(${Backgroundimage})`}}
         ></div>
         <div className="absolute
         z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center uppercase font-bold text-gray-600"
         > 
            <a className="hover:text-blue-600" href="#services">services</a>
            <a className="hover:text-blue-600" href="#work">work</a>
            <a className="hover:text-blue-600" href="#contact">contact</a>
         </div>
       </div>
        {/* ============================================ */}
        {/* card identitas */}
        <div className="relative z-10 flex justify-center items-center min-h-screen h-auto ">
          <div className="max-w-4xl relative">
          <div className="absolute inset-0 transform -skew-x-4  z-10 -rotate-6  w-full max-w-4xl p-12 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-red-500"></div>
          <div className="relative z-20 flex bg-white justify-between w-full max-w-4xl p-12 shadow-lg rounded-lg">
            <div className="flex flex-col space-y-6 py-6 justify-between">
            <div>
              <h2 className="text-lg">HELLO I AM Rifqi</h2>
              <h1 className="text-4xl font-bold text-gray-700">Rifqi Hasan</h1>
            </div>
            <p className="text-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio iusto delectus laboriosam tempora repellendus veritatis sapiente, minima nulla magni repellat neque praesentium odit, assumenda magnam expedita impedit porro in.
            </p>
            </div>
            <img className="w-64 h-64 rounded-full border-white shadow-lg flex-shrink-0" src={FotoProfil} alt="pp.JPG" />
          </div>
          </div>
        </div>
        {/* card identitas */}
 
     </div>
   </React.Fragment>
  );
}

export default App;
