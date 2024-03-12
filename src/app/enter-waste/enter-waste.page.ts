import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

interface WasteType {
  wetwaste: boolean;
  drywaste: boolean;
  mixedwaste: boolean;
  sanitary: boolean;
  nowaste: boolean;
}

@Component({
  selector: 'app-enter-waste',
  templateUrl: './enter-waste.page.html',
  styleUrls: ['./enter-waste.page.scss'],
})
export class EnterWastePage {
  drywaste: boolean = false;
  wetwaste: boolean = false;
  sanitarywaste: boolean = false;
  mixedwaste: boolean = false;
  nowaste: boolean = false;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Reset selectedWasteTypes on page load
    this.resetCheckboxes();
  }

  resetCheckboxes() {
    this.drywaste = false;
    this.wetwaste = false;
    this.sanitarywaste = false;
    this.mixedwaste = false;
    this.nowaste = false;
  }

  async submitWaste() {
    const apiUrl = 'http://15.207.84.40:4200/explorer/#!/individualCollection';

    if (
      !this.drywaste &&
      !this.wetwaste &&
      !this.sanitarywaste &&
      !this.mixedwaste &&
      !this.nowaste
    ) {
      // Handle no selection case
      const alert = await this.alertController.create({
        header: 'No Selection',
        subHeader: 'Please select at least one waste type',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    const wasteData: WasteType = {
      wetwaste: this.wetwaste,
      drywaste: this.drywaste,
      mixedwaste: this.mixedwaste,
      sanitary: this.sanitarywaste,
      nowaste: this.nowaste,
    };

    try {
      const response = await this.http.post<any>(apiUrl, wasteData);
      console.log('Waste collection created:', response);

      // Show success popup
      const alert = await this.alertController.create({
        header: 'Success!',
        subHeader: 'Waste collection saved',
        //message: 'Done',
        buttons: [
          {
            text: 'Done',
            handler: () => {
              this.navigateToHomePage();
            },
          },
        ],
      });

      await alert.present();
      this.resetCheckboxes();
    } catch (error) {
      console.error('Error saving waste:', error);
      // Handle API errors
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'An error occurred',
        message: 'Please try again later.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  navigateBacktoqrentry() {
    this.navCtrl.navigateBack('/qrentry');
  }

  navigateToHomePage() {
    this.navCtrl.navigateRoot(['/home']);
  }

  navigateToAddPaymentPage() {
    this.navCtrl.navigateForward('/add-image');
  }

  handleCheckboxChange(wasteType: string, isChecked: boolean) {
    switch (wasteType) {
      case 'drywaste':
        this.drywaste = isChecked;
        break;
      case 'wetwaste':
        this.wetwaste = isChecked;
        break;
      case 'sanitarywaste':
        this.sanitarywaste = isChecked;
        break;
      case 'mixedwaste':
        this.mixedwaste = isChecked;
        break;
      case 'nowaste':
        this.nowaste = isChecked;
        break;
    }
  }
}