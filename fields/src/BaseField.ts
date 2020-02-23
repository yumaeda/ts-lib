import { InputTag } from '../../html-tags/src/InputTag'

/**
 * Base field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class BaseField extends InputTag {
    /**
     * Whether the field is required or not
     */
    public required: boolean

    /**
     * Constructor for InputTag class
     *
     * @param string name
     * @param string type
     * @param string value
     * @return void
     */
    public constructor(name: string, type: string, value: string) {
        super(name, type, value)

        this.required = false
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @return string
     */
    public getOuterHtml(): string {
        if (this.required) {
            this.addAttr('required', 'required')
        }

        return super.getOuterHtml()
    }
}
