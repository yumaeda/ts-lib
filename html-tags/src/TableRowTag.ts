import { HtmlTag } from './HtmlTag'
import { TableColumnTag } from './TableColumnTag'

/**
 * Table row tag '<tr>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableRowTag extends HtmlTag {
    /**
     * Array of table columns
     */
    private columns: TableColumnTag[]

    /**
     * Constructor for InputTag class
     *
     * @return void
     */
    public constructor() {
        super('')
        this.columns = []
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'tr'
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @return boolean
     */
    public isSelfClosing(): boolean {
        return false
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @return boolean
     */
    public isBlock(): boolean {
        return true
    }

    /**
     * Add a table column
     *
     * @param TableColumnTag column
     * @return void
     */
    public addColumn(column: TableColumnTag): void {
        this.columns.push(column)
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @return string
     */
    public getInnerHtml(): string {
        let html = ''

        const columnCount = this.columns.length
        for (let i = 0; i < columnCount; ++i) {
            html += this.columns[i].getOuterHtml()
        }

        return html
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @return string
     */
    public getOuterHtml(): string {
        this.value = this.getInnerHtml()

        return super.getOuterHtml()
    }
}
