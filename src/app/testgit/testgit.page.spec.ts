import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestgitPage } from './testgit.page';

describe('TestgitPage', () => {
  let component: TestgitPage;
  let fixture: ComponentFixture<TestgitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestgitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestgitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
