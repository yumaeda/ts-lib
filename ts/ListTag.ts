import {HtmlTag} from './HtmlTag';
import {ListItemTag} from './ListItemTag';

/**
 * List tag '<ul> or <ol>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ListTag extends HtmlTag
{
    /**
     * Boolean value whether the list is ordered or not
     */
    ordered: boolean;

    /**
     * List items
     */
    items: ListItemTag[];

    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return this.ordered ? 'ol' : 'ul';
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @access public 
     * @return boolean
     */
    isSelfClosing(): boolean {
        return false;
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @access public 
     * @return boolean
     */
    isBlock(): boolean {
        return true;
    }

    /**
     * Constructor for ListTag class
     *
     * @param boolean ordered
     * @return void
     */
    constructor(ordered: boolean) {
        super('');

        this.ordered = ordered;
        this.items = [];
    }

    /**
     * Add the specified item to the list
     *
     * @param ListItemTag item
     * @return void
     */
    addItem(item: ListItemTag): void {
        this.items.push(item);
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @access public 
     * @return string
     */
    getInnerHtml(): string {
        let html       = '',
            item_count = this.items.length;
        for (let i = 0; i < item_count; ++i) {
            html += this.items[i].getOuterHtml();
        }

        return html;
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @access public 
     * @return string
     */
    getOuterHtml(): string {
        this.value = this.getInnerHtml();

        return super.getOuterHtml();
    }
}

