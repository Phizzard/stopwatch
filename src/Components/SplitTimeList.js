import React from "react";
import { array } from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const List = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  max-height: 325px;
  max-width: 100vw;
  padding: 0;
`;

const Item = styled.li`
  font-size: 22px;
  font-weight: bold;
  padding: 0.1rem 0.25rem;
`;

const SplitTimeList = ({ items }) => {
  return (
    <Wrapper>
      <List>
        {items &&
          items.map((item, index) => (
            <Item key={`${index}-${item}`}>{item}</Item>
          ))}
      </List>
    </Wrapper>
  );
};

SplitTimeList.propTypes = {
  items: array.isRequired
};

export default SplitTimeList;
