import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from './work-experience.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;
  let service: WorkExperienceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(WorkExperienceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get work-experience documents from Firestore', () => {
    expect(service.getWorkExperience()).not.toBeNull();
  });
});
