import { HtmlTag } from './HtmlTag'

/**
 * Image tag '<img>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ImageTag extends HtmlTag {
    /**
     * Constructor for ImageTag class
     *
     * @param string url
     * @return void
     */
    public constructor(url: string) {
        super('')
        super.addAttr('src', url)
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'img'
    }
}
