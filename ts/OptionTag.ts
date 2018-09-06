import {HtmlTag} from './HtmlTag';

/**
 * Option tag '<option>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class OptionTag extends HtmlTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'option';
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
     * Disable the option by adding 'disabled' attribute
     *
     * @return void
     */
    public disable(): void {
        this.addAttr('disabled', 'disabled');
    }
}
