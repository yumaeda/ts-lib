import {HtmlTag} from './HtmlTag';

/**
 * Span tag '<span>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class SpanTag extends HtmlTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'span';
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
        return false;
    }
}
