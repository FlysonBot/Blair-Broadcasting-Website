import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Header } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { HeaderResponsive } from '../components/Header';

const BrandColors = {
  50: '#ffe3e3',
  100: '#ffb3b4',
  200: '#fc8283',
  300: '#fa5252',
  400: '#f72221',
  500: '#de0c08',
  600: '#ad0505',
  700: '#7d0203',
  800: '#4c0000',
  900: '#1f0000',
};

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              brand: [
                BrandColors[100],
                BrandColors[100],
                BrandColors[200],
                BrandColors[300],
                BrandColors[400],
                BrandColors[500],
                BrandColors[400],
                BrandColors[700],
                BrandColors[200],
                BrandColors[900],
              ],
            },
            primaryColor: 'brand',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <HeaderResponsive
              links={[
                { link: '/home', label: 'Home' },
                { link: '/schedule', label: 'Schedule' },
                { link: '/survey', label: 'Survey' },
                { link: '/activity', label: 'Activity' },
                { link: '/about', label: 'About us' },
              ]}
            />
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
