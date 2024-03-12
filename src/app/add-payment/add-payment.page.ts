import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Import for HTTP requests
import { AlertController } from '@ionic/angular'; // Import for popups

interface MoneyCollection {
  amount: number; // Define the interface for MoneyCollection model
}

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.page.html',
  styleUrls: ['./add-payment.page.scss'],
})
export class AddPaymentPage implements OnInit {

  amount: number = 0; // Initialize amount variable


  constructor(private navCtrl: NavController,private http: HttpClient,private alertController: AlertController) {}
  
  navigateBacktoqrentry() {
    this.navCtrl.navigateBack('/qrentry'); 
  }

  async submitPayment() {
    if (this.amount <= 0) {
      // Handle no selection case
      const alert = await this.alertController.create({
        header: 'Invalid!',
        subHeader: 'Please enter a valid amount.',
        buttons: ['Done'],
      });

      await alert.present();
      return;
    }

    const moneyCollectionData: MoneyCollection = { amount: this.amount };

    try {
      const response = await this.http.post<MoneyCollection>(
        'http://15.207.84.40:4200/explorer/#!/moneycollection', //  API endpoint
        moneyCollectionData
      );

      console.log('Money collection created:', response);

      // Show success popup
      const alert = await this.alertController.create({
        header: 'Hurray!',
        subHeader: 'Items added Successfully!',
        //message: 'Done',
        buttons: [
          {
            text: 'Done',
            handler: () => {
              this.navigateBacktoqrentry(); // Navigate back on button press
            },
          },
        ],
      });
      await alert.present();
    } catch (error) {
      console.error('Error adding payment:', error);
      // Handle API errors (optional)
      alert('An error occurred. Please try again later.');
    }
  }


  ngOnInit() {
    
  }

}
