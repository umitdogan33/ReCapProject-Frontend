import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUpdateComponent } from './profil-update.component';

describe('ProfilUpdateComponent', () => {
  let component: ProfilUpdateComponent;
  let fixture: ComponentFixture<ProfilUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
