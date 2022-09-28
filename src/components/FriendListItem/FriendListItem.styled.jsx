import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  width: 340px;

  padding: 10px 20px;
  
  align-items: center;

  border: 4px solid black;
  border-radius: 15px;

  background-color: #C0C0C0;

  :not(:last-child) {
    margin-bottom: 15px;
  }

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
  transform: scale(1.015);
`;

const setOnlineBackgroundColor = props => {
  if (props.isOnline) return 'green';
  return 'red';
};

export const OnLine = styled.span`
  display: block;

  margin-right: 20px;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${setOnlineBackgroundColor};
`;

export const Avatar = styled.img`
  margin-right: 20px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
