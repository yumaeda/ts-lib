import { BaseField } from './BaseField';

/**
 * File field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class FileField extends BaseField {
    /**
     * Constructor for FileField class
     *
     * @param string name
     * @return void
     */
    public constructor(name: string) {
        super(name, 'file', '');
    }
}
