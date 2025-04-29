import React from "react";
import {
  HomeDetails,
  HomeImage,
  StyledHome,
  Subtitle,
  SubtitleItalic,
  SubtitleRegular,
  SubTitles,
  SupTitle,
  Title,
} from "../../styles/Home.styled/Home.styled";
import { HomeImg } from "../../styles/Home.styled/Home.styled";
import img from "../../assets/home-image.jpg";

const Home = () => {
  return (
    <StyledHome id="home">
      <HomeDetails>
        <SupTitle>Hello, I'm Khushi Jain!</SupTitle>
        <Title>
          UI/UX & Graphic <span>De</span>signer, <br /> based in India.
        </Title>
        <SubTitles>
          <Subtitle>
            <SubtitleRegular>Jabalpur</SubtitleRegular>
            <SubtitleItalic>* AVAILABLE WORLDWIDE</SubtitleItalic>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>UI/UX . Graphic Design </SubtitleRegular>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>(2025) ALL RIGHTS RESERVED</SubtitleRegular>
          </Subtitle>
        </SubTitles>
      </HomeDetails>
      <HomeImage>
        <HomeImg src={img} alt="Home" />
      </HomeImage>
    </StyledHome>
  );
};

export default Home;
