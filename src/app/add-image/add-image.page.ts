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
formdataUpload:any;
  constructor(private http: HttpClient) {}

  async takePhoto() {
    try {
      const capturedPhoto = await Camera['getPhoto']({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        format: 'jpeg'
      });

      if (capturedPhoto && capturedPhoto.base64String) {
        // Convert base64 to Blob
        /*********************************************************** */
        // contentType = contentType || '';
        const sliceSize = 1024;
        const byteCharacters = atob(capturedPhoto.base64String);
        const bytesLength = byteCharacters.length;
        const slicesCount = Math.ceil(bytesLength / sliceSize);
        const byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          const begin = sliceIndex * sliceSize;
          const end = Math.min(begin + sliceSize, bytesLength);

          const bytes = new Array(end - begin);
          for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
          }
          byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
       const blob = new Blob(byteArrays, { type: 'image/jpeg' });
       this.upldblb = blob;
        /***************************************************************** */

        // const byteCharacters = atob(capturedPhoto.base64String);
        // const byteNumbers = new Array(byteCharacters.length);
        // for (let i = 0; i < byteCharacters.length; i++) {
        //   byteNumbers[i] = byteCharacters.charCodeAt(i);
        // }
        // const byteArray = new Uint8Array(byteNumbers);
        // const blob = new Blob([byteArray], { type: 'image/jpeg' });

        // Save the Blob
        await this.savePicture(blob);
      } else {
        console.warn('No image captured.');
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
upldblb:any;
  async savePicture(blob: Blob): Promise<void> {
    try {
      const fileName = new Date().getTime() + '.jpeg';
      const savedFile = await Filesystem['writeFile']({
        path: fileName,
        data: blob,
        directory: FilesystemDirectory.Data,
      });

      const filePath = savedFile.uri;
      const base64Image = 'data:image/jpeg;base64,' + await this.blobToBase64(blob);
      this.pictures.push(base64Image);
    } catch (error) {
      console.error('Error saving picture:', error);
    }
  }

  async saveImages() {
    console.log('Images to upload:', this.pictures);
    console.log('Images Blob:', this.upldblb);
    console.log('Images Blob:', typeof(this.upldblb));
  }

  async uploadFile(formData: any) {
    console.log(formData)
    try {
      const response = await this.http.post<any>(
        `${environment.api_base_url}/files/images/upload`,
        formData
      ).subscribe((res=> {
        console.log(res)
      }));

      // if (response.success) {
      //   console.log('Images uploaded successfully!');
      // } else {
      //   console.error('Error uploading images:', response.error);
      // }
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  }

  async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  uploadImages() {
    this.formdataUpload = new FormData()
    this.formdataUpload.append("files", this.upldblb,"name.jpeg")
    // if (this.pictures && this.pictures.length > 0) {
    //   const formData = new FormData();
    //   this.pictures.forEach((picture: string | Blob, index: number) => {
    //     if (typeof picture === 'string') {
    //       formData.append('file' + index, picture);
    //     } else {
    //       formData.append('file' + index, picture);
    //     }
    //   });
    //   this.uploadFile(formData);
    // } else {
    //   console.warn('No images to upload.');
    // }
    this.uploadFile(this.formdataUpload)
  }
}
