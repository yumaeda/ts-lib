import {HtmlTag} from './HtmlTag';

/**
 * TextArea tag '<textarea>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TextAreaTag extends HtmlTag {
    /**
     * Constructor for InputTag class
     *
     * @param string name
     * @param string value
     * @return void
     */
    public constructor(name: string, value: string) {
        super(value);
        super.addAttr('name', name);
        super.addAttr('rows', '4');
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'textarea';
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
