import * as React from "react";
import RichTextEditor from 'react-rte';

export const RichTextFieldEditor = ({ name, value, editable, valueChange }) => {
    const rawValue = value || RichTextEditor.createEmptyValue();
    return (
        <>
            {!editable && <RichTextEditor readOnly={true} value={rawValue}/>}
            {editable && <RichTextEditor id={name} value={rawValue} 
                onChange={(value) => valueChange(value)} />}
        </>
    );
};