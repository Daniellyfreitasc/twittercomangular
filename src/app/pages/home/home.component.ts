import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { PostComponent } from "../../components/post/post.component";
import { TweetComponent } from "../../components/tweet/tweet.component";
import { MessagesService } from '../../services/messages.service';
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent,
        FooterComponent, PostComponent, TweetComponent, NgFor]
})
export class HomeComponent implements OnInit {
tweets: string[] = []

    constructor(private service: MessagesService){

    }
    ngOnInit(): void {
       this.tweets = this.service.getMessages()
    }

}
