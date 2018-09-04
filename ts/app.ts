import {ImageTag} from './ImageTag';

const imgTag: any = new ImageTag('https://static.zerochan.net/Stellar.Loussier.full.12582.jpg');

document.write(imgTag.getOuterHtml());
document.write(imgTag.getInnerHtml());
