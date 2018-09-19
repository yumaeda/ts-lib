import {TableContainerTag} from './TableContainerTag';

/**
 * Table body class '<tbody>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TableBodyTag extends TableContainerTag {
    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'tbody';
    }
}
