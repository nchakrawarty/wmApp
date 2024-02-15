import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RecycleAddPage } from './recycle-add.page';


describe('RecycleAddPage', () => {
  let component: RecycleAddPage;
  let fixture: ComponentFixture<RecycleAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecycleAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});