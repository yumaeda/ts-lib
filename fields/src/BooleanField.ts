import { BaseField } from './BaseField';

/**
 * Boolean field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class BooleanField extends BaseField {
    /**
     * Constructor for InputTag class
     *
     * @param string name
     * @param boolen selected
     * @return void
     */
    public constructor(name: string, selected: boolean) {
        super(name, 'checkbox', '1');

        if (selected) {
            this.addAttr('checked', 'checked');
        }
    }
}
