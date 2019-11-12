import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PasswordModule } from 'primeng/password';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { FieldEditorGoogleMap } from './components/field-editor-google-map/field-editor-google-map.component';
import { FieldEditorGoogleMapSetting } from './components/field-editor-google-map-setting/field-editor-google-map-setting.component';
import { FieldEditorPassword } from './components/field-editor-password/field-editor-password.component';
import { FieldEditorColor } from './components/field-editor-color/field-editor-color.component';
import { FieldEditorTriStateCheckbox } from './components/field-editor-tri-state-checkbox/field-editor-tri-state-checkbox.component';
import { UiModule } from 'litium-ui';
import { AgmCoreModule } from 'tonnguyen-agm-core';

import { ReactFieldEditorModule } from 'litium-react-field-editor';
import { FieldEditorReactText } from './components/react-text/field-editor-react-text.component';
import { FieldEditorReactRte } from './components/react-rte/field-editor-react-rte.component';

@NgModule({
    declarations: [
        // custom components should be declared in 'declarations'
        FieldEditorPassword,
        FieldEditorColor,
        FieldEditorTriStateCheckbox,
        FieldEditorGoogleMap,
        FieldEditorGoogleMapSetting,
        FieldEditorReactText,
        FieldEditorReactRte,
    ],
    imports: [ 
        AgmCoreModule,
        CommonModule,
        ReactFieldEditorModule,
        UiModule,
        TranslateModule,
        PasswordModule,
        ColorPickerModule,
        TriStateCheckboxModule,
    ]
})
export class FieldTypeBag { }