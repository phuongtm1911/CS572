import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.signUpForm = formBuilder.group({
      'username': ['', [Validators.required, this.signUpValidator]],
      'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'password': ['', Validators.required],
      'confirmpassword': ['', Validators.required]
    });

    this.signUpForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );


  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  signUpValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === '')
  }

  ngOnInit() {
  }

}
