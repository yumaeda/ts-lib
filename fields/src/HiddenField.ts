import { BaseField } from './BaseField'

/**
 * Hidden field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class HiddenField extends BaseField {
    /**
     * Constructor for HiddenField class
     *
     * @param string name
     * @param string value
     * @return void
     */
    public constructor(name: string, value: string) {
        super(name, 'hidden', value)
    }
}
