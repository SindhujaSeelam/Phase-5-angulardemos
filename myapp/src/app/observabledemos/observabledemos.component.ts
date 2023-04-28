import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observabledemos',
  templateUrl: './observabledemos.component.html',
  styleUrls: ['./observabledemos.component.css']
})
export class ObservabledemosComponent implements OnInit {

  constructor() { }

  private intervalsubscritption:Subscription
  private customeobservablesubscription :Subscription

  ngOnInit(): void {
    this.intervalsubscritption=interval(1000).subscribe((count)=>{
      console.log(count)
    })
  


const customobservable = Observable.create((observer)=>{
  let count =0;
  setInterval(()=>{
    observer.next('A'+count)
    count++
    if(count==6){
      observer.complete()
    }
    if(count>10){
      observer.error(new Error('count is greater than 10'))
    }
  },1000);
})
  
  this.customeobservablesubscription=customobservable.subscribe((data)=>{
    console.log(data)
  },
  (error)=>{
    alert(error.message)
  },
  ()=>{
    console.log('completed')
  })
}
  ngOnDestroy():void{
    this.intervalsubscritption.unsubscribe()
  }
}
