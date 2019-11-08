import { defaultState } from '../utils/common';
import { fieldFramework } from '../utils/field-framework-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { moduleMetadata } from '@storybook/angular/';
import { UiModule } from 'litium-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from '../utils/with-layout';
import { withRedux } from '../utils/with-redux';
import { withTranslation } from '../utils/with-translation';
import { ReactFieldEditorModule } from 'litium-react-field-editor';
import { FieldEditorReactText } from '../../src/FieldTypeBag/components/react-text/field-editor-react-text.component';

export default { 
    title: 'React',
    decorators: [
        withRedux(state => state, defaultState),
        moduleMetadata({
            declarations: [FieldEditorReactText],
            imports: [
                UiModule.forRoot(),
                ReactFieldEditorModule,
                HttpClientTestingModule,
            ],
        }),
        withKnobs,
        withLayout(content => `<div class="layout">${content}</div>`),
        withTranslation({
            'fieldEditor.edit': 'Edit: ',
            'fieldEditor.view': 'View: ',
            'fieldEditor.undo': 'Undo',
        }),
    ], 
}

export const text = () => ({
    template: `<field-editor-react-text 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="isCultureSpecific"
        [valueAsDictionary]="true"
    ></field-editor-react-text>`,
    props: {
        ...fieldFramework('foo', 'React text field'),
    },
});