import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  Info={
    nom:"saad",
    email:"aboufariss.saad@gmail.com",
    Tele:631223306
  }
  Comments=[
    {date:new Date(),massage:"A"},
    {date:new Date(),massage:"B"},
    {date:new Date(),massage:"C"}
  ]

}
