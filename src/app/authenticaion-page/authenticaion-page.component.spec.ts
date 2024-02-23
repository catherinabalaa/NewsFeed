import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticaionPageComponent } from './authenticaion-page.component';

describe('AuthenticaionPageComponent', () => {
  let component: AuthenticaionPageComponent;
  let fixture: ComponentFixture<AuthenticaionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticaionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticaionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
