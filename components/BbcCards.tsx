import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Skeleton,
} from '@mantine/core';

const mockdata = [
  {
    title: 'Founder of club (+ a rando image above)',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    job: 'Founder, Interviewer, etc.',
  },
  {
    title: 'Flyson Lin  (+ a rando image above)',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    job: 'Original Website Designer',
  },
  {
    title: 'Eduardo A. Maroto Campos (ultracodez)',
    image:
      'https://media.istockphoto.com/photos/hacker-dark-face-using-laptop-picture-id1133604495?k=20&m=1133604495&s=612x612&w=0&h=QX5zvMG1qvfiz10hE5bSUXMj4eRMRTZF4qg3EIr-ffo=',
    job: 'Experienced Video Editor & Coder',
  },
  {
    title: 'Member Example (+ Placeholder Skeleton)',
    image: '',
    job: 'N/A',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        {article.image === '' ? <Skeleton /> : <Image src={article.image} />}
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.job}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container size={2000} py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
