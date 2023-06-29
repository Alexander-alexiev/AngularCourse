import { Observable, map } from "rxjs";

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1200);
    }, 4000);
  });
  p.then((data) => console.log('promise', data));
  
  function interval(intervalValue: number){
  return new Observable<number>(observer => {
    // observer.next(1000);
    // observer.next(2000);
    // observer.next(3000);
    let counter = 0;
    const interval = setInterval(() => {
      observer.next(counter++)
    }, intervalValue);
  
    return ()=> {
      clearInterval(interval);
    };
  });
  }
  
  const stream$ = interval(3000).pipe(map(x => x * 2));
  setTimeout(()=> {
    stream$.subscribe({
      next: (x) => console.log('data', x),
      error: (err)=> console.log(`Error occured ${err}`),
      complete: ()=> console.log('Steram has completed'),
      
    });
  },3000);