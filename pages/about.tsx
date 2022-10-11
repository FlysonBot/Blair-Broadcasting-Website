import { Center, Title } from "@mantine/core";
import { ArticlesCardsGrid } from "../components/BbcCards";
import {HeroicAbout } from "../components/HeroicAbout"
import {PeopleGroup} from "../components/About/People"

export default function Survey() {
    return (
      <>
      <Center style={{paddingTop:"3rem"}}>
      <HeroicAbout/>
      </Center>

      <Center>
        <Title order={2}>Highlights</Title>
       </Center>
      <Center>
        <ArticlesCardsGrid></ArticlesCardsGrid>
       </Center>
       <Center style={{paddingBottom:"4rem"}}>
        <Title order={3}>Other Members</Title>
       </Center> 
       <Center>
        <PeopleGroup/>
       </Center>
      </>
    );
  }
  