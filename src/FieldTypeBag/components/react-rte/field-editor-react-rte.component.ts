import { BaseFieldEditor } from 'litium-ui';
import { RichTextFieldEditor } from './react-rte';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    } from '@angular/core';
import { OnInit } from '@angular/core/src/core';

@Component({
    selector: 'field-editor-react-rte',
    templateUrl: './field-editor-react-rte.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldEditorReactRte extends BaseFieldEditor implements OnInit {
    previewComponent = RichTextFieldEditor;
    editComponent = RichTextFieldEditor;

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    ngOnInit() {
        super.ngOnInit();
        this.form.setControlValue = (controlName: string, value: any, compareFunction = (newValue, oldValue) => newValue === oldValue) => {
            const control = this.form.controls[controlName],
                backupvalue = control['backupValue'],
                dirty = !compareFunction(value, backupvalue);
            if (dirty) {
                control.markAsDirty();
            } else {
                control.markAsPristine();
            }
            // Note: mark dirty state must be done before updating value in order to
            // make FormFieldContainer to update form's dirty state correctly
            control.setValue(dirty ? value : backupvalue);
        }
    }

    get fieldEditor() : BaseFieldEditor {
        return this;
    }

    valueChange(value, editLanguage = '*') {
        const fieldValue = !this.valueAsDictionary ? value : {
            ...this.form.value[this.name],
            [editLanguage]: value
        };
        this.form && 
            this.form.controls[this.name] && 
            this.form.setControlValue(this.name, fieldValue, 
                (newValue, oldValue) => newValue === oldValue);
        this.onChange.emit(fieldValue);
        this._changeDetection && this._changeDetection.markForCheck();
    }
}