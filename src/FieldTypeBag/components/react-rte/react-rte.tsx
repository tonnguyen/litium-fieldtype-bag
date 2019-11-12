import * as React from "react";
import * as CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const RichTextFieldEditor = ({ name, value, editable, valueChange }) => {
    return (
        <>
            {!editable && <div dangerouslySetInnerHTML={{__html: value || ''}}/>}
            {editable && <CKEditor id={name} data={value} editor={ClassicEditor}
                onChange={ (event, editor) => {
                    valueChange(editor.getData());
                 }}
            />}
        </>
    );
};