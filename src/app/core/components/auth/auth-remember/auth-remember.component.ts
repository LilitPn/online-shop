import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'auth-remember',
  template: `
  <div class="form-group">
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)" />
      Keeped me logged in!
    </label>
  </div>
  `
})
export class AuthRememberComponent {
  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean): void {
    this.check.emit(value)
  }
}
