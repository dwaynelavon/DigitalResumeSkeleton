import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import ResumeData from '../resume-data';
import { Home } from '../components/home'

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => this.setState({ value })

  handleChangeIndex = index => this.setState({ value: index })

  render() {  
    const homeProps = {
      myName: ResumeData.myName,
      value: this.state.value,
      handleChange: this.handleChange,
      handleChangeIndex: this.handleChangeIndex,
      tabLabels: ResumeData.tabLabels,
      skillsList: ResumeData.skillsList,
      experienceList: ResumeData.experienceList,
      avatar: avatar,
      profileSummary: ResumeData.profileSummary,
      buttonLinks: ResumeData.buttonList
    }
    return (
      <Home {...homeProps}/>
    );
  }
}

export default HomeContainer;
