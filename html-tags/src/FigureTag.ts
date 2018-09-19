import {FigCaptionTag} from './FigCaptionTag';
import {HtmlTag} from './HtmlTag';
import {ImageTag} from './ImageTag';

/**
 * Figure tag '<figure>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class FigureTag extends HtmlTag {
    /**
     * Constructor for Figure class
     *
     * @param string name
     * @param string type
     * @param string value
     * @return void
     */
    constructor(imgUrl: string, imgCaption: string) {
        super('');

        const imageTag = new ImageTag(imgUrl);
        const figCaptionTag = new FigCaptionTag(imgCaption);
        this.value = imageTag.getOuterHtml() + figCaptionTag.getOuterHtml();
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'figure';
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
