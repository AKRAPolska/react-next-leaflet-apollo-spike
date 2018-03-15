import React from 'react';
import styled, { css } from 'styled-components';

import withData from '../lib/apollo';
import FullScreenMap from '../components/FullScreenMap';
import SampleData from '../components/SampleData';

const TwoColumnTable = styled.div`
  height: 100%;
  display: flex;
`;

const Column = styled.div`
  flex: 1;

  ${props =>
    props.withPadding &&
    css`
      padding: 10px;
    `};
`;

const Index = () => (
  <TwoColumnTable>
    <Column>
      <FullScreenMap />
    </Column>
    <Column withPadding>
      <h1>Dane z graphql</h1>
      <SampleData />
    </Column>
  </TwoColumnTable>
);

export default withData(Index);
