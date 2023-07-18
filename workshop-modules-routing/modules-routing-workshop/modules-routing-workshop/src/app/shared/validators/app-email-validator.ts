import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn{
    //[^@]{6,}@gmail\.(bg|com)$

    const domainStrings = domains.join('|');
    const regEx = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`);
    return (control) => {
        return control.value === "" || 
        regEx.test(control.value)
        ? null : { appEmailValidator: true }
    }
}