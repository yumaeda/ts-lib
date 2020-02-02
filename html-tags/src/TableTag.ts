import { HtmlTag } from './HtmlTag'
import { TableBodyTag } from './TableBodyTag'
import { TableFootTag } from './TableFootTag'
import { TableHeadTag } from './TableHeadTag'

/**
 * Table tag '<table>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableTag extends HtmlTag {
    /**
     * Table head container
     */
    public head: TableHeadTag

    /**
     * Table body container
     */
    public body: TableBodyTag

    /**
     * Table foot container
     */
    public foot: TableFootTag

    /**
     * Constructor for TableTag class
     *
     * @return void
     */
    constructor() {
        super('')

        this.head = new TableHeadTag()
        this.body = new TableBodyTag()
        this.foot = new TableFootTag()
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'table'
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
     * Gets an inner HTML of the tag
     *
     * @return string
     */
    public getInnerHtml(): string {
        let html = ''
        html += this.head.getOuterHtml()
        html += this.body.getOuterHtml()
        html += this.foot.getOuterHtml()

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
