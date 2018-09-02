import {HtmlTag} from './HtmlTag';

/**
 * Anchor tag '<a>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class AnchorTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'a';
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
        return false;
    }

    /**
     * Constructor for AnchorTag class
     *
     * @param string url
     * @param string value
     * @return void
     */
    constructor(url: string, value: string) {
        super(value);

        if (url && (url.length > 0)) {
            super.addAttr('href', url);
        }
    }
}

