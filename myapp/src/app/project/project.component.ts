import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  quizlist=[]

  getscore=false

  welcome=true


 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getquestions()
  
  }

  getquestions(){
    this.quizlist=[]
    this.http.get(
      'http://localhost:4000/Quiz'
    )
    .subscribe((qlist)=>{

      // this.mainemplist.push(emplist)
      for(const key in qlist){
        this.quizlist.push({...qlist[key],id:key})
      }
      // console.log(this.quizlist.length)
      console.log(this.quizlist)

    })
  }
  ondisscore(){
  
    this.getquestions()
    
  }
  
}
