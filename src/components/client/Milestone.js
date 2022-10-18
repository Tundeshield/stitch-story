import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import MilestoneUpdate from './MilestoneUpdateContainer';
import MilestoneUpdateContainer from './MilestoneUpdateContainer';

const Milestone = () => {
  const [done, setDone] = useState(true);
  return (
    <div className="mb-4">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-myBlue" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {done ? (
            <CheckCircleIcon className="text-myDarkBlue mr-2" />
          ) : (
            <PendingActionsIcon className="text-red-400 mr-2" />
          )}

          <Typography>Sew Clothes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MilestoneUpdateContainer />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Milestone;
