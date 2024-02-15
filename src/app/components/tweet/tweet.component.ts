import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
    selector: 'app-tweet',
    standalone: true,
    templateUrl: './tweet.component.html',
    styleUrl: './tweet.component.css',
    imports: [FormsModule, AvatarComponent]
})
export class TweetComponent {
@Input() TweetMessage: string=''

}
