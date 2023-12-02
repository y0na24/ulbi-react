import { FC } from 'react'

import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button } from '../../shared/ui/Button'

import s from './ThemeSwitcher.module.scss'
import { ThemeButton } from '../../shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(s.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}