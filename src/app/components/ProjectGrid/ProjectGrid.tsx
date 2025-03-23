import React from 'react';
import "@/app/interfaces/Project"
import Link from 'next/link'

const projects: Project[] = [
  {
    imageUrl: "/VineTech/RoverInVineyard.jpg",
    title: 'Vine Tech',
    description: 'Autonomous Rover that uses computer vision and machine learning to predict vineyard yields',
    link: 'https://project-link-1.com',
  },
  {
    imageUrl: '/CSPhotos/1075Mobile.png',
    title: '1075 Mobile',
    description: 'A mobile application for Android and IOS for viewing customer information, driving routes and performing safety checks',
    link: 'https://project-link-2.com'
  },
  // {
  //   imageUrl: '/CSPhotos/1075Mobile.png',
  //   title: 'TypeScript Programming Language Report',
  //   description: 'A mobile application for Android and IOS for viewing customer information, driving routes and performing safety checks',
  //   link: '/PDFs/CSIS420_Research_Paper.pdf'
  // },
];

const ProjectGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-12">
      {projects.map((project, index) => (
        <Link href={project.imageUrl} key={index}>
          <div key={index} className="flex flex-col items-center my-12 lg:my-0 bg-slate-900 border hover:border-slate-700 border-slate-900 rounded-lg p-4">
            <div>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover object-center rounded-lg shadow-lg mb-4"
              />
            </div>
            <p className="text-center text-lg font-semibold">{project.title}</p>
            <p className="text-center text-gray-500">{project.description}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;