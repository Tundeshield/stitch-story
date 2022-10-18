import React from 'react';
import Button from '../Button';

const ProjectInfoCard = () => {
  return (
    <div>
      <section>
        <img src="" alt="" />
        <h3>Your company name</h3>
        <p>Project description</p>
      </section>
      <section className="border-t-4 border-grey-200">
        <p>
          Your feedback helps our couriers to improve. Rate your courier out of
          5 stars to let them know how it went
        </p>
        <Button>Message production team</Button>
      </section>
    </div>
  );
};

export default ProjectInfoCard;
