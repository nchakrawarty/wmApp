import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraResultType,Camera} from '@capacitor/camera';





@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage {
picture:any;

  constructor() {}

  async takePhoto() {
    
      const image = await Camera.getPhoto ({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      
      });
      this.picture= image.dataUrl;
    
  }

  saveImages() {
    
    console.log('Images to be saved:', this.picture);
    
  }
} 