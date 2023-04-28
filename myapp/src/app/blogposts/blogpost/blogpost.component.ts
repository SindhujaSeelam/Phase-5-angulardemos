import { Component, OnInit ,Input} from '@angular/core';
import { postdata } from '../postdata.model';
import { BlogpostsservicesService } from 'src/app/Services/blogpostsservices.service';
import { BlogpostsComponent } from '../blogposts.component';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  @Input()
  post:postdata
  constructor(private blogpostservice:BlogpostsservicesService,private blogposts:BlogpostsComponent) { }

  ngOnInit(): void {
  
  }


  ondelete(){
    
    this.blogpostservice.deletesinglepost(this.post.id)
    .subscribe(()=>{
      this.blogposts.onfetchposts()
    })
  }
}
