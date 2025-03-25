import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

import { LoginServiceService } from '../../servicio/login/login-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  dinamicForm!: FormGroup;
  public respuesta_servicio?:any

  constructor(
    private fb: FormBuilder,
    public _service: LoginServiceService
  ){
    
  };

  get usernameValidation(){
    return this.dinamicForm.get('username')?.invalid && this.dinamicForm.get('username')?.touched;
  }

  get passwordValidation(){
    return this.dinamicForm.get('password')?.invalid && this.dinamicForm.get('password')?.touched;
  };

  ngOnInit(): void {
    this.dinamicForm = this.initForm()
  };

  enviar():void{
    if(this.dinamicForm.valid){
      this._service.singnUp().subscribe({
        next:((response)=>{
          this.respuesta_servicio = response;
          alert(this.respuesta_servicio)
        }),
        error: ((e)=>{
          console.error(e);
        })
      })
    }else{
      alert("No puedes ingresar, lo lamento")
    }
  }

  initForm():FormGroup {
    return this.fb.group(
      {
        username: ['',[Validators.required, Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]],
        password: ['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9\_\-\#\.\*\@]{4,15}$/)]]
      }
    )
  };
}
