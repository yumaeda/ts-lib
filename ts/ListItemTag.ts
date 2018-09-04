import {HtmlTag} from './HtmlTag';

/**
 * ListItem tag '<li>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ListItemTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'li';
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
}

