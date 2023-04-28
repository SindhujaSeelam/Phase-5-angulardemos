import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirectives]'
})
export class BetterHighlightDirectivesDirective implements OnInit {

  @HostBinding('style.backgroundColor')
  bg:string=''

  @Input()
  leavecolor:string=''

  @Input()
  centercolor:string=''
  constructor(private elementref:ElementRef,private renderer :Renderer2) { }
  nativeElement: any;
  ngOnInit(): void {}

  @HostListener('mouseenter')
  mouseover(event:Event){

    this.bg=this.centercolor
  }
  @HostListener('mouseleave')
  mouseleave(event:Event){

    this.bg=this.leavecolor
  }
  }


