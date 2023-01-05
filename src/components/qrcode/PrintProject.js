import React, { useRef } from 'react';
import InfoCard from '../InfoCard';
import logo from '../../assets/images/loginLogo.png';
import { useParams } from 'react-router-dom';
import QrInfo from './QrInfo';

const PrintProject = ({ qrCode, project }) => {
  const { id } = useParams();
  return (
    <>
      <div
        className=" flex flex-col  items-center  p-6 w-full"
        // style={{ width: '100%', height: window.innerHeight }}
      >
        <div className="w-40 md:w-80 mb-4 flex flex-col items-center ">
          <img src={logo} alt="App Logo" />
          PPROJECT: {id}
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={qrCode} alt="" />
          <p className="text-xs break-normal text-center text-myDarkBlue">
            Scan this QR code to update project milestone from shop floor.
          </p>
        </div>
        <body className="flex mt-4 flex-col items-center justify-center">
          <div>
            <QrInfo id={project.id} project={project} />
          </div>
        </body>
      </div>
    </>
  );
};

export default PrintProject;
