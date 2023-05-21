import { Injectable } from '@angular/core';
import { moviedataformat, usersdata } from '../movieproject/data.model';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  url='http://localhost:8080/movies'
  usersurl='http://localhost:8080/movieusers'
  userreg='http://localhost:8080/movieregisteruser'
  meddelurl='http://localhost:8080/deletemovie/'
  medchangestatusurl='http://localhost:8080/changemoviestatus/'
  editmed='http://localhost:8080/editmovies'
  addmedurl='http://localhost:8080/addmovie'
  genresurl='http://localhost:8080/genres'
  editoraddgenresurl='http://localhost:8080/addoreditgenres'
  deletegenresurl='http://localhost:8080/deletegenres/'

  userinfo:usersdata
  medicines:moviedataformat[]=[]
  items:moviedataformat[]=[]
  id

  constructor(private http:HttpClient) { }

  addtocart(item:moviedataformat){

    this.items.push(item)
    console.log(this.items)
    // delete this.items[1]
    
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

 getgenres()
 {
   return this.http.get(this.genresurl)
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
 addgenres(body){
  return this.http.post(this.editoraddgenresurl,body)
 }

 deletegenres(id:number){
  return this.http.get(this.deletegenresurl+id)
 }
}
