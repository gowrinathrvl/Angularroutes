import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetachExampleComponent } from './app-detach-example.component';

describe('AppDetachExampleComponent', () => {
  let component: AppDetachExampleComponent;
  let fixture: ComponentFixture<AppDetachExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDetachExampleComponent]
    });
    fixture = TestBed.createComponent(AppDetachExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
