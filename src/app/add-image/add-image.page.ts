import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
// import { FilesystemDirectory, Filesystem } from '@capacitor/filesystem';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import {defineCustomElements} from '@ionic/pwa-elements/loader'

// defineCustomElements(window);

const { Camera } = Plugins;
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage {
  pictures: string[] = [];
  abcd: string = 'pooja'; // Initialize my name for eg
  image: any;
  alertController: any;

  constructor(private http: HttpClient) {}
  async takePhoto() {
    try {
      const capturedPhoto = await Camera['getPhoto']({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });

      if (capturedPhoto && capturedPhoto.dataUrl) {
        this.pictures.push(capturedPhoto.dataUrl);
      } else {
        console.warn('No image captured.');
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  saveImages() {
    this.http.get(`${environment.api_base_url}/files/pooja}/files`).subscribe(
      (res: any) => {
        console.log(res);
        this.uploadFile();
      },
      (err) => {
        console.log(err);
        if (err.statusText === 'Not Found') {
          this.http.post(`${environment.api_base_url}/files/`, { name: this.abcd }).subscribe((res: any) => {
            console.log(res);
            this.uploadFile();
          });
        }
      }
    );
  }
  uploadFile() {
   if (this.pictures.length === 0) {
      console.warn('No images to upload.');
      return;
    }

    const formData = new FormData();

    // Loop through each picture and append it to the FormData object
    this.pictures.forEach((picture, index) => {
      // Convert base64 string to Blob
      const blob = this.base64ToBlob(picture);
  
      // Append Blob to FormData with a unique filename
      formData.append('file', blob, `image_${index}.jpg`);
    });
    this.http.post<any>(`${environment.api_base_url}/files/${this.abcd}/upload/`, formData).subscribe(
      (res) => {
        console.log('Image uploaded successfully:', res);
        
      },
      (err) => {
        console.error('Error uploading image:', err);
        
      }
    );
  }

  base64ToBlob(base64: string): Blob {
   const byteString = atob(base64.split(',')[1]);
   const mimeString = 'image/jpeg';
   const ab = new ArrayBuffer(byteString.length);
   const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}