import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [AvatarComponent]
})
export class HeaderComponent {

}
