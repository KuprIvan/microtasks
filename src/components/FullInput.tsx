import React, {ChangeEvent, FC, useEffect, useState} from 'react';
// import {MessageType} from './App';

type FullInputType = {
    onClickHandler: (title: string) => void
}

export const FullInput = (props: FullInputType ) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.onClickHandler(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} type="text" name="" id=""/>
            <button onClick={onClickButtonHandler}>Add</button>
        </div>
    );
};

