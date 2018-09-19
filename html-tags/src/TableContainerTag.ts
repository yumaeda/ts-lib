import {HtmlTag} from './HtmlTag';
import {TableRowTag} from './TableRowTag';

/**
 * Base class of '<thead>', '<tbody>', and '<tfoot>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableContainerTag extends HtmlTag {
    /**
     * Array of table columns
     */
    private rows: TableRowTag[];

    /**
     * Constructor for InputTag class
     *
     * @return void
     */
    public constructor() {
        super('');
        this.rows = [];
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @return boolean
     */
    public isSelfClosing(): boolean {
        return false;
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @return boolean
     */
    public isBlock(): boolean {
        return true;
    }

    /**
     * Get the last row
     *
     * @return TableRowTag last table row
     */
    public getLastRow(): TableRowTag {
        return this.rows[this.rows.length - 1];
    }

    /**
     * Add a table row
     *
     * @param TableRowTag row
     * @return void
     */
    public addRow(row: TableRowTag): void {
        this.rows.push(row);
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @return string
     */
    public getInnerHtml(): string {
        let html = '';

        const rowCount = this.rows.length;
        for (let i = 0; i < rowCount; ++i) {
            html += this.rows[i].getOuterHtml();
        }

        return html;
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @return string
     */
    public getOuterHtml(): string {
        this.value = this.getInnerHtml();

        return super.getOuterHtml();
    }
}
