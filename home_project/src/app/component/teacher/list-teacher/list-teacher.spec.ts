import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacher } from './list-teacher';

describe('ListTeacher', () => {
  let component: ListTeacher;
  let fixture: ComponentFixture<ListTeacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTeacher],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTeacher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
