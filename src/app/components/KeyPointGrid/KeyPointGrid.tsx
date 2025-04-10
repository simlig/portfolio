import React from 'react';
import "@/app/interfaces/KeyPoints"
import Link from 'next/link'

const projects: KeyPoints[] = [
  {
    imageUrl: "/VineTech/grapes.svg",
    title: 'Vine Tech',
    description: 'Autonomous Rover that uses computer vision and machine learning to predict vineyard yields',
    link: '/VineTech',
    text: "Fix Inaccurate Bay Assignments"
  },
  {
    imageUrl: "/VineTech/grapes.svg",
    title: 'Vine Tech',
    description: 'Autonomous Rover that uses computer vision and machine learning to predict vineyard yields',
    link: '/VineTech',
    text: "Implement Adaptive Cruise Control"
  },
  {
    imageUrl: "/VineTech/grapes.svg",
    title: 'Vine Tech',
    description: 'Autonomous Rover that uses computer vision and machine learning to predict vineyard yields',
    link: '/VineTech',
    text: "Develop Autonomous Turning"
  },
  // {
  //   imageUrl: '/CSPhotos/1075Mobile.png',
  //   title: 'TypeScript Programming Language Report',
  //   description: 'A mobile application for Android and IOS for viewing customer information, driving routes and performing safety checks',
  //   link: '/PDFs/CSIS420_Research_Paper.pdf'
  // },
];

const KeyPointGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:gap-12">
      {projects.map((project, index) => (
        <Link href={project.link} key={index}>
          <div key={index} className="flex flex-col items-center my-12 lg:my-0 bg-slate-900 border hover:border-slate-700 hover:scale-105 transition-transform duration-300 border-slate-900 rounded-lg p-4">
            {/* <div>
            </div> */}
            {/* <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover object-center rounded-lg shadow-lg mb-4 opacity-50"
              />

              <div className="absolute inset-0 flex justify-center items-center text-center">
                <p className="text-white text-3xl font-bold">{project.text}</p>
              </div>
            </div> */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-48 h-48 object-cover object-center rounded-lg shadow-lg mb-4"
              />
            <p className="text-center text-lg font-semibold">{project.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KeyPointGrid;