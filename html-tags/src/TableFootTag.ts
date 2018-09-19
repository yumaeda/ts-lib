import {TableContainerTag} from './TableContainerTag';

/**
 * Table foot class '<tfoot>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableFootTag extends TableContainerTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'tfoot';
    }
}
