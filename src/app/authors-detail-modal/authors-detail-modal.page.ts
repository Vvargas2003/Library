import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-authors-detail-modal',
  templateUrl: './authors-detail-modal.page.html',
  styleUrls: ['./authors-detail-modal.page.scss'],
})
export class AuthorsDetailModalPage implements OnInit {

  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
