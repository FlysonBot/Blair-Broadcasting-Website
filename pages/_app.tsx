import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Header, Text } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { HeaderResponsive } from '../components/Header';
import { FooterSocial } from '../components/Footer';
import { useRouter } from 'next/router';

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

const ClubGreenColors = {
  50: '#dbfff3',
  100: '#aeffdf',
  200: '#7effcb',
  300: '#4dffb6',
  400: '#22ffa2',
  500: '#0fe688',
  600: '#00b369',
  700: '#00804a',
  800: '#004e2c',
  900: '#001c0c',
}

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };


  const { pathname } = useRouter();
  const initPath = pathname;

  return (
    <div >
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
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
              clubGreen: [
                ClubGreenColors[100],
                ClubGreenColors[100],
                ClubGreenColors[200],
                ClubGreenColors[300],
                ClubGreenColors[400],
                ClubGreenColors[500],
                ClubGreenColors[600],
                ClubGreenColors[700],
                ClubGreenColors[200],
                ClubGreenColors[900],
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
            <main style={{paddingTop:(initPath === "/" || initPath === "/home") ? 0 : 60}}>
            <Component {...pageProps} />
            </main>
            <FooterSocial/>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
