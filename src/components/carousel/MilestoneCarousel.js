import React, { Fragment } from 'react';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { Button } from '@mui/material';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../utils/firebase';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { v4 } from 'uuid';

const MilestoneCarousel = () => {
  const [toggler, setToggler] = useState(false);
  const [milestoneImages, setMilestoneImages] = useState([]);
  const project = useParams();
  const imageListRef = ref(storage, `projectImages/${project.id}/`);

  useEffect(() => {
    listAll(imageListRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setMilestoneImages((prev) => [...prev, url]);
          });
        });
        milestoneImages.map((image) => console.log(image));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {milestoneImages.length === 0 ? null : (
        <Button variant="outlined" onClick={() => setToggler(!toggler)}>
          Project images
        </Button>
      )}

      <FsLightbox
        toggler={toggler}
        sources={milestoneImages.map((image) => (
          <React.Fragment key={v4()}>
            <img src={image} alt="project images" />
          </React.Fragment>
        ))}
      />
    </div>
  );
};

export default MilestoneCarousel;
