import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'primeng/colorpicker';
import { defaultState } from '../utils/common';
import { FieldEditorColor } from '../../src/FieldTypeBag/components/field-editor-color/field-editor-color.component';
import { fieldFramework } from '../utils/field-framework-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { moduleMetadata } from '@storybook/angular/';
import { UiModule } from 'litium-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from '../utils/with-layout';
import { withRedux } from '../utils/with-redux';
import { withTranslation } from '../utils/with-translation';

export default { 
    title: 'FieldEditorColor',
    decorators: [
        withRedux(state => state, defaultState),
        moduleMetadata({
            declarations: [FieldEditorColor],
            imports: [
                UiModule.forRoot(),
                HttpClientTestingModule,
                ColorPickerModule,
                BrowserAnimationsModule,
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

export const color = () => ({
    template: `<field-editor-color 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="isCultureSpecific"
        [valueAsDictionary]="true"
    ></field-editor-color>`,
    props: {
        ...fieldFramework('foo', 'Color field'),
    },
});