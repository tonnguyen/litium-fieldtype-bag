import { ExtendedFormGroup } from 'litium-ui';
import { FormControl } from '@angular/forms';
import { boolean, text as textKnob } from '@storybook/addon-knobs';

export const fieldFramework = (name, label = 'Field', validators = []) => ({
    ...field(name, label, validators),
    tooltip: textKnob('tooltip', null),
})

export const field = (name, label = 'Field', validators = [], withCulture = true) => ({
    form: new ExtendedFormGroup({
        [name]: new FormControl(null, validators),
    }),
    name,
    label,
    isCultureSpecific: withCulture ? boolean('isCultureSpecific', true) : undefined,
})