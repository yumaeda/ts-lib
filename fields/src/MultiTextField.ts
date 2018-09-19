import { TextAreaTag } from '../../html-tags/src/TextAreaTag';

/**
 * Multi-text Hidden field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class MultiTextField extends TextAreaTag {
    /**
     * Constructor for MultiTextField class
     *
     * @param string name
     * @param string value
     * @return void
     */
    public constructor(name: string, value: string) {
        super(name, value);
    }
}
