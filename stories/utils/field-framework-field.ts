import { ExtendedFormGroup } from 'litium-ui';
import { FormControl } from '@angular/forms';
import { boolean, text as textKnob } from '@storybook/addon-knobs';

export const fieldFramework = (name, label = 'Field', value = null, validators = [], withCulture = true) => ({
    ...field(name, label, value, validators, withCulture),
    tooltip: textKnob('tooltip', null),
})

export const field = (name, label = 'Field', value = null, validators = [], withCulture = true) => ({
    form: new ExtendedFormGroup({
        [name]: new FormControl(value, validators),
    }),
    name,
    label,
    isCultureSpecific: withCulture ? boolean('isCultureSpecific', true) : undefined,
})