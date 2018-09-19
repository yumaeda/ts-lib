import {TableBodyTag} from './TableBodyTag';
import {TableColumnTag} from './TableColumnTag';
import {TableFootTag} from './TableFootTag';
import {TableHeadTag} from './TableHeadTag';
import {TableRowTag} from './TableRowTag';
import {TableTag} from './TableTag';

const tableTag: any = new TableTag();
const headRow: any = new TableRowTag();
const bodyRow: any = new TableRowTag();
const footRow: any = new TableRowTag();

for (let i = 0; i < 10; ++i) {
    headRow.addColumn(new TableColumnTag('<span>' + i + '</span>'));
}
tableTag.head.addRow(headRow);

for (let i = 0; i < 10; ++i) {
    bodyRow.addColumn(new TableColumnTag('<span>' + (i * 2) + '</span>'));
}
tableTag.body.addRow(bodyRow);

for (let i = 0; i < 10; ++i) {
    footRow.addColumn(new TableColumnTag('<span>' + (i * 3) + '</span>'));
}
tableTag.foot.addRow(footRow);

document.write(tableTag.getOuterHtml());
