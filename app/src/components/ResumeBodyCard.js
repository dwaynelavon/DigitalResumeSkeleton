import React from 'react';
import {Card, CardContent} from 'material-ui';
import ResumeBodyTabs from './ResumeBodyTabs';
import ResumeBodyContent from './ResumeBodyContent';

const ResumeBodyCard = ({value, handleChange, handleChangeIndex, tabLabels, skillsList, experienceList}) =>
  <Card className="card" elevation={2}>
    <CardContent className="card__content">
      <ResumeBodyTabs value={value} handleChange={handleChange} tabLabels={tabLabels} />
      <ResumeBodyContent 
        value={value} 
        handleChangeIndex={handleChangeIndex} 
        skillsList={skillsList} 
        experienceList={experienceList} 
      />
    </CardContent>
  </Card>

export default ResumeBodyCard;