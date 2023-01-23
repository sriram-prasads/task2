import { Component } from '@angular/core';
import obj from '../assets/sample.json';

interface detailEmp {
  firstName : string;
  lastName : string;
  role : string;
  fb : string;
  twitter: string;
  linkedIn : string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';

  data : detailEmp[] = obj;
  

  

  // ngOnInit()
  // {
  //   console.log(this.data);
  // }
  
}
