import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTeacher } from './profile-teacher';

describe('ProfileTeacher', () => {
  let component: ProfileTeacher;
  let fixture: ComponentFixture<ProfileTeacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTeacher],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTeacher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
