import { HtmlTag } from './HtmlTag'

/**
 * Table column tag '<td>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableColumnTag extends HtmlTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'td'
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
}
