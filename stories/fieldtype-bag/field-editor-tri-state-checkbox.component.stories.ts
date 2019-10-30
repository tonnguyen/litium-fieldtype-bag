import { defaultState } from '../utils/common';
import { FieldEditorTriStateCheckbox } from '../../src/FieldTypeBag/components/field-editor-tri-state-checkbox/field-editor-tri-state-checkbox.component';
import { fieldFramework } from '../utils/field-framework-field';
import { UiModule } from 'litium-ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { moduleMetadata } from '@storybook/angular/';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from '../utils/with-layout';
import { withRedux } from '../utils/with-redux';
import { withTranslation } from '../utils/with-translation';

export default { 
    title: 'FieldEditorTriStateCheckbox',
    decorators: [
        withRedux(state => state, defaultState),
        moduleMetadata({
            declarations: [FieldEditorTriStateCheckbox],
            imports: [
                UiModule.forRoot(),
                HttpClientTestingModule,
                TriStateCheckboxModule,
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

export const triStateCheckbox = () => ({
    template: `<field-editor-tri-state-checkbox 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="isCultureSpecific"
        [valueAsDictionary]="true"
    ></field-editor-tri-state-checkbox>`,
    props: {
        ...fieldFramework('foo', 'Tri state field'),
    },
});