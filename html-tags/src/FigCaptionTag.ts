import {HtmlTag} from './HtmlTag';

/**
 * FigCaption tag '<figcaption>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class FigCaptionTag extends HtmlTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'figcaption';
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
