import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getCategory' })
export class GetCategoryPipe implements PipeTransform {
  transform(array: any[], value) {
    return (array.find(a => a. code === value).description);


  }
}
