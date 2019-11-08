import * as React from "react";

export const Text = ({ name, value, editable, valueChange }) => {
    return (
        <>
            {!editable && <div>{ value || '' }</div>}
            {editable && <input id={name} type='text' value={value || ''} onChange={(event) => valueChange(event.target.value)} />}
        </>
    );
};