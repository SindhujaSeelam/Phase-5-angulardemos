import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import { usersdata } from '../medicareproject/data.model';
import { userdata } from '../kitchen-story/data.model';

@Injectable({
  providedIn: 'root'
})
export class MedicareService {

  url='http://localhost:8080/medicines'
  usersurl='http://localhost:8080/users'
  userreg='http://localhost:8080/registeruser'
  userid


  constructor(private http:HttpClient) { }

  getmedicines(){
    return this.http.get(this.url)
    .pipe(
      map((data)=>{
        const array=[]
        for(const key in data){
          array.push({...data[key]})
        }
        return array
      })
    )

   
  }

  getusersfromdb(){
return    this.http.get(this.usersurl)
    
  }

  reguser(regdata:usersdata){
   return this.http.post(this.userreg,regdata)
    
  }

 


  

  // post(){
  //  const body={
  //     "category":"formals",
  //     "price":2900,
  //     "brandname":"Nick",
  //     "color":"white",
  //     "materialtype":"leather"
  // }
  //   this.http.post(this.hiurl,body)
  //   .subscribe(()=>{
  //   })
  // }

  // delete(){
  //   this.http.delete(this.deleteurl)
  // }
}

