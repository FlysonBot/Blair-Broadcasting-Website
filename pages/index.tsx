import { Anchor, Center, Container, createStyles, Image, Text, Title } from '@mantine/core';
import { StatsControls } from '../components/BbcStats';

var useStyles = createStyles((theme) => ({
  title: {
    paddingTop: '100px',
    color: 'white',
    //color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  titleEmphasis: {
    color: '#F94444',
  },
  blob: {
    opacity: 0.3,
  },
}));

export default function HomePage() {
  const { classes } = useStyles();
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("hero.png")',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <Title className={classes.title} align="center">
          Welcome to the <br />
          <img
            src="blob1.svg"
            className={classes.blob}
            style={{
              height: '11rem',
              position: 'absolute',
              zIndex: 0,
              filter: 'brightness(85%)',
              left: 555,
              bottom: 715,
            }}
          ></img>
          <img
            src="blob1.svg"
            className={classes.blob}
            style={{
              height: '13rem',
              right: 560,
              bottom: 700,
              position: 'absolute',
              zIndex: 0,
              transform: 'rotate(90deg)',
              filter: 'brightness(85%)',
            }}
          ></img>
          <img
            src="blob1.svg"
            className={classes.blob}
            style={{
              height: '8rem',
              right: 950,
              bottom: 700,
              position: 'absolute',
              zIndex: 0,
              transform: 'rotate(134deg)',
              filter: 'brightness(85%)',
            }}
          ></img>
          <img
            src="blob1.svg"
            className={classes.blob}
            style={{
              height: '9rem',
              right: 1220,
              bottom: 730,
              position: 'absolute',
              zIndex: 0,
              transform: 'rotate(223deg)',
              filter: 'brightness(85%)',
            }}
          ></img>
          <Text
            style={{ zIndex: 999, position: 'relative' }}
            className={classes.titleEmphasis}
            inherit
            component="span"
          >
            Blair Broadcasting Club
          </Text>
        </Title>
        <Text align="center" size="lg" sx={{ maxWidth: 580, color: 'white' }} mx="auto" mt="xl">
          Our mission is to inform the Blair student body about school events and encourage school
          spirit. We think every student in school should know what is happening inside the school,
          so we make a video every week.
        </Text>
      </div>
      <Center style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <Title order={3} size="h1">
          Our Achievements
        </Title>
      </Center>
      <Container style={{ paddingBottom: '6rem' }}>
        <StatsControls />
        <Center style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
          <Title order={2} size="h1">
            Broadcasting Video of the week
          </Title>
        </Center>
        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o_T5wEcVeHY"
            title="YouTube video player"
            frameBorder="0"
            allow={
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            }
            allowFullScreen={true}
          ></iframe>
        </Center>
      </Container>
    </>
  );
}
