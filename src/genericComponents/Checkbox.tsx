import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { colors, fonts } from '../theme/styleVars';

const Checkbox = (props: any) => {
  const { fieldType, label, ...rest } = props;

  return (
    <CAGCheckbox>
      <Form.Check label={label} type={fieldType} {...rest} />
    </CAGCheckbox>
  );
};

const CAGCheckbox = styled(Form.Group)`
  label {
    font: ${fonts.mainFont} ${colors.mainFont};
  }
`;

export default Checkbox;
