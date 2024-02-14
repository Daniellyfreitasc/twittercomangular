import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  tweetMessage: string = ''
  tweetMaxLength: number = 240
  tweetRemain: number = this.tweetMaxLength

  sendTweet(){
    alert("Twitter Criado!")
  }

  changeTweet(){
    this.tweetRemain = 240 - this.tweetMessage.length
  }
}
