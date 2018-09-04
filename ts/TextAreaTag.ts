import {HtmlTag} from './HtmlTag';

/**
 * TextArea tag '<textarea>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TextAreaTag extends HtmlTag
{
    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return 'textarea';
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
     * Constructor for InputTag class
     *
     * @param string name
     * @param string value
     * @return void
     */
    constructor(name: string, value: string) {
        super(value);
        super.addAttr('name', name);
        super.addAttr('rows', '4');
    }
}

