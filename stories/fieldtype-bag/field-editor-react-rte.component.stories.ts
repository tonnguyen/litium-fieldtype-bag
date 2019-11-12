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
import { FieldEditorReactRte } from '../../src/FieldTypeBag/components/react-rte/field-editor-react-rte.component';

export default { 
    title: 'React/Rich text editor',
    decorators: [
        withRedux(state => state, defaultState),
        moduleMetadata({
            declarations: [FieldEditorReactRte],
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

export const richTextEditor = () => ({
    template: `<field-editor-react-rte 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="isCultureSpecific"
        [valueAsDictionary]="true"
    ></field-editor-react-rte>`,
    props: {
        ...fieldFramework('foo', 'React rich text editor field'),
    },
});