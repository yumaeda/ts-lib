import { TableColumnTag } from './TableColumnTag'
import { TableRowTag } from './TableRowTag'
import { TableTag } from './TableTag'

const tableTag: TableTag = new TableTag()
const headRow: TableRowTag = new TableRowTag()
const bodyRow: TableRowTag = new TableRowTag()
const footRow: TableRowTag = new TableRowTag()

for (let i = 0; i < 10; ++i) {
    headRow.addColumn(new TableColumnTag('<span>' + i + '</span>'))
}
tableTag.head.addRow(headRow)

for (let i = 0; i < 10; ++i) {
    bodyRow.addColumn(new TableColumnTag('<span>' + i * 2 + '</span>'))
}
tableTag.body.addRow(bodyRow)

for (let i = 0; i < 10; ++i) {
    footRow.addColumn(new TableColumnTag('<span>' + i * 3 + '</span>'))
}
tableTag.foot.addRow(footRow)

document.write(tableTag.getOuterHtml())
