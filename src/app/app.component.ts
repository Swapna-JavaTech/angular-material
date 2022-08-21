import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineshoppingapp';
  companyName:string = "";
  contactNumber:number =0;
  contactEmail:string = "";
  companyQProfit :number = 0;
  companyClients:string[] = 
  ["Hexaware","CTS","Capgemini"];
  constructor(){
     this.companyName = "SimpliLearn";
     this.contactNumber= 932323212;
     this.contactEmail= "contactus@simplilearn.com";
     this.companyQProfit = 5677589.6676;
  }

  addClient(client:string){
    this.companyClients.push(client);
  }

}
