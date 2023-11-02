import React from 'react';
import styled from "styled-components";
import bike from "../../../../assets/images/bike.png";
import sonar from "../../../../assets/images/sonar.jpg";
import {Icon} from "../../../../components/icon/Icon";


// type AboutCardPropsType = {
//     cardTitle: string
//     firstItemTitle: string
//     firstItemText: string
//     firstItemImg: string
//     secondItemTitle: string
//     secondItemText: string
//     secondItemImg: string
//     thirdItemTitle: string
//     thirdItemText: string
//     thirdItemImg: string
//     fourthItemTitle: string
//     fourthItemText: string
//     fourthItemImg: string
//     cardImg: string
//     queue: string
// }

type AboutCardPropsType = {
    card: { title: string; text: string; img: string; }[]
    cardInfo: { title: string; img: string; queue: string; }
}

export const AboutCard = (props: AboutCardPropsType) => {


    return (
        <StyledAboutCard queue={props.cardInfo.queue}>
            <CardData>
                <h2>{props.cardInfo.title}</h2>
                {props.card.map((item) => (
                    <CardItem>
                        <Icon iconId={item.img}/>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </CardItem>
                ))}
            </CardData>
            <CardImg src={props.cardInfo.img === 'bike' ? bike : sonar}/>
        </StyledAboutCard>
    );
};

const StyledAboutCard = styled.div<{ queue: string }>`
  display: flex;
  flex-direction: ${props => props.queue === '1' ? 'row' : 'row-reverse'};

  background: #f2fc5b;
`

const CardData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const CardItem = styled.div`

`

const CardImg = styled.img`
  position: relative;
  width: 50%;
  height: 300px;
  top: 50%;
  object-fit: cover;
`
