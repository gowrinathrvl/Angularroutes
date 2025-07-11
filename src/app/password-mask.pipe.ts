import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordMask'
})
export class PasswordMaskPipe implements PipeTransform {

  transform(value: String): String {
    return value ? '$'.repeat(value.length) : '';
  }

}
