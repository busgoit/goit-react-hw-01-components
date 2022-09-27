import styled from '@emotion/styled';
import getRandomHexColor from 'utils/getRandomHexColor';
import statistics from 'data/data.json';

export const Section = styled.section`
  width: 400px;
  margin: 10px auto;

  font-size: 18px;
  font-weight: 400;

  border: 4px solid black;
  border-radius: 15px;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
  transform: scale(1.015);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px;

  text-transform: uppercase;
  text-align: center;

  border-radius: 11px 11px 0 0;

  background-color: ${getRandomHexColor()};
`;

export const StatList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;

  border-top: 4px solid black;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  padding-top: 15px;
  padding-bottom: 15px;

  text-align: center;
  flex-basis: calc(100% / ${statistics.length});
  background-color: ${getRandomHexColor()};

  :first-of-type {
    border-bottom-left-radius: 11px;
  }

  :last-child {
    border-bottom-right-radius: 11px;
  }

  :not(:last-child) {
    border-right: 4px solid black;
  }
`;

export const Label = styled.span`
  font-size: 16px;

  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;

  color: #fff;
`;
