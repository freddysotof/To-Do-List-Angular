import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
class Todo{
  description: string;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
constructor(public dialog: MatDialog){}

public todos: Todo[] = [];
public description: string;

addNewTodo(): void{
  this.todos.push({
    description: this.description,
    isDone: false
  });
  this.description = null;

}

openDialog(){
 let dialogRef =  this.dialog.open(DialogComponent);

 dialogRef.afterClosed().subscribe(result =>{

   console.log(`Dialog Resul: ${result}`);

});
}
}
