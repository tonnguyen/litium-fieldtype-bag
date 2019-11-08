import { BaseFieldEditor } from 'litium-ui';
import { Text } from './react-text';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    } from '@angular/core';

@Component({
    selector: 'field-editor-react-text',
    templateUrl: './field-editor-react-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorReactText extends BaseFieldEditor {
    previewComponent = Text;
    editComponent = Text;

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    get fieldEditor() : BaseFieldEditor {
        return this;
    }
}