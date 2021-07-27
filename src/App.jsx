import React from 'react';
import './App.css';


function App() {
  return (
   <React.Fragment>
     <div className="grid grid-cols-7 h-screen w-screen gap-y-1 gap-x-1">
       <div className="bg-red-500 col-span-1  "></div>
       <div className="bg-green-500 col-span-6 overflow-auto  ">
         <div className="h-12 bg-yellow-500">1</div>
         <div className="h-full flex items-center justify-center">
         <form className="pt-10 px-10">
           <label className="font-bold text-xl" htmlFor="username">username</label>
           <input className="border bg-gray-100 w-full px-10 py-3 hover:bg-blue-100" type="text"/>
         </form>
         </div>
       </div>

       
     </div>
   </React.Fragment>
  );
}

export default App;
