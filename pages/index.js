import React from 'react';
import styled from 'styled-components';

import FullScreenMap from '../components/FullScreenMap';

const TwoColumnTable = styled.div`
  height: 100%;
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;

const Index = () => (
  <TwoColumnTable>
    <Column>
      <FullScreenMap />
    </Column>
    <Column />
  </TwoColumnTable>
);

export default Index;
