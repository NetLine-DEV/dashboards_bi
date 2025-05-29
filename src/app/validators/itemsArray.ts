import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minItemsArray(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return (control.value && control.value.length >= min) ? null : { minItems: { requiredLength: min, actualLength: control.value.length } };
  };
}