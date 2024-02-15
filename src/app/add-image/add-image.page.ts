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

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera['getPhoto']({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      // Handle the captured image here, for example, you can display it or save it.
      console.log('Photo captured:', image);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
}
