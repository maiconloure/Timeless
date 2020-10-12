/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlanCard, PlanContainer, PlanInnerContainer, PlanText, PlanLine } from 'capstone-project';
import React from 'react';

import { FastCardDataInterface } from '../../../redux/actions/interface.action';

const FastCard = ({ fastCard }: { fastCard: FastCardDataInterface }) => (
  <div>
    <PlanCard cardMargin={5} cardPadding={5} cardWidth={180} cardBgColor="#E05555">
      <PlanContainer flexContent="center" gap={5}>
        <PlanText fontSize={16} fontStyle="italic" fontColor="white" textAlign="center">
          {JSON.stringify(fastCard.title)}
        </PlanText>
      </PlanContainer>
      <PlanText fontSize={12} fontStyle="italic" fontColor="white" textAlign="center">
        {JSON.stringify(fastCard.subTitle)}
      </PlanText>
      <PlanLine LineThickness={3} LineColor="white" LineHeight={2} />
      <PlanContainer flexContent="center" gap={2}>
        <PlanInnerContainer innerFlexDirection="column">
          <PlanText fontSize={15} fontStyle="italic" fontColor="white" textAlign="center">
            {JSON.stringify(fastCard.date)}
          </PlanText>
        </PlanInnerContainer>
      </PlanContainer>
    </PlanCard>
  </div>
);

export default FastCard;
