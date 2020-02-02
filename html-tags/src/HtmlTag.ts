import { HtmlTagInterface } from './HtmlTagInterface'
import { KeyValuePair } from './KeyValuePair'

/**
 * Base class of all the HTML tags
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class HtmlTag implements HtmlTagInterface {
    /**
     * Value of the tag
     */
    protected value: string

    /**
     * Key-value pair of the attributes
     */
    private attributes: KeyValuePair[]

    /**
     * Values of the tag's class attribute
     */
    private classes: string[]

    /**
     * Constructor for HtmlTag class
     *
     * @param string value
     * @return void
     */
    public constructor(value: string) {
        this.value = value
        this.attributes = []
        this.classes = []
    }

    /**
     * Adds an attribute for HTML tag
     *
     * @param string key
     * @param string value
     * @return void
     */
    public addAttr(key: string, value: string): void {
        // key cannot be an empty string, but value can.
        if (key && key.length > 0 && value) {
            this.attributes.push(new KeyValuePair(key, value))
        }
    }

    /**
     * Adds a "class" attribute
     *
     * @param string className
     * @return void
     */
    public addClass(className: string): void {
        if (className && className.length > 0) {
            this.classes.push(className)
        }
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return ''
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @return boolean
     */
    public isSelfClosing(): boolean {
        return true
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @return boolean
     */
    public isBlock(): boolean {
        return false
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @return string
     */
    public getInnerHtml(): string {
        return this.isSelfClosing() ? '' : this.value
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @return string
     */
    public getOuterHtml(): string {
        if (this.isSelfClosing() && this.value) {
            this.attributes.push(new KeyValuePair('value', this.value))
        }

        let html = this.generateOpeningTag()
        if (!this.isSelfClosing()) {
            html += this.value + this.generateClosingTag()
        }

        return html
    }

    /**
     * Generates value of "class" attribute
     *
     * @return string
     */
    private generateClassAttribute(): string {
        const classCount = this.classes.length
        if (classCount === 0) {
            return ''
        }

        let classValue = ''
        for (let i = 0; i < classCount; ++i) {
            const curClass = this.classes[i]
            if (curClass) {
                classValue += curClass
            }

            if (i < classCount - 1) {
                classValue += ' '
            }
        }

        return 'class="' + classValue + '"'
    }

    /**
     * Generates HTML opening tag
     *
     * @return string
     */
    private generateOpeningTag(): string {
        let html = ''
        const tag = this.getTagName()

        if (tag && tag.length > 0) {
            html = '<' + tag

            // Adds class attributes.
            const classAttr = this.generateClassAttribute()
            if (classAttr !== '') {
                html += ' ' + classAttr
            }

            const attrCount = this.attributes.length
            for (let i = 0; i < attrCount; ++i) {
                const key = this.attributes[i].key
                const value = this.attributes[i].value
                if (value && key !== 'class') {
                    html += ' ' + key + '="' + value + '"'
                }
            }

            html += '>'
        }

        return html
    }

    /**
     * Generates HTML closing tag
     *
     * @return string
     */
    private generateClosingTag(): string {
        return '</' + this.getTagName() + '>'
    }
}
