import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
    selector: 'courses',
    template: `
                <h2>{{title}}</h2>
                <img [src]="imageUrl">
                
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
                <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button><br/>
                {{course.title | uppercase}} <br/>
                {{course.students | number}} <br/>
                {{course.rating | number:'1.2-2'}} <br/>
                {{course.price | currency:'USD':'true'}} <br/>
                {{course.releaseDate | date:'shortDate'}}<br/>
                {{text | summary}}
                `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    email = "me@email.com";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
    onKeyUp() {
        console.log(this.email);
    }
    onSave($event) {
        console.log("Save button clicked", $event);
    }
    course = {
        title: "The Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1),
        
    }
    text =  `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim. Nam libero justo laoreet sit amet cursus. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Morbi non arcu risus quis varius quam quisque id diam. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Non pulvinar neque laoreet suspendisse interdum. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Non tellus orci ac auctor augue mauris augue neque.
        `
}