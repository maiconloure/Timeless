import {
  PlanCard,
  PlanContainer,
  PlanImage,
  PlanMainContainer,
  PlanInnerContainer,
  PlanText,
} from 'capstone-project';
import React from 'react';

const Card = (props: any) => {
  return (
    <div>
      {props.cardData.map((item: any, index: any) => (
        <div key={index}>
          <PlanCard cardMargin={5} cardPadding={10} cardWidth={275} cardBgColor="#CDD9E2">
            <PlanContainer flexContent="space-between" gap={0}>
              <PlanInnerContainer innerFlexDirection="row" innerPadding={0}>
                <PlanText fontSize={20} fontStyle="italic">
                  {item.cards[0].card.title}
                </PlanText>
                <PlanImage
                  src="https://www.flaticon.com/svg/static/icons/svg/482/482556.svg"
                  imgHeight={25}
                  XMargin={3}
                />
                <PlanImage
                  src="https://image.flaticon.com/icons/png/512/65/65000.png"
                  imgHeight={25}
                  XMargin={3}
                />
              </PlanInnerContainer>
              <PlanText fontSize={20} fontStyle="italic">
                02:00
              </PlanText>
            </PlanContainer>
            <PlanMainContainer gap={5}>
              <PlanInnerContainer innerFlexDirection="column" innerWidth={85} innerPadding={15}>
                <PlanText fontSize={18}>{item.cards[0].card.title}</PlanText>
                <PlanText fontSize={10} Ypos={-2.5} fontStyle="italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aliquid
                  veniam modi at iste illum qui in alias quibusdam dolorem maxime consectetur soluta
                  beatae magni quasi praesentium, quo ab delectus.
                </PlanText>
              </PlanInnerContainer>
              <PlanImage
                src="https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png"
                imgHeight={25}
                imgPosition="relative"
                Xpos={210}
                Ypos={80}
              />
              <PlanImage
                src="https://www.flaticon.com/svg/static/icons/svg/564/564619.svg"
                imgHeight={25}
                imgPosition="relative"
                Xpos={-35}
                Ypos={160}
              />
              <PlanImage
                src="https://www.flaticon.com/svg/static/icons/svg/3208/3208663.svg"
                imgHeight={25}
                imgPosition="relative"
                Xpos={160}
                Ypos={20}
              />
            </PlanMainContainer>
            <PlanContainer flexContent="space-between" gap={0}>
              <PlanInnerContainer innerFlexDirection="row" innerPadding={0}>
                <PlanImage
                  src="https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png"
                  roundImage={`${50}%`}
                  imgHeight={25}
                  XMargin={3}
                />
              </PlanInnerContainer>
              <PlanText
                fontSize={18}
                backgroundColor="white"
                XPadding={4}
                Ypos={-5}
                height={22}
                fontStyle="italic">
                28/09
              </PlanText>
            </PlanContainer>
          </PlanCard>
        </div>
      ))}
    </div>
  );
};
export default Card;
