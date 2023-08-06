import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  "employee":any = [{"id":0,name:"",description:""}];
  e:any={"id":0,name:"",description:""};
   url:string="https://localhost:7093/api/Employee"
  constructor(private _http:HttpClient){
      this._http.get<any>(this.url).subscribe(x => this.employee = x);
  }
  addEmployee(){
    this._http.post(this.url,this.e,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe(x=>console.log(x));
  
  }
}
