import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import checkIconSvg from './check.svg'
import {Card} from './Card'

export const TextStyle = css`
    font-size: 17px;
    color: ${(props) => props.theme.text};
    font-family: inherit;
`

export const Container = styled(Card)`
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Check = styled.div<{checked: boolean}>`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    transition: 0.2s all ease-in-out;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${(props) => props.theme.background};
    cursor: pointer;

    ${(props) =>
        props.checked &&
        css`
            background-color: transparent;
        `}
`

const CheckIcon = styled.img`
    transition: 0.1s opacity ease-in-out;
`

const Label = styled.div`
    position: relative;
    ${TextStyle}
`

const Strikethrough = styled.div<{checked: boolean}>`
    position: absolute;
    top: 50%;
    left: -3px;
    right: -3px;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: center left;
    transition: 0.1s all ease-in-out;

    ${(props) =>
        props.checked &&
        css`
            transform: scaleX(1);
        `};
`

export type Task = {
    id: number
    label: string
    completed: boolean
}

export const Task: React.FC<{task: Task}> = ({task}) => {
    return (
        <Container onClick={() => {}}>
            <Check checked={task.completed}>
                <CheckIcon
                    src={checkIconSvg}
                    style={{opacity: task.completed ? 1 : 0}}
                />
            </Check>
            <Label>
                {task.label}
                <Strikethrough checked={task.completed} />
            </Label>
        </Container>
    )
}
