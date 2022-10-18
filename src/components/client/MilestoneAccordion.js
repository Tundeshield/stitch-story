import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Milestone from './Milestone';

export default function MilestoneAccordion() {
  return (
    <div>
      <Milestone />
      <Milestone />
      <Milestone />
    </div>
  );
}
