import { TestBed } from '@angular/core/testing';
import { HeaderService } from './header.service';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    });
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Header', () => {
    expect(service.getHeader()).not.toBeNull();
  });
});
