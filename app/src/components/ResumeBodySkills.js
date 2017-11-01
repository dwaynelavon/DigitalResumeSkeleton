
import React from 'react';
import {ListItem, ListItemIcon, List} from 'material-ui';
import TabContainer from './TabContainer';
import CodeIcon from 'material-ui-icons/Code';

const skillListItems = (skills) => skills.map(skill => 
  <ListItem key={skill.replace(/ /g, '')} disableGutters={true} className="card_skills">
    <ListItemIcon>
      <CodeIcon className="card__icon" />
    </ListItemIcon>
    <div className="card__skills-text">{skill}</div>
  </ListItem>
)

const ResumeBodySkills = ({skills}) =>
  <div className='card__content-view'>
    <TabContainer>
      <List>
        {skillListItems(skills)}
      </List>
    </TabContainer>
  </div>

export default ResumeBodySkills;