import { defaultState } from '../utils/common';
import { FieldEditorPassword } from '../../src/FieldTypeBag/components/field-editor-password/field-editor-password.component';
import { fieldFramework } from '../utils/field-framework-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { moduleMetadata } from '@storybook/angular/';
import { UiModule } from 'litium-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from '../utils/with-layout';
import { withRedux } from '../utils/with-redux';
import { withTranslation } from '../utils/with-translation';

export default { 
    title: 'FieldEditorPassword',
    decorators: [
        withRedux(state => state, defaultState),
        moduleMetadata({
            declarations: [FieldEditorPassword],
            imports: [
                UiModule.forRoot(),
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

export const password = () => ({
    template: `<field-editor-password 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="isCultureSpecific"
        [valueAsDictionary]="true"
    ></field-editor-password>`,
    props: {
        ...fieldFramework('foo', 'Password field'),
    },
});