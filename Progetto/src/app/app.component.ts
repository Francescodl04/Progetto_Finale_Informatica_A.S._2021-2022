import { Component, HostBinding, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'WebMeteo';
  onDarkMode: boolean = false;
  //Metodo eseguito all'avvio dell'applicazione.
  ngOnInit() {
    //Questo metodo permette di cambiare l'attributo del documento HTML per impostare la lingua del documento all'italiano.
    document.querySelector('html')?.setAttribute('lang', 'it');
  }
  changed(event: MatSlideToggle):void{
    document.body.classList.toggle('dark-theme');
  }

}
