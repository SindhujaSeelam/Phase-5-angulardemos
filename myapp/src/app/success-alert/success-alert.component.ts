import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'success-alert',
    template:'<p>Hello</p><button class="btn btn-success">Success</button>',
    styles:[
        `
        p{
            padding:10px;
            background-color:orange;
        }
    
    `,
],
})
export class SuccessAlertComponent{}