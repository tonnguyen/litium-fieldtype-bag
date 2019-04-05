import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PasswordModule } from 'primeng/password';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { FieldEditorPassword } from './components/field-editor-password/field-editor-password.component';
import { FieldEditorColor } from './components/field-editor-color/field-editor-color.component';
import { FieldEditorTriStateCheckbox } from './components/field-editor-tri-state-checkbox/field-editor-tri-state-checkbox.component';
import { UiModule } from 'litium-ui';

@NgModule({
    declarations: [
        // custom components should be declared in 'declarations'
        FieldEditorPassword,
        FieldEditorColor,
        FieldEditorTriStateCheckbox,
    ],
    imports: [ 
        CommonModule,
        UiModule,
        TranslateModule,
        PasswordModule,
        ColorPickerModule,
        TriStateCheckboxModule,
    ]
})
export class FieldTypeBag { }