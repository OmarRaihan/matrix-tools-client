import React from "react";
import "../MyPortfolio/MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div>
      <p className="text-3xl text-center font-bold my-10">My Portfolio</p>
      <div className="mb-20">
        <div className="card shadow-none border-4 portfolio-card w-full mx-auto">
          <div className="card-body">
            <div className="mb-6">
              <p className="font-bold text-gray-400">Full Name</p>
              <p className="text-2xl font-semibold">Omar Raihan Mahfuz</p>
              <hr />
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-400">Email</p>
              <p className="text-2xl font-semibold">omarraihan91@gmail.com</p>
              <hr />
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-400">Address</p>
              <p className="text-2xl font-semibold">Rajshahi, Bangladesh</p>
              <hr />
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-400">Education</p>
              <p className="text-2xl font-semibold"> Department of History</p>
              <p className="text-xl font-semibold">University of Rajshahi</p>
              <hr />
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-400 mb-2">Skills</p>
              <li className="text-xl font-semibold">HTML</li>
              <li className="text-xl font-semibold">CSS</li>
              <li className="text-xl font-semibold">JavaScript</li>
              <li className="text-xl font-semibold">MongoDB</li>
              <li className="text-xl font-semibold">EspressJS</li>
              <li className="text-xl font-semibold">ReactJS</li>
              <li className="text-xl font-semibold">NodeJS</li>
              <hr />
              <li className="text-xl font-semibold">Github</li>
              <hr />
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-400">Extra Skills</p>
              <li className="text-xl font-semibold">Adobe Illustrator</li>
              <li className="text-xl font-semibold">Adobe Photoshop</li>
              <hr />
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-400 mb-2">Projects</p>
              <li className="text-xl hover:text-green-600">
                  <a href="https://bike-town.web.app/">Bike Town</a>
              </li>
              <li className="text-xl hover:text-green-600">
                  <a href="https://world-gym-5d63a.web.app/">Falcon Gym</a>
              </li>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
