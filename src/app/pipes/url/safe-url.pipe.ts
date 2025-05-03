import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {

  transform(value: any): string | null {
    if (!value) {
      return null;
    }

    // Verifica se o valor é um File ou Blob antes de chamar createObjectURL
    if (value instanceof File || value instanceof Blob) {
      return URL.createObjectURL(value);
    } else if (typeof value === 'string') {
      return value; // Se for string, assume que já é uma URL válida
    }

    console.warn('safeUrlPipe: O valor fornecido não é um arquivo válido.', value);
    return null;
  }

}
