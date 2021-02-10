import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-sample',
    template: `
        <div>Hello Sample {{randomInput}}</div>

        <button (click)="onClick()">Notify</button>
    `
})
export class SampleComponent implements OnInit, OnDestroy {
    @Input() randomInput: string;
    
    @Output() notify = new EventEmitter();

    constructor() {}

    ngOnInit() {
        console.log('random input : ', this.randomInput);
    }

    onClick() {
        this.notify.emit('Event emitted from child');
    }

    ngOnDestroy() {

    }
}