import {HtmlTag} from './HtmlTag';

/**
 * Paragraph tag '<p>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ParagraphTag extends HtmlTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'p';
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
}
