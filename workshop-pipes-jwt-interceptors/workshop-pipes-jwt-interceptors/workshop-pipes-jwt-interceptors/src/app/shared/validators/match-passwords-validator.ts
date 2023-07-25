import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordCtrlOne: string,
  passwordCtrlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passCtrlOne = group.get(passwordCtrlOne);
    const passCtrlTwo = group.get(passwordCtrlTwo);
    return passCtrlOne?.value === passCtrlTwo?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
