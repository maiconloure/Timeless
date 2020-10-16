import React from 'react';
import styled from 'styled-components';

interface FastCardProps {
  title: string;
  setTitle: any;
  subtitle: string;
  setSubtitle: any;
  time: string;
  setTime: any;
}

const FastCard = ({ title, setTitle, subtitle, setSubtitle, time, setTime }: FastCardProps) => {
  return (
    <Container>
      <Title type="text" value={title} onChange={(evt) => setTitle(evt.currentTarget.value)} />
      <SubTitle
        type="text"
        value={subtitle}
        onChange={(evt) => setSubtitle(evt.currentTarget.value)}
      />
      <Line />
      <Time type="text" value={time} onChange={(evt) => setTime(evt.currentTarget.value)} />
    </Container>
  );
};

export default FastCard;

const Container = styled.div`
  border: 2px solid #ff6347;
  background: #b22222;
  width: 200px;
  height: 100px;
  padding: 6px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-left: 0;

  input {
    max-width: 180px;
    outline: none;
    border: none;
    background: none;
    color: #fff;
  }
`;

const Title = styled.input`
  font: 700 2.1rem Inter;
  color: #fff;
`;

const SubTitle = styled.input`
  font: 600 1.5rem Inter;
`;

const Line = styled.div`
  width: 180px;
  height: 2px;
  background: #fff;
  margin: 1px 0;
`;

const Time = styled.input`
  font: 600 2.1rem Inter;
  color: #fff;
`;
