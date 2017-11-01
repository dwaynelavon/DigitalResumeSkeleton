import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {ResumeBodySkills, ResumeBodyExperience} from '../components';

const ResumeBodyContent = ({value, handleChangeIndex, skillsList, experienceList}) => (
  <SwipeableViews
    index={value}
    onChangeIndex={handleChangeIndex}
  >
    <ResumeBodySkills skills={skillsList} />
    <ResumeBodyExperience className='card__content-view' experiences={experienceList} />
  </SwipeableViews>
  )

export default ResumeBodyContent;