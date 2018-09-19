/**
 * Interface for HTML tags
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export interface IHtmlTag {
    getTagName(): string;
    isSelfClosing(): boolean;
    isBlock(): boolean;
    getInnerHtml(): string;
    getOuterHtml(): string;
}
