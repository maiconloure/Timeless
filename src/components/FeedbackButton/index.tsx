import { Button } from 'capstone-project';
import React, { useState } from 'react';

import * as St from './styled';

const FeedbackButton = () => {
  const [handleConfirm, setHandleConfirm] = useState(false);
  return (
    <St.FeedBackContainer>
      <div className="tooltip">
        <Button
          fontSize="1.9rem"
          width="140px"
          height="40px"
          radius="2px"
          onClick={() => {
            setHandleConfirm(!handleConfirm);
          }}>
          feedback
        </Button>
        <span className="tooltiptext">Ajude-nos a melhorar!</span>
      </div>

      {handleConfirm && (
        <St.ConfirmFeedBack>
          <St.Message>Você será redirecionado para um formulário do Google.</St.Message>
          <St.Buttons>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQ19Ikk1f2XLbEhYMPkdIcAtZK8T4XWC2u-gCSPJ4InUvpSA/viewform"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                fontSize="1.8rem"
                width="100px"
                height="30px"
                radius="2px"
                onClick={() => {
                  setHandleConfirm(false);
                }}>
                permitir
              </Button>
            </a>
            <Button
              fontSize="1.8rem"
              width="90px"
              height="30px"
              radius="2px"
              onClick={() => {
                setHandleConfirm(false);
              }}>
              negar
            </Button>
          </St.Buttons>
        </St.ConfirmFeedBack>
      )}
    </St.FeedBackContainer>
  );
};

export default FeedbackButton;
