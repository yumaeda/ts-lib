import { NumberField } from './NumberField';

/**
 * Currency field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class CurrencyField extends NumberField {
    /**
     * Currency unit
     */
    public unit: string;

    /**
     * Constructor for CurrencyField class
     *
     * @param string name
     * @param string value
     * @return void
     */
    public constructor(name: string, value: string) {
        super(name, value);

        this.addAttr('step', '10');
        this.unit = 'yen';
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @return string
     */
    public getOuterHtml(): string {
        return (super.getOuterHtml() + '&nbsp;' + this.unit);
    }
}
