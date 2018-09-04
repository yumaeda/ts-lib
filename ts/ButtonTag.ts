import {HtmlTag} from './HtmlTag';

/**
 * Button tag '<button>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ButtonTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'button';
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
     * Constructor for ButtonTag class
     *
     * @param string value
     * @return void
     */
    constructor(value: string) {
        super(value);
        super.addAttr('type', 'button');
    }
}

