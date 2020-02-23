import { BaseField } from './BaseField'

/**
 * Text field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TextField extends BaseField {
    /**
     * Constructor for TextField class
     *
     * @param string name
     * @param string value
     * @return void
     */
    public constructor(name: string, value: string) {
        super(name, 'text', value)
    }
}
