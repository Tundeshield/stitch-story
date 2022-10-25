import React, { useRef } from 'react';
import InfoCard from '../InfoCard';
import logo from '../../assets/images/loginLogo.png';
import { useParams } from 'react-router-dom';

const PrintProject = ({ qrCode, project }) => {
  const { id } = useParams();
  return (
    <>
      <div className="sm: flex flex-col justify-center items-center p-14 w-full">
        <div className="w-80 mb-4">
          <img src={logo} alt="App Logo" />
          PPROJECT: {id}
        </div>

        <body className=" md:flex justify-between mt-4 space-x-6">
          <div>
            <InfoCard id={project.id} project={project} />
          </div>
          <div>
            <img src={qrCode} alt="" />
            <p className="text-xs break-normal text-myDarkBlue">
              Scan this QR code to update project milestone from shop floor.
            </p>
          </div>
        </body>
      </div>
      ;
    </>
  );
};

export default PrintProject;
