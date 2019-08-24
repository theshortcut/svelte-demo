import { Box } from 'rebass';
import React from 'react';
import styled from '@emotion/styled';

const Container = styled(Box)`
  code {
    font-size: 1rem;
  }

  th {
    text-align: center;
  }

  th:first-child {
    font-size: 0;
  }

  td {
    padding: 1rem;
    font-size: 1.2rem;
  }

  td:first-child {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export default ({ children }) => <Container css={{ fontSize: '1.8rem' }}>{children}</Container>;
