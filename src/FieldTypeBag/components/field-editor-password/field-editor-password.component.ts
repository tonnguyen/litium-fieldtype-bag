import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseFieldEditor } from 'litium-ui';
@Component({
    selector: 'field-editor-password',
    templateUrl: './field-editor-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorPassword extends BaseFieldEditor {
    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }
}