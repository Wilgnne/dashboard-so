import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;

  background-color: #fcfcfc;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
  padding: 15px;

  width: 512px;
  height: 120px;

  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;

  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const IconBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 49px;
  height: 49px;
  background: ${props => props.color || "palevioletred"} ;
`;

const Body = styled.div`
  margin-top: 15px;
  p {
    color: rgba(0, 0, 0, 0.75);
  }
`;

export { Container, Header, Body, IconBorder };