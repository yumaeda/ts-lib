import { HtmlTag } from './HtmlTag'

/**
 * Input tag '<input>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class InputTag extends HtmlTag {
    /**
     * Constructor for InputTag class
     *
     * @param string name
     * @param string type
     * @param string value
     * @return void
     */
    public constructor(name: string, type: string, value: string) {
        super(value)

        if (name && name.length > 0) {
            super.addAttr('name', name)
        }

        if (type && type.length > 0) {
            super.addAttr('type', type)
        }
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'input'
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @return boolean
     */
    public isSelfClosing(): boolean {
        return true
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @return boolean
     */
    public isBlock(): boolean {
        return false
    }
}
