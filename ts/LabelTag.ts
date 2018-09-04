import {HtmlTag} from './HtmlTag';

/**
 * Label tag '<label>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class LabelTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'label';
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
     * Constructor for LabelTag class
     *
     * @param string target
     * @param string value
     * @return void
     */
    constructor(target: string, value: string) {
        super(value);

        if (target && (target.length > 0)) {
            super.addAttr('for', target);
        }
    }
}

