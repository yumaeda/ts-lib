import {InputTag} from './InputTag';

let pTag: any = new InputTag('price', 'number', '9');
console.log(pTag.getOuterHtml());
console.log(pTag.getInnerHtml());
