import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import { useRouter } from 'next/router';
import Image from 'next/image';
import favicon from '../public/favicon.png';
import Link from 'next/link';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: { maxHeight: '1rme' },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('lg')]: {
      paddingRight: '6rem',
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { pathname } = useRouter();
  const initPath = pathname;
  const [active, setActive] = useState(
    links.find((posiLink) => {
      return posiLink.link === initPath || (posiLink.link === '/home' && initPath === '/');
    })?.link
  );
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} passHref>
      <a
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        onClick={(event) => {
          setActive(link.link);
          close();
        }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <div style={{ position: 'fixed', zIndex: 999999, right: 0, left: 0 }}>
      <Header height={HEADER_HEIGHT} className={classes.root}>
        <ColorSchemeToggle />
        <Container className={classes.header}>
          <Group>
            <div style={{ paddingTop: '0.65rem' }}>
              <Image height="60" width="60" src={favicon}></Image>
            </div>
            <Link href="/" passHref>
              <Text component="a" style={{ paddingTop: '2px' }} size="xl" weight={500}>
                Blair Broadcasting
              </Text>
            </Link>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </div>
  );
}
