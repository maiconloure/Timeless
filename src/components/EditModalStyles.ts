import { Modal } from 'capstone-project';
import styled from 'styled-components';

export const Background = styled.div`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  position: fixed;

  -webkit-backdrop-filter: grayscale(80%) blur(5px);
  backdrop-filter: grayscale(80%) blur(5px);
`;

export const CardModal = styled(Modal)`
  div {
    &:last-child {
      padding: 5px !important;
    }
  }
`;

export const MenuModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardModalButton = styled.button`
  background-color: var(--complement-color-0);
  color: var(--color-primary-4);
  background-color: var(--color-primary-1);
  /* color: var(--color-primary-4); */
  width: 90px;
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin: 5px;

  :hover {
    background-color: var(--complement-color-1);
    cursor: pointer;
    font-weight: bold;
    border-top: none;
  }

  :active {
    opacity: 0.5;
  }
`;

export const CardModalSection = styled.div`
  color: var(--color-primary-4);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 550px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  div {
    padding: 10px;

    &:nth-child(4) {
      margin-right: 17px;
    }
    input {
      font-size: 1.8rem;
      padding: 0px 10px;

      @media (min-width: 550px) {
        max-width: 350px;
        min-width: 290px;
      }
    }
    svg {
      width: 1.8rem;
    }
  }

  button {
    border-radius: 3px;
    font-size: 2.6rem;
    margin-top: 10px;
    height: 50px;
    width: 200px;

    @media (min-width: 550px) {
      margin: 15px;
    }
    :hover {
      color: var(--complement-color-0);
    }
  }

  h2,
  h3 {
    text-align: left;
    align-self: flex-start;
    margin: 20px 0 0 20px;
  }

  button:nth-child(3) {
    background-color: var(--complement-color-0);
    :hover {
      background-color: var(--color-primary-4);
    }
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px;
  width: 100%;
  max-width: 230px;
  min-width: 230px;
  margin: 10px 0;

  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  @media (min-width: 550px) {
    max-width: 500px;
    min-width: 300px;
  }
`;

export const CardModalDescription = styled.p`
  margin: 5px;
  @media (min-height: 768px) and (min-width: 968px) {
    display: inline-block;
    font-size: 12px;
  }
`;
