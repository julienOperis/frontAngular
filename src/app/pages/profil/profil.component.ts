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
import { Profile } from '../../core/models/profile.model';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {
  private authService = inject(AuthService);
  public profilForm: FormGroup;
  public textContentButton: String;
  public activeProfilValidation = false;
  public currentProfil: Profile;

  constructor(private fb: FormBuilder) {
    this.profilForm = this.fb.group({
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
          // console.log(reponse);
          // console.log(reponse.firstName);
          this.profilForm.get('firstName')?.setValue(reponse.firstName);
          this.profilForm.get('lastName')?.setValue(reponse.lastName);
          this.profilForm.get('email')?.setValue(reponse.email);
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
      profilePicture: 'Profile',
      favoriteRestaurants: [],
    };

    if (this.activeProfilValidation == true) {
      this.authService
        .setProfile$(this.currentProfil)
        .pipe(
          take(1),
          tap((reponse) => {
            console.log(reponse);
            console.log(reponse.firstName);
          }),
          finalize(() => {})
        )
        .subscribe();
    }
    if (this.activeProfilValidation == false) this.proflUnlock();
  }

  public proflUnlock(): void {
    this.profilForm.get('firstName')?.enable();
    this.profilForm.get('lastName')?.enable();
    this.profilForm.get('email')?.enable();
    this.textContentButton = 'Sauvegarder';
    this.activeProfilValidation = true;
  }
}

//     .authentification$(this.loginForm.value)
//     .pipe(
//       take(1),
//       tap((reponse) => this.serviceSuccess.setDataSuccess(reponse)),
//       catchError((error) => {
//         console.error(error.status);

//         if(error.status == 401)
//           this.alertService.setAlert('Incorrect email or password',AlertComponent.ERROR);
//         else
//           this.alertService.setAlert('An error has occurred :'+error.error.message,AlertComponent.ERROR);

//         return EMPTY; //Couper le flux,
//       }),
//       finalize(() => {
//         console.log('navigation vers /accueil');
//         this.router.navigate(['/accueil']);
//       })
//     )
//     .subscribe();
// }
