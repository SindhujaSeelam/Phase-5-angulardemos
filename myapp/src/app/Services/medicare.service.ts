import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import { medicinesdataformat, usersdata } from '../medicareproject/data.model';

@Injectable({
  providedIn: 'root'
})
export class MedicareService {

  url='http://localhost:8080/medicines'
  usersurl='http://localhost:8080/users'
  userreg='http://localhost:8080/registeruser'
  meddelurl='http://localhost:8080/deletemedicine/'
  medchangestatusurl='http://localhost:8080/changemedstatus/'
  editmed='http://localhost:8080/editmedicines'
  addmedurl='http://localhost:8080/addmedicine'
  userinfo:usersdata
  medicines:medicinesdataformat[]=[]


  constructor(private http:HttpClient) {
    
   }

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

  deletemedicine(id:number){

    return this.http.get(this.meddelurl+id)
    

  }

  changestatus(id:number)
  {
    return this.http.get(this.medchangestatusurl+id)

  }

 editmedicines(data)
 {

 return this.http.post(this.editmed,data)


 }

 addmed(data)
 {

  return this.http.post(this.addmedurl,data)
 }

  

  
}

