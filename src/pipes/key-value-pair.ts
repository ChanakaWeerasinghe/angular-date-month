import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args?:string[]){
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}