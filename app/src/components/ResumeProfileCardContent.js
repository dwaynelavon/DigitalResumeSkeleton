import React from 'react';
import {
  CardContent, Typography, Divider
} from 'material-ui';


const ResumeProfileCardContent = ({profileSummary}) => (
  <CardContent className="card__content">
    <Typography type="headline" component="h2"> Profile </Typography>
    <Divider style={{margin: '10px 0'}} />
    <Typography component="p"> {profileSummary} </Typography>
  </CardContent>
)

export default ResumeProfileCardContent;