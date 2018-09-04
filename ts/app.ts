import {ListItemTag} from './ListItemTag';
import {ListTag} from './ListTag';

let listTag: any = new ListTag(true);
listTag.addItem(new ListItemTag('<span>DICK</span>'));
listTag.addItem(new ListItemTag('<span>COCK</span>'));
listTag.addItem(new ListItemTag('<span>PENUS</span>'));
console.log(listTag.getOuterHtml());
console.log(listTag.getInnerHtml());
