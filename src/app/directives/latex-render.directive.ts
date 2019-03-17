import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { KatexOptions } from './ktext.options';
import * as katex from 'katex';

/**
 * A directive class that renders to html latex expressions using
 * the render motor Katex. (https://katex.org/)
 */
@Directive({
  selector: '[appLatexRender]'
})
export class LatexRenderDirective implements OnInit {

  readonly inlineLatexExpPattern = /\$(.*?)\$/g;
  readonly centeredLatexExpPattern = /\$\$(.*?)\$\$/g;
  readonly displayCenterOption: KatexOptions = { displayMode: true };

  @Input() latexContent: string;

  constructor(private elementRef: ElementRef) { }

  /**
   * Obtains either the input parameter or (but not both) inner html
   * and obtains all expressions inside $exp$ or $$exp$$, get the render html
   * and puts it in the html.
   */
  ngOnInit() {
    let htmlContent = this.latexContent || this.elementRef.nativeElement.innerHTML;
    htmlContent = htmlContent.replace(this.centeredLatexExpPattern,
      (tok: string) => this.renderLatexExpression(tok, this.displayCenterOption));
    htmlContent = htmlContent.replace(this.inlineLatexExpPattern, (tok: string) => this.renderLatexExpression(tok, {}));
    this.elementRef.nativeElement.innerHTML = htmlContent;
  }

  /**
   * Deletes the expression's delimenters ('$') and creates the HTML of the
   * latex expression.
   * @param expression Contains the latex expression with the delimeters ($)
   * @param options Html render of the latex expression
   */
  private renderLatexExpression(expression: string, options: KatexOptions): string {
    expression = expression.replace(/\$/g, '');
    return katex.renderToString(expression, options); // TODO - Handle latex format errors.
  }

}
