import { defaultState } from '../utils/common';
import { fieldFramework } from '../utils/field-framework-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { moduleMetadata } from '@storybook/angular/';
import { UiModule } from 'litium-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from '../utils/with-layout';
import { withRedux } from '../utils/with-redux';
import { AgmCoreModule } from 'tonnguyen-agm-core';
import { withTranslation } from '../utils/with-translation';
import { FieldEditorGoogleMap } from '../../src/FieldTypeBag/components/field-editor-google-map/field-editor-google-map.component';
import { FieldEditorGoogleMapSetting } from '../../src/FieldTypeBag/components/field-editor-google-map-setting/field-editor-google-map-setting.component';

export default { 
    title: 'FieldEditorGoogleMap',
    decorators: [
        withRedux(state => state, defaultState),
        moduleMetadata({
            declarations: [FieldEditorGoogleMap, FieldEditorGoogleMapSetting],
            imports: [
                UiModule.forRoot(),
                HttpClientTestingModule,
                AgmCoreModule,
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

const mapValue = {
    '*': {
        mapApiKey: 'AIzaSyCJKQWaKlm7S8o1u9zQozF40bsGn6ez_q8',
    }
}

export const map = () => ({
    template: `<field-editor-google-map 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="isCultureSpecific"
        [valueAsDictionary]="true"
    ></field-editor-google-map>`,
    props: {
        ...fieldFramework('foo', 'Google map field', mapValue),
    },
});

export const setting = () => ({
    template: `<field-editor-google-map-setting 
        [form]="form" 
        [name]="name" 
        [label]="label"
        [tooltip]="tooltip"
        [isCultureSpecific]="false"
        [valueAsDictionary]="false"
    ></field-editor-google-map-setting>`,
    props: {
        ...fieldFramework('foo', 'Google map field', { option: {} }, [], false),
    },
});