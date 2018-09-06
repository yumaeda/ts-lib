import {FigureTag} from './FigureTag';

const figTag: any = new FigureTag('https://static.zerochan.net/Stellar.Loussier.full.12582.jpg', 'Google');

document.write(figTag.getInnerHtml());
document.write(figTag.getOuterHtml());
