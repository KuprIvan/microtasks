import React from 'react';


type AddButtonType = {
    name: string
    callBack: () => void


}


export const AddButton = (props: AddButtonType) => {

    const callBackButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={callBackButtonHandler}>{props.name}</button>
    );
};

