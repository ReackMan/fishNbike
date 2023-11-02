import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {AboutCard} from "./aboutCard/AboutCard";


const aboutCards = [
    {
        title: 'Наши электронаборы',
        img: 'bike',
        queue: '1'
    },
    {
        title: 'Наши лодки',
        img: 'sonar',
        queue: '2'
    }
]
const aboutCard1 = [
    {
        title: 'Высокая надежность',
        text: 'за счет продуманной конструкции, ' +
            'никогда не работающей на пределе своих возможностей',
        img: 'clock'
    },
    {
        title: 'Простота установки',
        text: 'без необходимости что-то переделывать в велосипеде ' +
            'или докупать дополнительные компоненты',
        img: 'tick'
    },
    {
        title: 'Высокая надежность',
        text: 'надежные комплектующие, контроллер с запасом мощности, ' +
            'быстрозаряжаемые сверхкомпактные аккумуляторы большой емкости',
        img: 'piggy-bank'
    },
]
const aboutCard2 = [
    {
        title: 'Точное управление',
        text: '',
        img: 'settings'
    },
    {
        title: 'Данные по эхолокации на дисплее',
        text: '',
        img: 'display'
    },
    {
        title: 'Атопилот доставит в нужную точку',
        text: '',
        img: 'road'
    },
    {
        title: 'Тяжелый и устойчивый на воде',
        text: '',
        img: 'boat'
    },
]

const companyText = 'Наша компания "FishNbike" предлагает революционное решение для любителей велопрогулок и рыбалки.\n' +
    '\n' +
    'Наша команда экспертов работает над созданием инновационных устройств, которые помогут рыбакам повысить эффективность ловли, а также любителям велопрогулок сделать их более комфортными. Мы стремимся предложить нашим клиентам передовые технологии, которые делают эти процессы более удобными, интересными и успешными.\n' +
    '\n' +
    'Наша компания предлагает различные модели роботов для рыбалки и велонаборов, которые могут быть настроены под индивидуальные потребности каждого клиента. Мы также предоставляем гарантию качества и техническую поддержку для всех наших устройств.\n' +
    '\n' +
    'Мы гордимся тем, что предлагаем инновационные решения для улучшения вашего опыта и стремимся помочь каждому достичь больших успехов в своем хобби. Будьте с нами и откройте для себя новый уровень эффективности и удовольствия от рыбной ловли и велопрогулок с технологиями "FishNbike".'

type AboutPropsType = {

}

export const About = (props: AboutPropsType) => {


    return (
        <StyledAbout>
            <Container>
                <FlexWrapper direction='column'>
                    <StyledAboutCards>
                        <AboutCard card={aboutCard1} cardInfo={aboutCards[0]}/>
                        <AboutCard card={aboutCard2} cardInfo={aboutCards[1]}/>
                    </StyledAboutCards>
                    <AboutCompany>
                        <h2>О КОМПАНИИ</h2>
                        <p>{companyText}</p>
                    </AboutCompany>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
  //margin-top: 200px;
`

const StyledAboutCards = styled.div`

`

const AboutCompany = styled.div`
  width: 60%; 
`
