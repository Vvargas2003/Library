import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  errorMessage:any;

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private alertController:AlertController
    ) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "", Validators.compose([
          Validators.required, 
          Validators.pattern("^[a-zA-Z0-9 ]{50}$")]))
      , last_name: new FormControl(
        "",
        Validators.compose([
        Validators.required, 
        Validators.pattern("^[a-zA-Z0-9 ]{50}$")]))
      , document_number: new FormControl(
        "", Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]{15}$")]))
      , email: new FormControl("",
       Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]))
      , password: new FormControl("", 
       Validators.compose([
       Validators.required, Validators.minLength(5)]))
      , document_type: new FormControl()
      , career: new FormControl()
    });
  }
  

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(res=> {
       this.navCtrl.navigateForward("/login");
    }).catch(err=>{

      this.presentAlert("Opps", "Hubo un error",err)

    })
 }   

 async presentAlert(header: any, subHeader: any, message: any) {
  const alert = await this.alertController.create(
    {
      header:header,
      subHeader:subHeader,
      message:message,
      buttons:['Ok']

    }

  );
  await alert.present();
 
 }
}
