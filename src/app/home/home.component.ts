import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
val: any;
valr: any;
  constructor() { }

  ngOnInit(): void {
   this.loadScript(); 
  }
  clickme() {
    
    console.log('your value is saved succesfully',this.val);
  }
   getRandomNumberBetween(){

   this.valr= Math.floor(Math.random()*(100-(-100)+1)+(-100));
   console.log('your random',this.valr);
}
loadScript(){
  const dynamicScript=[
    'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js','/assets/cal-heatmap-master/cal-heatmap.min.js','/assets/heatmap.js'
  ];
  for(let i =0;i<dynamicScript.length;i++){
    const node = document.createElement('script');
    node.src=dynamicScript[i];
    node.type='text/javascript';
    node.async=false;
    node.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}


}
