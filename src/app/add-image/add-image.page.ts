import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraResultType } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FilesystemDirectory } from '@capacitor/filesystem';

const { Camera, Filesystem } = Plugins;

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage {

  abcd: string = 'pooja';
  pictures: string[] = [];

  constructor(private http: HttpClient) {}

  async takePhoto() {
    try {
      const capturedPhoto = await Camera['getPhoto']({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        format: 'jpeg' // Specify JPEG format
      });
  
      if (capturedPhoto && capturedPhoto.base64String) {
        await this.savePicture(capturedPhoto.base64String);
      } else {
        console.warn('No image captured.');
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
  
  async savePicture(base64Data: string): Promise<void> {
    try {
      const fileName = new Date().getTime() + '.jpeg';
      const savedFile = await Filesystem['writeFile']({
        path: `${FilesystemDirectory.Data}/${fileName}`, // Provide a valid path
        data: base64Data,
        directory: FilesystemDirectory.Data,
      });

      const filePath = savedFile.uri;
      const base64Image = 'data:image/jpeg;base64,' + base64Data;
      this.pictures.push(base64Image);
    } catch (error) {
      console.error('Error saving picture:', error);
    }
  }

  async saveImages() {
    console.log('Images to upload:', this.pictures);
  }


  async uploadFile(formData: FormData) {
    try {
      const response = await this.http.post<any>(
        `${environment.api_base_url}/files/`,
        formData
      ).toPromise();
      
      // Check if the response indicates success
      if (response.success) {
        console.log('Images uploaded successfully!');
        // Here you can perform any additional actions upon successful upload
      } else {
        console.error('Error uploading images:', response.error);
        // Handle the case where the upload is not successful
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  }
  
  
  async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]); // Extract base64 portion of the result
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  
  uploadImages() {
    if (this.pictures && this.pictures.length > 0) {
      const formData = new FormData();
      this.pictures.forEach((picture: string | Blob, index: number) => {
        if (typeof picture === 'string') {
          // Convert base64 image to Blob if picture is a string
          const byteCharacters = atob(picture.split(',')[1]);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          picture = new Blob([byteArray], { type: 'image/jpeg' });
        }
        // Append each Blob image to FormData
        formData.append('file' + index, picture);
      });
      this.uploadFile(formData);
    } else {
      console.warn('No images to upload.');
    }
  }
}
