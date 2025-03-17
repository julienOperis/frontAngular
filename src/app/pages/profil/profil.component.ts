import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { catchError, finalize, take, tap } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailValidator } from '../../core/validators/email.validator';
import { urlValidator} from '../../core/validators/url.validator';
import { Profile } from '../../core/models/profile.model';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {
  private fileToUpload: Blob
  private authService = inject(AuthService);
  public profilForm: FormGroup;
  public textContentButton: String;
  public currentProfil: Profile;
  public profilePicture: Blob | null;
  event: any;
  imageSrc: String;//global variable  

  constructor(private fb: FormBuilder) {
    this.profilForm = this.fb.group({
      profilePicture:new FormControl('', [Validators.required, urlValidator()]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  // public profilFormControl = inject(FormControl);

  ngOnInit(): void {
    this.profil();
  }

  public profil(): void {
    this.authService
      .getProfile$()
      .pipe(
        take(1),
        tap((reponse) => {
            console.log(reponse);
           
          console.log(reponse.profilePicture);
          this.profilePicture = reponse.profilePicture;
          this.profilForm.get('profilePicture')?.setValue(reponse.profilePicture);
          //console.log(this.profilForm.get('totot')?.value);
          this.profilForm.get('firstName')?.setValue(reponse.firstName);
          this.profilForm.get('lastName')?.setValue(reponse.lastName);
          this.profilForm.get('email')?.setValue(reponse.email);
          this.profilForm.get('profilePicture')?.disable({ onlySelf: true });
          this.profilForm.get('firstName')?.disable({ onlySelf: true });
          this.profilForm.get('lastName')?.disable({ onlySelf: true });
          this.profilForm.get('email')?.disable({ onlySelf: true });
          this.textContentButton = 'Débloqué';
        }),
        finalize(() => {})
      )
      .subscribe();
  }

  public proflValidation(): void {
    this.currentProfil = {
      firstName: this.profilForm.get('firstName')?.value,
      lastName: this.profilForm.get('lastName')?.value,
      email: this.profilForm.get('email')?.value,
      // profilePicture: 'https://psp-logos.uptimerobot.com/logos/600026-1591785210.png',
      profilePicture: this.fileToUpload,
      favoriteRestaurants: [],
    };

    if (this.profilForm.get('email')?.enabled == true) {
      this.authService
        .setProfile$(this.currentProfil)
        .pipe(
          take(1),
          tap((reponse) => {
            // console.log(reponse);
          }),
          finalize(() => {
            this.profil();
          })
        )
        .subscribe();
    }
    if(this.profilForm.get('email')?.enabled == false)this.proflUnlock();
  }

  public proflUnlock(): void {
    this.profilForm.get('profilePicture')?.enable();
    this.profilForm.get('firstName')?.enable();
    this.profilForm.get('lastName')?.enable();
    this.profilForm.get('email')?.enable();
    this.profilForm.get('profilePicture')?.enable();;
    this.textContentButton = 'Sauvegarder';
  }

  handleFileInput(files: Blob) {
    this.fileToUpload = files;
    this.setURLimgProfil();    
}



setURLimgProfil(){


const imageUrl = URL.createObjectURL(this.fileToUpload);  
console.log(imageUrl);//blob:http://localhost:8100/c489.etc  
this.imageSrc = imageUrl;  


}


}
