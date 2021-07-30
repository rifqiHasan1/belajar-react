import React from "react";
import "./App.css";
import Backgroundimage from "./assets/bg.jpg";
import FotoProfil from "./assets/pp.JPG";
import ServicesImage1 from "./assets/si1.png";
import ServicesImage2 from "./assets/si2.png";
import ServicesImage3 from "./assets/si3.jpg";
import workSection1 from "./assets/ws1.JPG";
import workSection2 from "./assets/ws2.jpg";
import workSection3 from "./assets/ws3.jpg";
import workSection4 from "./assets/ws4.jpg";

function App() {
  return (
    <React.Fragment>
      <div className="antialiased relative text-gray-600">
        {/* ============================================ */}
        <div className="absolute w-full  min-h-screen">
          <div
            className="absolute top-0 w-full h-1/2 bg-cover bg-bottom"
            style={{ backgroundImage: `url(${Backgroundimage})` }}
          ></div>
          <div
            className="absolute
         z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center uppercase font-bold text-gray-600"
          >
            <a className="hover:text-blue-600" href="#services">
              services
            </a>
            <a className="hover:text-blue-600" href="#work">
              work
            </a>
            <a className="hover:text-blue-600" href="#contact">
              contact
            </a>
          </div>
        </div>
        {/* ============================================ */}
        {/* card identitas */}
        <div className="relative z-10 flex justify-center items-center min-h-screen h-auto ">
          <div className="max-w-4xl relative">
            <div className="absolute inset-0 transform -skew-x-4 rounded-lg z-10 -rotate-6  w-full max-w-4xl p-12 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-red-500"></div>
            <div className="relative z-20 flex bg-white justify-between w-full max-w-4xl p-12 shadow-lg rounded-lg">
              <div className="flex flex-col space-y-6 py-6 justify-between">
                <div>
                  <h2 className="text-lg">HELLO I AM Rifqi</h2>
                  <h1 className="text-4xl font-bold text-gray-700">
                    Rifqi Hasan
                  </h1>
                </div>
                <p className="text-md leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  optio iusto delectus laboriosam tempora repellendus veritatis
                  sapiente, minima nulla magni repellat neque praesentium odit,
                  assumenda magnam expedita impedit porro in.
                </p>
              </div>
              <img
                className="w-64 h-64 rounded-full border-white shadow-lg flex-shrink-0"
                src={FotoProfil}
                alt="pp.JPG"
              />
            </div>
          </div>
        </div>
        {/* card identitas */}
        {/* services */}
        <section id="services" className="bg-gray-50 pt-20 pb-28 px-8">
          <div className="max-w-6xl mx-auto">
            {/* judul */}
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Services</h1>
              <h2 className="pt-2 text-xl">Here what i offer</h2>
            </div>
            {/* judul */}
            <div className="mt-24 grid grid-cols-3 gap-20">
              {/* service 1 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 shadow-md rounded-md transform skew-x-8 -rotate-6"></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <img
                    className="rounded-t-md"
                    style={{ height: "240px" }}
                    src={ServicesImage1}
                    alt="si1.png"
                  />
                  <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl">
                      responsive website
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis quae, voluptas, rerum odio pariatur quaerat
                      eius iste laudantium nihil officiis, vel excepturi placeat
                      ratione facilis! Ut numquam accusantium soluta voluptas!
                    </p>
                  </div>
                </div>
              </div>
              {/* services 1 */}
              {/* service 2 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 shadow-md rounded-md transform skew-x-8 -rotate-6"></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <img
                    className="rounded-t-md bg-blue-200"
                    style={{ height: "240px" }}
                    src={ServicesImage2}
                    alt="si2.png"
                  />
                  <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl"></h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis quae, voluptas, rerum odio pariatur quaerat
                      eius iste laudantium nihil officiis, vel excepturi placeat
                      ratione facilis! Ut numquam accusantium soluta voluptas!
                    </p>
                  </div>
                </div>
              </div>
              {/* services 2 */}
              {/* service 3 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 shadow-md rounded-md transform skew-x-8 -rotate-6"></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <img
                    className="rounded-t-md"
                    style={{ height: "240px" }}
                    src={ServicesImage3}
                    alt="si3.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl">
                      Mobile applications
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis quae, voluptas, rerum odio pariatur quaerat
                      eius iste laudantium nihil officiis, vel excepturi placeat
                      ratione facilis! Ut numquam accusantium soluta voluptas!
                    </p>
                  </div>
                </div>
              </div>
              {/* services 3 */}
            </div>
          </div>
        </section>
        {/* services */}
        {/* work */}
        <section id="work" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700 ">work</h1>
              <p className="pt-2 text-xl">here is my portofolio</p>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-14">
              {/* work 1 */}
              <div className="bg-white rounded-lg shadow-md col-span-2">
                <img
                  className="object-cover w-full h-80 rounded-t-md"
                  src={workSection1}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat dolorum cumque suscipit quam unde repudiandae
                    recusandae quas impedit, mollitia atque quasi corrupti
                    eligendi, facere ad nihil nobis iure sunt ab.
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-300 to-blue-500"
                    href=""
                  >
                    view more
                  </a>
                </div>
              </div>
              {/* work 1 */}
              {/* work 2 */}
              <div className="bg-white rounded-lg shadow-md col-span-1">
                <img
                  className="object-cover w-full h-80 rounded-t-md"
                  src={workSection2}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat dolorum cumque suscipit quam unde repudiandae
                    recusandae quas impedit, mollitia atque quasi corrupti
                    eligendi, facere ad nihil nobis iure sunt ab.
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-300 to-blue-500"
                    href=""
                  >
                    view more
                  </a>
                </div>
              </div>
              {/* work 2 */}

              {/* work 3 */}
              <div className="bg-white rounded-lg shadow-md col-span-1">
                <img
                  className="object-cover w-full h-80 rounded-t-md"
                  src={workSection3}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat dolorum cumque suscipit quam unde repudiandae
                    recusandae quas impedit, mollitia atque quasi corrupti
                    eligendi, facere ad nihil nobis iure sunt ab.
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-300 to-blue-500"
                    href=""
                  >
                    view more
                  </a>
                </div>
              </div>
              {/* work 3 */}
              {/* work 4 */}
              <div className="bg-white rounded-lg shadow-md col-span-2">
                <img
                  className="object-cover w-full h-80 rounded-t-md"
                  src={workSection4}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat dolorum cumque suscipit quam unde repudiandae
                    recusandae quas impedit, mollitia atque quasi corrupti
                    eligendi, facere ad nihil nobis iure sunt ab.
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-300 to-blue-500"
                    href=""
                  >
                    view more
                  </a>
                </div>
              </div>
              {/* work 4 */}
            </div>
          </div>
        </section>
        {/* work */}
        {/* contack */}
        <section className="bg-gray-50 pt-20 pb-28 px-80" id="contack">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Contack</h1>
              <p className="pt-2 text-xl">Get in Touch</p>
            </div>
            <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 shadow-md rounded-md transform skew-x-8 -rotate-6"></div>
              <div className="relative z-20 bg-white rounded-md shadow-md p-12">
                <form className="grid grid-cols-2 gap-x-8 gap-y-6" action="">
                  <input
                    type="text"
                    placeholder="name"
                    className=" border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                   <input
                    type="Email"
                    placeholder="Email"
                    className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                   <input
                    type="text"
                    placeholder="subject"
                    className="col-span-2 border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                  <textarea className="col-span-2 border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400" name="message" id="message" cols="30" rows="10"></textarea>
                  <div>
                  <button className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-md bg-gradient-to-r from-blue-500 to-blue-200">send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* contack */}
      </div>
    </React.Fragment>
  );
}

export default App;
