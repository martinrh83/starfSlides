import { Component } from '@angular/core';
import { faVideo, faWalking, faDoorOpen, faLaptopCode , faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faPaperPlane, faMobileAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import { StarfService } from './services/starf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  faVideo= faVideo;
  faWalking = faWalking;
  faDoorOpen = faDoorOpen;
  faLaptopCode = faLaptopCode;
  faArrowAltCircleDown = faArrowAltCircleDown;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  faArrowAltCircleUp = faArrowAltCircleUp;
  faPaperPlane = faPaperPlane;
  faMobileAlt = faMobileAlt;
  faSmile = faSmile;
  body = [{
    task_id: "1",
    legajo : "30344", 
    alumno: "User Prueba",
    confidence: "45", 
    datetime: "Fri, 04 Dec 2020 11:35:00 -03 -03:00"
  },//algoritmos
  {
    task_id: "1",
    legajo : "30344", 
    alumno: "User Prueba",
    confidence: "45", 
    datetime: "Wed, 09 Dec 2020 08:35:00 -03 -03:00"
  },//syo
  {
    task_id: "1",
    legajo : "30344", 
    alumno: "User Prueba",
    confidence: "45", 
    datetime: "Thu, 10 Dec 2020 08:35:00 -03 -03:00"
  },//mat discrtea
  {
    task_id: "1",
    legajo : "30344", 
    alumno: "User Prueba",
    confidence: "45", 
    datetime: "Wed, 16 Dec 2020 10:16:00 -03 -03:00"
  }]//arq
  optionSeleted: any;
  activeButton: any;
  constructor(private _starfService: StarfService){}
  

  isActive(option){
    return this.activeButton === option;
  }

  subjectSelected(option){
    this.optionSeleted = this.body[option];
    this.activeButton = option;
    console.log(this.optionSeleted);
    console.log(this.activeButton);
  }

  tofourStep(){
    console.log(this.optionSeleted);
    this._starfService.sendNotification(this.optionSeleted).subscribe((res)=>{
      console.log(res);
    })
    document.getElementById("fourStep").scrollIntoView();
  }
}
