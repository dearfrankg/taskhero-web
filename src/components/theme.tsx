import React from 'react'
import {createGlobalStyle, DefaultTheme, ThemeProvider as StyledThemeProvider} from 'styled-components'

export const colors: Record<'dark' | 'light', DefaultTheme> = {
    dark: {
        background: '#20252a',
        card: '#404348',
        text: '#dce1e8',
    },
    light: {
        background: '#e9ecf3',
        card: '#ffffff',
        text: '#20252a',
    },
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.background};
        color: ${(props: any) => props.theme.text};
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        box-sizing: border-box;
        font-family: Sen;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
    }

    #root {
        width: 100vw;
    }

    /* * {
        transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
    } */
`

type ThemeProviderProps = {darkMode: boolean}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({darkMode, children}) => {
    return <StyledThemeProvider theme={darkMode ? colors.dark : colors.light}>{children}</StyledThemeProvider>
}
