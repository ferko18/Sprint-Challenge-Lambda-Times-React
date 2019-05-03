import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const CardContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;

`;
const HeadLinediv = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;
const Authordiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;
const ImgageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`;


const Card = props => {
  return (
    <CardContainer>
       <HeadLinediv>{props.headline}</HeadLinediv>
       <Authordiv>
        <ImgageContainer>
          <img src={props.img} />
        </ImgageContainer>
        <span>By {props.author}</span>
      </Authordiv>
      </CardContainer>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
