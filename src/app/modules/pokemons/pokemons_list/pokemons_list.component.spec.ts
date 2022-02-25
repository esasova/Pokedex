import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemons_listComponent } from './pokemons_list.component';

describe('PokemonsComponent', () => {
  let component: Pokemons_listComponent;
  let fixture: ComponentFixture<Pokemons_listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokemons_listComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemons_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
