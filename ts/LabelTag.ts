import {HtmlTag} from './HtmlTag';

/**
 * Label tag '<label>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class LabelTag extends HtmlTag {
    /**
     * Constructor for LabelTag class
     *
     * @param string target
     * @param string value
     * @return void
     */
    public constructor(target: string, value: string) {
        super(value);

        if (target && (target.length > 0)) {
            super.addAttr('for', target);
        }
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'label';
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
