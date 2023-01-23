import { Component, Input } from '@angular/core';

interface detailEmp {
  firstName : string;
  lastName : string;
  role : string;
  fb : string;
  twitter: string;
  linkedIn : string;

}

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    
@Input() datav: detailEmp[] | undefined;



}

