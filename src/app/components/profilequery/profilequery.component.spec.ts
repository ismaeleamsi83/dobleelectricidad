import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilequeryComponent } from './profilequery.component';

describe('ProfilequeryComponent', () => {
  let component: ProfilequeryComponent;
  let fixture: ComponentFixture<ProfilequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilequeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
