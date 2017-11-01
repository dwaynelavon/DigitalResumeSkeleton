
import React from 'react';
import {List, Typography} from 'material-ui';
import TabContainer from './TabContainer';
import Spacer from './Spacer';

const educationListContainer = (educationList) => educationList.map(education =>
  <div>
    <Typography type="headline" component="h2">
      {education.schoolName}, {education.schoolLocation}
    </Typography>
    <div> {education.major} <Spacer /> {education.graduationSemester}{education.graduationYear} </div>
  </div>
)

const ResumeBodyEducation = ({educationList}) =>
  <TabContainer>
    <List>
      {educationListContainer(educationList)}
    </List>
  </TabContainer>

export default ResumeBodyEducation;


// Sample Education Object
// educationList = [
//   {
//     schoolName: 'Kennesaw State University',
//     schoolLocation: 'Kennesaw, GA',
//     major: 'Computer Science',
//     graduationSemester: 'Fall',
//     graduationYear: '2016'
//   },
// ]