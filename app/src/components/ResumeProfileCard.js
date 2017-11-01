import React from 'react';
import {Card, CardMedia, CardActions} from 'material-ui';
import ButtonLinkList from './ButtonLinkList';
import ResumeProfileCardContent from './ResumeProfileCardContent';

const ResumeProfileCard = ({avatar, profileSummary, buttonLinks}) => (
  <Card className="card card__profile-card" elevation={6}>
    <CardMedia className='card__media' image={avatar} />
    <div className="card__content-container">
      <ResumeProfileCardContent profileSummary={profileSummary} />
      <CardActions>
        <ButtonLinkList buttons={buttonLinks}/>
      </CardActions>
    </div>
  </Card>
)

export default ResumeProfileCard;