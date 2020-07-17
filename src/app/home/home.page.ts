import { Component } from '@angular/core';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentIndex: any = -1;
  showFlag: boolean = false;
  imageObject = [];   
  
  showLightbox(index) {
    console.log("showLightbox index: " + index);
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
      this.showFlag = false;
      this.currentIndex = -1;
  }     

  clickImage() {
    console.log("Click image");
    //this.showFlag = false;
  }
 

  constructor(protected httpClient: HttpClient) {
    console.log("constructor");
  }

  ngOnInit() {

    console.log("ngOnInit");
    this.imageObject.push({
      image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      thumbImage: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      title: 'google title', 
      alt: 'google alt desc',
    }); 

    this.imageObject.push({
      image: 'https://images.unsplash.com/photo-1594910336126-2ff2562441bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1594910336126-2ff2562441bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
      title: 'coffee', 
      alt: 'coffee alt desc',
    });      

    this.imageObject.push({
      image: 'https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png',
      thumbImage: 'https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png',
      title: 'yahoo title', 
      alt: 'yahoo alt desc',
    });     

  }

}
