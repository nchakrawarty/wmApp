import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FilesystemDirectory, Filesystem } from '@capacitor/filesystem';
import { CameraResultType, CameraSource } from '@capacitor/camera';

const { Camera } = Plugins;

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage {
  pictures: string[] = [];

  constructor() {}

  async takePhoto() {
    try {
      const capturedPhoto = await Camera['getPhoto']({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
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

  async saveImages() {
    if (this.pictures.length === 0) {
      console.error('No images to save.');
      return;
    }

    try {
      for (let i = 0; i < this.pictures.length; i++) {
        const fileName = `temp_photo_${new Date().getTime()}_${i}.jpeg`;
        // Use forward slashes and escape backslashes in the file path
        const path = `/src/assets/${fileName}`; 
        await Filesystem.writeFile({
          path,
          data: this.pictures[i],
          directory: FilesystemDirectory.Data,
        });
        console.log('Image saved successfully:', path);
      }
    } catch (error) {
      console.error('Error saving images:', error);
    }
  }
}
