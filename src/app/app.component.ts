import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <section class="todoapp">
      <router-outlet (activate)="onRouteActivated()"></router-outlet>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  `,
})
export class AppComponent {
  constructor(private cdRef: ChangeDetectorRef) {}

  onRouteActivated(): void {
    // https://github.com/angular/angular/pull/41306
    this.cdRef.detectChanges();
  }
}
