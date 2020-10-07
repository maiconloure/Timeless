import styled from 'styled-components';

const WriteableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  height: 100%;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const WriteableTop = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  padding: 10px;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 8%;
  background: #f0f0f0;
  color: #555;

  @media (max-width: 720px) {
    height: fit-content;
  }
`;

const WriteableBox = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  padding: 10px;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 92%;
  min-height: 100px;
  background: white;
  text-align: left;
  color: #333;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;

  @media (max-width: 720px) {
    width: 500px;
  }

  @media (max-width: 580px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 300px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Labels = styled.div`
  width: 22%;
  height: 100%;

  @media (max-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TimingLabel = styled.div`
  @media (max-width: 720px) {
    width: 46%;
    flex-direction: column;
  }
`;

const ActionDiv = styled.div`
  @media (max-width: 720px) {
    width: 46%;
    flex-direction: column;
  }
`;

const LabelTitle = styled.h2`
  color: #014d82;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 4px;
`;

const IdLabel = styled.div`
  width: 100%;
  background-color: #8b62fc;
  color: white;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const HourglassLabel = styled.div`
  width: 100%;
  background-color: white;
  color: #014d82;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    strong {
      outline: none;
      width: 50px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const ClockLabel = styled.div`
  width: 100%;
  background-color: white;
  color: #014d82;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ActionLabels = styled.div`
  width: 100%;
  background-color: white;
  color: #014d82;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const IconSmall = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const FeedbackButton = styled.button`
  width: 100%;
  background-color: #cb9700;
  text-align: center;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: white;
  font-size: 2rem;
`;

const ChecklistContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
`;

const Checklist = styled.div`
  width: 75%;
  display: flex;
  flex-flow: column;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const ChecklistTitle = styled.h2`
  color: #014d82;
  font-family: 'Blinker', sans-serif;
  font-size: 2.2rem;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 4px;

  display: flex;
  align-items: center;
`;

const ChecklistBox = styled.div`
  width: 100%;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  height: 100px;
`;

export {
  WriteableContent,
  WriteableTop,
  WriteableBox,
  ContentContainer,
  Main,
  Labels,
  TimingLabel,
  ActionDiv,
  LabelTitle,
  IdLabel,
  HourglassLabel,
  Icon,
  ClockLabel,
  ActionLabels,
  IconSmall,
  FeedbackButton,
  ChecklistContainer,
  Checklist,
  ChecklistTitle,
  ChecklistBox,
};
