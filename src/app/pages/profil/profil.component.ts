import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { catchError, finalize, take, tap } from 'rxjs';
// import { ImageUploadComponent } from '../../components/image-upload/image-upload.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailValidator } from '../../core/validators/email.validator';
import { urlValidator } from '../../core/validators/url.validator';
import { Profile, ProfileRequest } from './models/profile.model';
import { ImageUploadComponent } from '../../components/image-upload/image-upload.component';
import { imageSizeValidator } from '../../core/validators/image.validator';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ImageUploadComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {
  private fileToUpload: File;
  private imagePreview: string | null = null;
  private _profileService = inject(ProfileService);

  public profilForm: FormGroup;
  public textContentButton: string = 'Profile';
  public profilePictureFile = signal<File | null>(null);

  public profilePicture: String;
  event: any;
  imageSrc: String; //global variable

  constructor(private fb: FormBuilder) {
    this.profilForm = this.fb.group({
      profilePicture: new FormControl('', [
        Validators.required,
        urlValidator(),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      profileFileUppload: new FormControl('', [
        Validators.required,
        imageSizeValidator(),
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
    this.getProfile();
  }

  public getProfile(): void {
    this._profileService
      .getProfile$()
      .pipe(
        take(1),
        tap((reponse) => {
          console.log(reponse);

          console.log(reponse.profilePicture);
          //this.profilePicture = '';
          this.profilForm
            .get('profilePicture')
            ?.setValue(reponse.profilePicture);
          //console.log(this.profilForm.get('totot')?.value);
          this._patchProfileForm(reponse);
        })
      )
      .subscribe();
  }

  public profileValidation(): void {
    const currentProfile: Profile = {
      firstName: this.profilForm.get('firstName')?.value,
      lastName: this.profilForm.get('lastName')?.value,
      email: this.profilForm.get('email')?.value,
      // profilePicture: 'https://psp-logos.uptimerobot.com/logos/600026-1591785210.png',
      profilePicture: '',
      favoriteRestaurants: [],
    };

    const currentProfilRequest: ProfileRequest = {
      profilMaj: currentProfile,
      fileUploadImage: this.profilePictureFile(),
    };

    if (this.profilForm.get('email')?.enabled == true) {
      console.log('proflValidation');

      this._profileService
        .updateProfile$(currentProfilRequest)
        .pipe(
          take(1),
          tap((reponse) => {
            // console.log(reponse);
          }),
          finalize(() => {})
        )
        .subscribe();
    }
    if (this.profilForm.get('email')?.enabled == false) this.proflUnlock();
  }

  public proflUnlock(): void {
    this.profilForm.get('profilePicture')?.enable();
    this.profilForm.get('firstName')?.enable();
    this.profilForm.get('lastName')?.enable();
    this.profilForm.get('email')?.enable();
    this.profilForm.get('profilePicture')?.enable();
    this.textContentButton = 'Sauvegarder';
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.fileToUpload = input.files[0];

      // Preview the selected image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };

      if (this.fileToUpload) {
      }
    }

    this.setURLimgProfil();
  }

  private _patchProfileForm(reponse: Profile): void {
    this.profilForm.patchValue({
      ...this.profilForm,
      firstName: reponse.firstName,
      lastName: reponse.lastName,
      email: reponse.email,
      profilePicture: reponse.profilePicture,
    });
    this.profilForm.get('profilePicture')?.disable({ onlySelf: true });
    this.profilForm.get('firstName')?.disable({ onlySelf: true });
    this.profilForm.get('lastName')?.disable({ onlySelf: true });
    this.profilForm.get('email')?.disable({ onlySelf: true });
    this.textContentButton = 'Debloquer';
  }

  setURLimgProfil() {}
}
