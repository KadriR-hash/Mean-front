import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(ch: string): any {
  let sh : string='';
  let i : number;
  // treatement of the function
  for(i=1;i<=ch.length;i++){
    sh = sh + ch[ch.length-i];
  }
    return sh;
  }

}
