import { Component } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent {
  elements!: NodeListOf<Element>; // Declare elements with a definite assignment assertion

  ngAfterViewInit(): void {
    // Select elements to animate
    this.elements = document.querySelectorAll('.intro, .imagecard');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement; // Ensure it's an HTMLElement
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Observe each element
    this.elements.forEach((el) => observer.observe(el));
  }

}
