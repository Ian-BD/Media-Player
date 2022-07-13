import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should enque the first track', () => {

  //   let trackFile = "file://C:\\Users\\Ian\\Music\\Stream_Music/acid-trumpet-by-kevin-macleod.mp3";

  //   let trackList = [
  //     trackFile
  //   ];

  //   component.shuffle = false;
  //   component.autoplay = false;
  //   component.setTrackList(trackList);

  //   expect(component.getCurrentTrack().file === trackFile);

  // });

  // it('Should allow the next track to be played', () => {

  //   let track1 = "file://C:\\Users\\Ian\\Music\\Stream_Music/acid-trumpet-by-kevin-macleod.mp3";
  //   let track2 = "file://C:\\Users\\Ian\\Music\\Stream_Music/almost-bliss-by-kevin-macleod.mp3";

  //   let trackList = [ track1, track2];

  //   component.shuffle = false;
  //   component.autoplay = false;
  //   component.setTrackList(trackList);
  //   component.next(false);

  //   expect(component.getCurrentTrack().file === track2);

  // });

  // it('Should allow the previous track to be played', () => {

  //   let track1 = "file://C:\\Users\\Ian\\Music\\Stream_Music/acid-trumpet-by-kevin-macleod.mp3";
  //   let track2 = "file://C:\\Users\\Ian\\Music\\Stream_Music/almost-bliss-by-kevin-macleod.mp3";

  //   let trackList = [ track1, track2];

  //   component.shuffle = false;
  //   component.autoplay = false;
  //   component.setTrackList(trackList);
  //   component.next(false);

  //   expect(component.getCurrentTrack().file === track2);

  //   component.back();

  //   expect(component.getCurrentTrack().file === track1)

  // });

});
