import React, { Component } from 'react';
import {ResumeProfileCard, ResumeBodyCard} from '../components';
import avatar from '../images/avatar.png';
import './Home.css';
import ResumeData from '../ResumeData';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => this.setState({ value })

  handleChangeIndex = index => this.setState({ value: index })

  render() {  
    const resumeBodyProps = {
      value: this.state.value,
      handleChange: this.handleChange,
      handleChangeIndex: this.handleChangeIndex,
      tabLabels: ResumeData.tabLabels,
      skillsList: ResumeData.skillsList,
      experienceList: ResumeData.experienceList
    }

    const resumeProfileProps = {
      avatar: avatar,
      profileSummary: ResumeData.profileSummary,
      buttonLinks: ResumeData.buttonList
    }

    return (
      <div className="home">
        <div className="home__background-divider"></div>
        <h2 className="home__title">{ResumeData.myName}</h2>
        <ResumeProfileCard {...resumeProfileProps}/>
        <ResumeBodyCard {...resumeBodyProps} />
      </div>
    );
  }
}

export default Home;
