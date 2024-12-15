import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register Chart.js modules

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  // Data for the charts
  chartData = [
    { id: 'beChart', label: 'Bachelor of Engineering', percentage: 78 },
    { id: 'hscChart', label: 'Higher Secondary Certificate', percentage: 80 },
    { id: 'sslcChart', label: 'Secondary School Leaving Certificate', percentage: 93.6 },
  ];

  ngAfterViewInit(): void {
    // Iterate over the chartData array to create multiple charts
    this.chartData.forEach((data) => {
      this.createDonutChart(data.id, data.label, data.percentage);
    });
  }

  private createDonutChart(elementId: string, label: string, percentage: number): void {
    const ctx = document.getElementById(elementId) as HTMLCanvasElement;

    new Chart(ctx.getContext('2d')!, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: label,
            data: [percentage, 100 - percentage],
            backgroundColor: ['#A64D79', '#3B1C32'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '75%', // Adjusts the donut thickness
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}%`,
            },
          },
        },
      },
      plugins: [
        {
          id: 'centerText',
          beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;
            ctx.save();
            ctx.font = 'bold 30px Arial';
            ctx.fillStyle = '#E2DFD0'; // Text color
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const text = `${percentage}%`;
            const x = width / 2;
            const y = height / 2;
            ctx.fillText(text, x, y);
            ctx.restore();
          },
        },
      ],
    });
  }
}
