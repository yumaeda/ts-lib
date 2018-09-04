import {HtmlTag} from './HtmlTag';

/**
 * Button tag '<button>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ButtonTag extends HtmlTag {
    /**
     * Constructor for ButtonTag class
     *
     * @param string value
     * @return void
     */
    public constructor(value: string) {
        super(value);
        super.addAttr('type', 'button');
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'button';
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @return boolean
     */
    public isSelfClosing(): boolean {
        return false;
    }
}
