import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SunbirdPlayerSdkModule  } from '@project-sunbird/sunbird-player-sdk';
import { SunbirdVideoPlayerComponent } from './sunbird-video-player.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [SunbirdVideoPlayerComponent, VideoPlayerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SunbirdPlayerSdkModule
  ],
  exports: [SunbirdVideoPlayerComponent]
})
export class SunbirdVideoPlayerModule { }
