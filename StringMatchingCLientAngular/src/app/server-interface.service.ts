import { Injectable } from '@angular/core';
import axios from 'axios';
import { task } from './models/task'
@Injectable({
  providedIn: 'root'
})
export class ServerInterfaceService {
  private url  = "http://localhost:5000";
  //public Task : task;

  constructor() {
    console.log("Server Interface Initialized");
   }


   sendDummy(){
    
    var Tugas : task = { 
      date : "25-04-2021",
      kodeMataKuliah : "IF0000",
      jenisTugas : "Tugas",
      topikTugas : "PR",
    }
    axios.post(this.url + "/task/add", Tugas)
    .then( res => console.log(res.data));
   }

   sendTask(Tugas : task){
    axios.post(this.url + "/task/add", Tugas)
    .then( res => console.log(res.data));
   }

   getTasks(){
    var Tugas : any; 
     axios.get(this.url + "/task")
     .then( res => 
      {if(res.data.length > 0){
         console.log(res.data);
     }}
     )
    
    return Tugas;
  }
}

