import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QrAlert } from '../Alerts';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PrintProject from './PrintProject';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const QrCode = ({ id, qrCode, project }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Print Project',
  });

  return (
    <div class=" p-2 ml-14 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <span className="flex justify-between items-center">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Project QR Code
        </h5>
        <span onClick={handlePrint}>
          <IconButton>
            <LocalPrintshopIcon />
          </IconButton>
        </span>
      </span>

      <p class="text-sm font-normal p-2 mb-2 text-gray-500 dark:text-gray-400">
        Print the QR code to update the project task from the shopfloor.
      </p>
      <span className="w-40 flex justify-center mb-2" ref={componentRef}>
        <img src={qrCode} alt="" />
      </span>
      <QrAlert />
      <span ref={componentRef}>
        <PrintProject id={id} qrCode={qrCode} project={project} />
      </span>
    </div>
  );
};

export default QrCode;
