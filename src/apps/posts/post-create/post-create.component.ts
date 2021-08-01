import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  inputText = '' 
  outText = ''
  
  addPost() {
    this.outText = this.inputText
  }
  ngOnInit(): void {
  }

}
