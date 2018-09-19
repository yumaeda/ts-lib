import {HtmlTag} from './HtmlTag';
import {ListItemTag} from './ListItemTag';

/**
 * List tag '<ul> or <ol>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ListTag extends HtmlTag {
    /**
     * Boolean value whether the list is ordered or not
     */
    private ordered: boolean;

    /**
     * List items
     */
    private items: ListItemTag[];

    /**
     * Constructor for ListTag class
     *
     * @param boolean ordered
     * @return void
     */
    public constructor(ordered: boolean) {
        super('');

        this.ordered = ordered;
        this.items = [];
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return this.ordered ? 'ol' : 'ul';
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
     * Add the specified item to the list
     *
     * @param ListItemTag item
     * @return void
     */
    public addItem(item: ListItemTag): void {
        this.items.push(item);
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @return string
     */
    public getInnerHtml(): string {
        let html = '';

        const itemCount = this.items.length;
        for (let i = 0; i < itemCount; ++i) {
            html += this.items[i].getOuterHtml();
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
