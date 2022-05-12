import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'WebMeteo';
  //Metodo eseguito all'avvio dell'applicazione.
  ngOnInit(){
    //Questo metodo permette di cambiare l'attributo del documento HTML per impostare la lingua del documento all'italiano.
    document.querySelector('html')?.setAttribute('lang', 'it'); 
  }
}
