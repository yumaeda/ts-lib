import {HtmlTag} from './HtmlTag';

/**
 * Image tag '<img>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ImageTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'img';
    }

    /**
     * Constructor for ImageTag class
     *
     * @param string url
     * @return void
     */
    constructor(url: string) {
        super('');
        super.addAttr('src', url);
    }
}

