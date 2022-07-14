import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ElectronService } from './core/services';
import { DEFAULT_INTERRUPTSOURCES, Idle, IdleExpiry } from '@ng-idle/core';

describe('AppComponent', () => {
  


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [ElectronService, Idle, IdleExpiry],
      imports: [RouterTestingModule, TranslateModule.forRoot()]
    }).compileComponents();

  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
