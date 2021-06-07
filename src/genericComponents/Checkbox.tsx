import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { colors, fonts } from '../theme/styleVars';

const Checkbox = (props: any) => {
  const { formType, label } = props;

  return (
    <CAGCheckbox>
      <Form.Check label={label} type={formType} />
    </CAGCheckbox>
  );
};

const CAGCheckbox = styled(Form.Group)`
  label {
    font: ${fonts.mainFont} ${colors.mainFont};
  }
`;

export default Checkbox;
