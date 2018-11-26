import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {

  /**
   * Takes a value and change \n to <br />
   */
  transform(msg: string, ...args) {

    const breakTag = '<br />';
    msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');

    return msg;
  }

}
