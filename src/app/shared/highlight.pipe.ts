import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(text: string, search: string): SafeHtml {
    if (!search) {
      return text;
    }
    const regex = new RegExp(search, 'gi');
    const match = text.match(regex);
    if (!match) {
      return text;
    }
    const highlightedText = text.replace(regex, `<span style="background-color: yellow;">${match[0]}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}