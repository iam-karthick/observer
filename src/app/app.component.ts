import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Pipe } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent  { 
  a: number = 1.259;
  inr:number=99;
  mydate : number = Date.now();
  name:string='karthcik';
  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  oddNumbers: Array<number> = [1, 3, 5, 7, 9];
  evenNumbers: Array<number> = [2, 4, 6, 8, 10];
constructor(){
  
  const test=Observable.create((value:Observer<string>)=>{
    setTimeout(()=>{
      value.next('first value');
    },1000);
    setTimeout(()=>{
      value.next('second value');
    },2000);
    setTimeout(()=>{
      value.error('error value');
    },5000);
    setTimeout(()=>{
      value.complete();
    },9000)
  });

  test.subscribe(
    (res:string)=>{
      console.log(res);
    },
    (err:string)=>{
      console.log(err);
    },
      ()=>{
        console.log("completed")
      }
    );
}
}

