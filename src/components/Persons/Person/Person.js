import React from "react";
import styled from "styled-components";
import "./Person.css";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 2px dashed #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;
const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
};
export default person;
