import { Component } from '@angular/core';
import { Plugins} from '@capacitor/core';
import { FilesystemDirectory, Filesystem } from '@capacitor/filesystem';

import { Camera as CapacitorCamera, CameraResultType } from '@capacitor/camera';



const { Camera } = Plugins; 

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage {
  picture: any;

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera['getPhoto']({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      if (image && image.dataUrl) {
        this.picture = image.dataUrl;
       
      } else {
        console.warn('No image captured.');
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }


  async saveImages() {
    if (!this.picture) {
      console.error('No image to save.');
      return;
    }

    const fileName = `photo_${new Date().getTime()}.jpeg`; 
    const path = fileName;
    try {
      
      await Filesystem.writeFile({
        path,
        data: this.picture,
        directory: FilesystemDirectory.Data,
      });

      console.log('Image saved successfully:', path);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  }
}
