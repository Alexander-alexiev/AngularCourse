import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false => not pure function will re-render
  // pure: true => pure function will be memoised === DEFAULT
})
export class ReducePipe<T> implements PipeTransform {

  transform(arr: T[], reduceFn: (acc: any, curr: T) => any, initialValue: T): unknown {
    return arr.reduce(reduceFn, initialValue);
  }

  // sum(a: number, b: number): number{
  //   return a + b;
  // }

  // <h1>
  //   Sum of list: 
  //   {{ user.list | reduce: sum : 0}}
  // </h1>
}
