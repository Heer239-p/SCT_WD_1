import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Task1Component } from "./components/task1/task1.component";

@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [RouterModule, Task1Component],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']        
})
export class AppComponent {
  title = 'WD_Task';
}
