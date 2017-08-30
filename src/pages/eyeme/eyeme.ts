import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
 
declare var cordova: any;

@Component({
  selector: 'page-eyeme',
  templateUrl: 'eyeme.html'
})
export class EyemeListPage {
  lastImage: string = null;
	loading: Loading;
	
  constructor(private navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private storage: Storage) { 
	let filename = navParams.get('filename');
    let curname = navParams.get('curname');
    let corpath = navParams.get('corpath');
  }
 
	
}
