import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStudent } from './profile-student';

describe('ProfileStudent', () => {
  let component: ProfileStudent;
  let fixture: ComponentFixture<ProfileStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
