import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      style={{ top: '1rem', right: '1rem', position: 'fixed', zIndex: 999 }}
      onClick={() => toggleColorScheme()}
      variant={'outline'}
      size={'lg'}
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
      })}
    >
      {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoonStars size={20} />}
    </ActionIcon>
  );
}
