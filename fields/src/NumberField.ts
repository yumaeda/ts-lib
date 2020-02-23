import { BaseField } from './BaseField'

/**
 * Number field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class NumberField extends BaseField {
    /**
     * Constructor for NumberField class
     *
     * @param string name
     * @param string value
     * @return void
     */
    public constructor(name: string, value: string) {
        super(name, 'number', value)
    }
}
