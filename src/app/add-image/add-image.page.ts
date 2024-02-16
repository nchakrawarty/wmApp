import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraResultType,CameraSource } from '@capacitor/camera';



const { Camera } = Plugins;

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage {
  imageList: string[] = [];

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera['getPhoto'] ({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      this.imageList.push(image.webPath);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  saveImages() {
    
    console.log('Images to be saved:', this.imageList);
    
  }
} 