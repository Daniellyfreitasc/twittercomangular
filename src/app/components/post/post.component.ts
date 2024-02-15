import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
    imports: [FormsModule, AvatarComponent]
})
export class PostComponent {
  tweetMessage: string = ''
  tweetMaxLength: number = 240
  tweetRemain: number = this.tweetMaxLength


  constructor(private service: MessagesService){

  }
  sendTweet(){
    this.service.addMessage(this.tweetMessage)
    this.tweetMessage = ''
    this.tweetRemain = this.tweetMaxLength
  }

  changeTweet(){
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length
  }
}

