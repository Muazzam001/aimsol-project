import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeBetweenSpaces',
  standalone: true
})
export class RemoveBetweenSpacesPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    return value !== undefined ? value.replace(/\s/g, "") : 'undefined';
  }

}
