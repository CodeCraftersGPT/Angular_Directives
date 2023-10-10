import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef
  ) {
    console.log('AuthDirective constructor');

   }

   @Input() set appAuth(isAuthenticated: boolean) {
    console.log('AuthDirective appAuth');
    if (isAuthenticated) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
   }

}
