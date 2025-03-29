import {  Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',

  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  authCredentialsDot!: FormGroup
  showPassword = false
  @ViewChild('invalidCredentials',{static:false}) invalidCredentials!:TemplateRef<any>;
  constructor(private fb:FormBuilder,){}
  ngOnInit(): void {

    this.authCredentialsDot = this.fb.group({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }


  onSubmit() {
    if (this.authCredentialsDot.valid) {
      console.log('Form Submitted', this.authCredentialsDot.value);
    }
  }

  // showModal(template: TemplateRef<any>){
  //   this.modalRef = this.modalService.show(template)
  // }

  // hideModal(){
  //   this.modalService.hide()
  // }
}
