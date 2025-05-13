import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

export class ImageUploadComponent {
  public file = output<File>()
  public imagePreview: string | ArrayBuffer | undefined|  null = null;
  eventLog: string = '';

  public handleSelected(event: Event) {
    this.eventLog = ''; // Reset the event log
    const fileInput = event.target as HTMLInputElement;
    const selectedFile = fileInput?.files ? fileInput.files[0] : null;

    if (selectedFile) {
      this.file.emit(selectedFile)
      // const reader = new FileReader();
      // reader.readAsDataURL(selectedFile); // Read the file as a Data URL (base64)
    }
  }
}
