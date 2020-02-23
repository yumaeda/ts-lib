import { SelectTag } from '../../html-tags/src/SelectTag'

/**
 * Choice field
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ChoiceField extends SelectTag {
    /**
     * Constructor for ChoiceField class
     *
     * @param string name
     * @return void
     */
    public constructor(name: string) {
        super()
        this.addAttr('name', name)
    }
}
