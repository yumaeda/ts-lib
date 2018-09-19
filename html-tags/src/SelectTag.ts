import {HtmlTag} from './HtmlTag';
import {OptionTag} from './OptionTag';

/**
 * Select tag '<select>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class SelectTag extends HtmlTag {
    /**
     * Selected index
     */
    private selectedIndex: number;

    /**
     * Options for the select tag
     */
    private options: OptionTag[];

    /**
     * Constructor for SelectTag class
     *
     * @return void
     */
    public constructor() {
        super('');

        this.selectedIndex = 0;
        this.options = [];
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'select';
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
     * Add an option
     *
     * @param string text
     * @param string value
     * @return void
     */
    public addOption(text: string, value: string): void {
        const optionTag = new OptionTag(text);
        optionTag.addAttr('value', value);
        this.options.push(optionTag);
    }

    /**
     * Add label
     *
     * @param string label
     * @return void
     */
    public addLabel(label: string): void {
        const optionTag = new OptionTag(label);
        optionTag.addAttr('value', '-1');
        optionTag.disable();
        this.options.push(optionTag);
    }

    /**
     * Set selected index
     *
     * @param number index
     * @return void
     */
    public setSelectedIndex(index: number) {
        if ((index < 0) || (index >= this.options.length)) {
            throw new RangeError('Index is out of range.');
        }

        this.selectedIndex = index;
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @return string
     */
    public getInnerHtml(): string {
        let html = '';

        const optionCount = this.options.length;
        for (let i = 0; i < optionCount; ++i) {
            if (this.selectedIndex === i) {
                this.options[i].addAttr('selected', 'selected');
            }

            html += this.options[i].getOuterHtml();
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
