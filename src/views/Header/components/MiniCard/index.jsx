import React from 'react';

import { Container, Header, Body, IconBorder } from './styles';

function MiniCard( {title, value, description, Icon, color} ) {

  console.log(Icon);
  return (
    <Container>
      <Header>
        <div>
          <h3>{title}</h3>
          <h2>{value}</h2>
        </div>
        <IconBorder color={color}>
          <Icon size={38} color={'fcfcfc'} />
        </IconBorder>
      </Header>

      <Body>
        <p>{description}</p>
      </Body>
    </Container>
  );
}

export default MiniCard;
