import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-detach-example',
  templateUrl: './app-detach-example.component.html',
  styleUrls: ['./app-detach-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDetachExampleComponent {
  time = new Date().toLocaleTimeString();
  isAttached = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      if (this.isAttached) {
        this.cdr.markForCheck(); // Or use detectChanges()
      }
    }, 1000);
  }

  manualUpdate() {
    this.time = new Date().toLocaleTimeString();
    this.cdr.detectChanges(); // Forces update manually
  }

  toggleAttach() {
    if (this.isAttached) {
      this.cdr.detach(); // No more automatic updates
    } else {
      this.cdr.reattach(); // Back to normal
    }
    this.isAttached = !this.isAttached;
  }

}
