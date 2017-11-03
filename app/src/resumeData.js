import avatar from './images/avatar.png';

const ResumeData = {
  myName: '<Your Name Here>',
  
  avatar: avatar,

  tabLabels: ['Skills','Experience'],
  
  profileSummary: `<Brief overview of what you bring to the table>`,
  
  buttonList: [
    {
      label: 'Github',
      link: '<Link To Your GitHub>'
    },
    {
      label: 'Link 2',
      link: '<Link 2 Address>'
    },
    {
      label: 'Link 3',
      link: '<Link 3 Address>'
    }
  ],

  skillsList: [
    '<Skill 1>', 
    '<Skill 2>',
    '<Skill 3>',
    '<Add more...>',
  ],

  experienceList: [
    {
      company: '<Company 1>',
      projects: [
        {
          id: 1,
          value: `<Project 1>`
        },
        {
          id: 2,
          value: `<Project 2>`
        },
        {
          id: 3,
          value: `<Project 3>`
        }
      ]
    },
    {
      company: '<Company 2>',
      projects: [
        {
          id: 1,
          value: `<Project 1>`
        },
        {
          id: 2,
          value: `<Project 2>`
        },
      ] // end projects array
    } // end project object
  ] // end experienceList array
} // end ResumeData

export default ResumeData;