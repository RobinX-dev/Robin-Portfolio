import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min.js';

@Component({
  selector: 'app-vantaelement',
  template: `<div #vantaNet class="vanta-net-container"></div>`,
  styles: [`
    .vanta-net-container {
      width: 100%;
      height: 100vh;
    }
  `]
})
export class VantaelementComponent implements OnInit, AfterViewInit{
  @ViewChild('vantaNet') vantaNet!: ElementRef;
  vantaEffect: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.vantaEffect = NET({
      el: this.vantaNet.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      THREE: THREE // Use the imported THREE object
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}


