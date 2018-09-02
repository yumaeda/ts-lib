import {HtmlTag} from './HtmlTag';

/**
 * Span tag '<span>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class SpanTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'span';
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
}

