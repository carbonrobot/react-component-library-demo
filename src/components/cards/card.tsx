import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const CardContainer = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid ${props => props.theme.colors[Colors.Border]};
  border-radius: ${props => props.theme.cornerRadius};
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

const CardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
`;

interface Props {
  title?: string;
}

export const Card: React.FC<Props> = ({ children, title, ...props }) => (
  <CardContainer {...props}>
    <CardBody>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardBody>
  </CardContainer>
);
