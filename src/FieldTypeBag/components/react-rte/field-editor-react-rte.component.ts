import { BaseFieldEditor } from 'litium-ui';
import { RichTextFieldEditor } from './react-rte';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    } from '@angular/core';

@Component({
    selector: 'field-editor-react-rte',
    templateUrl: './field-editor-react-rte.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorReactRte extends BaseFieldEditor {
    previewComponent = RichTextFieldEditor;
    editComponent = RichTextFieldEditor;

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    get fieldEditor() : BaseFieldEditor {
        return this;
    }
}