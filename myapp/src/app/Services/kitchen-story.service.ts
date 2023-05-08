import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import{itemdata, userdata} from '../kitchen-story/data.model'

@Injectable({
  providedIn: 'root'
})
export class KitchenStoryService {

  foodurl='http://localhost:3000/FoodItems'
  userurl='http://localhost:3000/users'
  adminurl='http://localhost:3000/admin'
  items=[]
  itemid
  constructor(private http:HttpClient) { }

  getItems(){

   return  this.http.get(this.foodurl)
    .pipe(
      map((data)=>{
        const array=[]
        for(const key in data){
          array.push({...data[key]})
        }
        return array
      }
      )
    )
  }


  insertuserdata(firstname:string,lastname:string,phone:number,address:string,newitemid:number){

     this.itemid=newitemid
   const newuserdata={firstname:firstname,lastname:lastname,phone:phone,address:address,itemid:this.itemid}
    this.http.post(this.userurl,newuserdata)
    .subscribe()
  }

  checkadmin(checkname:string,checkpassword:string){
    return this.http.get(this.adminurl)
  }

  changeadminpwd(newpwd:string){
    this.http.patch(this.adminurl,newpwd)
    .subscribe((changepwd)=>{

      console.log(changepwd)
    })
  }

  adminremove(id:number){
    this.http.delete(this.foodurl+"/"+id)
    .subscribe()

  }

  adminadditem(data:itemdata){
    this.http.post(this.foodurl,data)
    .subscribe()

  }

}
