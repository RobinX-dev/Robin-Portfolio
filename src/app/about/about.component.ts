import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngAfterViewInit(): void {
    // Create Donut chart for B.E.
    this.createDonutChart('beChart', 'Bachelor of Engineering', 78);

    // Create Donut chart for HSC
    this.createDonutChart('hscChart', 'Higher Secondary Certificate', 80);

    // Create Donut chart for SSLC
    this.createDonutChart('sslcChart', 'Secondary School Leaving Certificate', 93.6);
  }

  private createDonutChart(elementId: string, label: string, percentage: number): void {
    const ctx = document.getElementById(elementId) as HTMLCanvasElement;

    new Chart(ctx.getContext('2d')!, {
      type: 'doughnut', // Create a donut chart
      data: {
        labels: ['Achieved', 'Remaining'],
        datasets: [
          {
            label: label,
            data: [percentage, 100 - percentage],
            backgroundColor: ['rgba(75, 192, 192, 0.7)', 'rgba(192, 192, 192, 0.5)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw}%`;
              },
            },
          },
        },
      },
    });
}
}
