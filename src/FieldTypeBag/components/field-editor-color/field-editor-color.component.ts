import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseFieldEditor } from 'litium-ui';
@Component({
    selector: 'field-editor-color',
    templateUrl: './field-editor-color.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorColor extends BaseFieldEditor {
    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }
}