import {SelectTag} from './SelectTag';

const figTag: any = new SelectTag();
figTag.addLabel('Suck Me');
figTag.addOption('cock', '0');
figTag.addOption('dick', '1');
figTag.addOption('penis', '2');
figTag.setSelectedIndex(1);

document.write(figTag.getInnerHtml());
document.write(figTag.getOuterHtml());
