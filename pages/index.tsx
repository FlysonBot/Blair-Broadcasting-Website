import {
  Anchor,
  Badge,
  Blockquote,
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { Parallax } from 'react-parallax';
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
      color: theme.colorScheme === "dark" ? "white" : "black"
    },
  },
  titleEmphasis: {
    color: '#F94444',
  },
  blob: {
    opacity: 0.3,
  },
  parallax: {},
  parallaxRoot: {
    [theme.fn.smallerThan("md")]: {
      display:"none"
    }
  },
  parallaxMobile: {
    display:"none",
    [theme.fn.smallerThan("md")]: {
      display:"initial"
    }
  }
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <div>
    <>
      <div className={classes.parallaxRoot} style={{ height: '100vh' }}>
        <img
          src="blob1.svg"
          className={classes.blob}
          style={{
            height: '11rem',
            position: 'absolute',
            zIndex: 100,
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
            zIndex: 100,
            transform: 'rotate(90deg)',
            filter: 'brightness(85%)',
          }}
        ></img>
        <img
          src="blob1.svg"
          className={classes.blob}
          style={{
            height: '9rem',
            right: 950,
            bottom: 700,
            position: 'absolute',
            zIndex: 100,
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
            zIndex: 100,
            transform: 'rotate(223deg)',
            filter: 'brightness(85%)',
          }}
        ></img>
        <Parallax className={classes.parallax} blur={{ min: -15, max: 13 }} style={{ height: '100vh' }} bgImage="./hero.webp">
          <div>
            <Title className={classes.title} align="center">
              Welcome to the <br />
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
              Our mission is to inform the Blair student body about school events and encourage
              school spirit. We think every student in school should know what is happening inside
              the school, so we make a video every week.
            </Text>
          </div>
        </Parallax>
      </div>
      <div className={classes.parallaxMobile}>
        
      <Title className={classes.title} align="center">
              Welcome to the <br />
              <Text
                style={{ zIndex: 999, position: 'relative' }}
                className={classes.titleEmphasis}
                inherit
                component="span"
              >
                Blair Broadcasting Club
              </Text>
            </Title>
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
          <Card shadow="sm" radius="md" withBorder p="lg">
            <Card.Section>
              <iframe
                width="1000"
                height="562.5"
                src="https://www.youtube.com/embed/xydmfnRJn3w"
                title="YouTube video player"
                frameBorder="0"
                allow={
                  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                }
                allowFullScreen={true}
              ></iframe>
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Video of the week</Text>
              <Badge color="orange" variant="light">
                New
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A small, simple description of the weekly Blair Broadcasting Club video.
            </Text>

            <Link passHref href="https://youtu.be/xydmfnRJn3w">
              <Button variant="light" color="brand" fullWidth mt="md" radius="md" component="a">
                Watch now
              </Button>
            </Link>
          </Card>
        </Center>
        <Center style={{ paddingTop: '4rem' }}>
          <Blockquote cite=" - Margaret Fuller">
            If you have knowledge, let others light their candles in it
          </Blockquote>
        </Center>
      </Container>
    </>
    </div>
  );
}
