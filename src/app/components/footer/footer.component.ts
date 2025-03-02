import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  value = 50; // Começa no meio

  position = 0;

  startDrag(event: MouseEvent) {
    const slider = event.currentTarget as HTMLElement;
    const sliderRect = slider.getBoundingClientRect();

    const onMouseMove = (moveEvent: MouseEvent) => {
      let newX = moveEvent.clientX - sliderRect.left;
      newX = Math.max(0, Math.min(sliderRect.width, newX)); // Limita ao container
      this.position = newX;
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }
  
}
