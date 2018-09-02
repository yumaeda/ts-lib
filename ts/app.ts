import {SpanTag} from './SpanTag';

let pTag: any = new SpanTag('Google');
console.log(pTag.getOuterHtml());
console.log(pTag.getInnerHtml());
