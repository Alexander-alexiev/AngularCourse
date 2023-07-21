import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ResolveEnd } from '@angular/router';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { __setFunctionName } from 'tslib';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const p = new Promise((resolve) => {
  resolve(100);
});
p.then(console.log);

// const o$ = new Observable<number>((obs) => {
//   obs.next(1000);
//   obs.next(2000);
//   obs.next(3000);

//   obs.error(new Error('bad error right here!'));
//   // obs.complete();
//   return () => {

//   };
// })

// o$.pipe(map((num: number) => num + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.error(`Error: ${err}`),
//   complete: () => console.log('Obs Completed')
// });

// function interval(delay: number, count?: number){
//   let counter = 0;
//   return new Observable((obs) => {
//     if(counter === count){
//       obs.complete();
//       return;
//     }

//     const i = setInterval(() => {
//       obs.next(counter++);
//     }, delay);

//     return () => {
//       clearInterval(i);
//     }
//   })
// }

// const subscribtion = interval(1000, 8).subscribe({
//   next: console.log,
//   error: (err) => console.log(`Error: ${err}`),
//   complete: () => console.log('Obs completed!')
// });

// setTimeout(() => {
//   subscribtion.unsubscribe();
// }, 3000);

// SUBJECTS
// const subj$$ = new Subject();
// subj$$.subscribe(console.log);
// subj$$.next(123);

// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.next(400);

// setTimeout(() => {
//   subj$$.subscribe(console.log);
//   subj$$.next(100);

//   setTimeout(() => {
//     subj$$.subscribe(console.log);
//     subj$$.next(1001);
//   }, 2000);
// }, 2000);

// BEHAVIOR SUBJ
const subj$$ = new BehaviorSubject(100);
subj$$.subscribe(console.log);

setTimeout(() => {
  subj$$.next(200);
  subj$$.subscribe(console.log);

  setTimeout(() => {
    subj$$.next(300);
    subj$$.subscribe(console.log);
  }, 2000);
}, 2000);
