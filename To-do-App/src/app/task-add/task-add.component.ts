import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() addTaskeventEmitter = new EventEmitter();
  taskForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle : ["", [Validators.required]]
    })
  }

  onKeyPress($event:any){
    if(this.taskForm.valid){
      this.addTaskeventEmitter.emit(this.taskForm.value);      
      this.taskForm.patchValue({
        taskTitle : '',
      })
    }
  }

}
