import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let result: string;
    result= "Ref- " + value ;
    return result;
  }

}
