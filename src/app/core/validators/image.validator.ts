import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
const MaxAllowed = 10;
const InKB = 1024;
export function imageSizeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const imageSizeInKB = Math.round(control.value / InKB);
    return imageSizeInKB >= MaxAllowed
      ? null
      : { imageInvalide: { message: 'Taille du fichier depassant 10M' } };
  };
}
