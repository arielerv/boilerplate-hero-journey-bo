import React from 'react';

import { Container, Wrapper, Items, Item, Right } from './styled';

const Footer = () => (
  <Container>
    <Wrapper>
      <Items noSmall>
        <Item className="no-select" align="left" bold>
          {`v${process.env.REACT_APP_VERSION}`}
        </Item>
      </Items>
      <Items>
        <Item className="no-select">Hero&apos;s Journey</Item>
      </Items>
      <Items noSmall>
        <Right>
          <Item className="no-select">SNAPSHOT</Item>
        </Right>
      </Items>
    </Wrapper>
  </Container>
);

export default Footer;
