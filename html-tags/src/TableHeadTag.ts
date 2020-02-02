import { TableContainerTag } from './TableContainerTag'

/**
 * Table head class '<thead>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableHeadTag extends TableContainerTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'thead'
    }
}
