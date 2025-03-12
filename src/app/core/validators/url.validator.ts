import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function urlValidator():ValidatorFn{
    
    return (control:AbstractControl):ValidationErrors | null=>{
        if(!control.value){
            return null;
        }
        const regex = /^(http|https):/;
        const valide = regex.test(control.value);
        return valide?null:{emailInvalide:{message:"Url non comforme au format"}}
    }
}