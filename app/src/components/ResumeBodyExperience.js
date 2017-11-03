
import React from 'react';
import {ListItem, ListItemIcon, List, Typography, Divider} from 'material-ui';
import TabContainer from './TabContainer';
import RadioButtonCheckedIcon from 'material-ui-icons/RadioButtonChecked';

const experienceListItems = (experience) => experience.projects.map(project => 
    <ListItem key={project.id} disableGutters={true} className="card__experience">
      <ListItemIcon>
        <RadioButtonCheckedIcon className="card__icon"/>
      </ListItemIcon>
      <div className="card__experience-text">{project.value}</div>
    </ListItem>
)

const experienceListContainer = (experiences) => experiences.map(experience =>
  <div key={experience.company}>
    <Typography type="headline" component="h2">
      {experience.company}
    </Typography>
    <Divider style={{margin: '10px 0'}} />
    {experienceListItems(experience)}
  </div>
)

const ResumeBodyExperience = ({experiences}) =>
  <div className='card__content-view'>
    <TabContainer>
      <List>
        {experienceListContainer(experiences)}
      </List>
    </TabContainer>
  </div>
  

export default ResumeBodyExperience;