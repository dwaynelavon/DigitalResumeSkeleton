import React from 'react';
import {Button} from 'material-ui';

const ButtonLinkList = ({buttons}) => 
  buttons.map(button => 
    (
      <Button dense onClick={() => {window.location.href = button.link}} color="primary" key={button.label}>
        {button.label}
      </Button>
    )
  );

export default ButtonLinkList;