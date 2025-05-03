import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return '*Campo obrigatório*';
    } else if (control.hasError('minlength')) {
      return `*Mínimo de ${control.getError('minlength').requiredLength} caracteres*`;
    } else if (control.hasError('maxlength')) {
      return `*Máximo de ${control.getError('maxlength').requiredLength} caracteres*`;
    }
    return '';
  }
}
