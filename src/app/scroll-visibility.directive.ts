import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollVisibility]',
})
export class ScrollVisibilityDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    // Add the hidden class initially
    this.renderer.addClass(element, 'hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add visible class and remove hidden when in view
          this.renderer.removeClass(element, 'hidden');
          this.renderer.addClass(element, 'visible');
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);
  }
}
