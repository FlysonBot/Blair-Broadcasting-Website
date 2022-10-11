import { createStyles, Container, Group, ActionIcon, Image, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
            <Image width="3rem" src="favicon.png"></Image>
            <Text size={20}>Blair Broadcasting</Text>
            </Group>
        <Group spacing={0} className={classes.links} position="right" noWrap>
            
          <ActionIcon size="lg" style={{display:"none"}}>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <Link href="https://www.youtube.com/channel/UCMcQBO68MEdJ0D-H4lvltgw?sub_confirmation=1" passHref>
          <ActionIcon component="a" size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          </Link>
          <Link href="https://instagram.com/blairbroadcasting" passHref>
          <ActionIcon size="lg" component='a'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}