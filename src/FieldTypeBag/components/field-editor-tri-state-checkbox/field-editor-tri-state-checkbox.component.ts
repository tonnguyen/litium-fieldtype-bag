import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseFieldEditor } from 'litium-ui';
@Component({
    selector: 'field-editor-tri-state-checkbox',
    templateUrl: './field-editor-tri-state-checkbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorTriStateCheckbox extends BaseFieldEditor {
    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    getBoolValue(language: string): any {
        const value = this.getValue(language);
        if (value === null || typeof value === 'undefined') {
            return null;
        }
        return value === true;
    }
}