import {HtmlTagInterface} from './HtmlTagInterface';

/**
 * Base class of all the HTML tags
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class HtmlTag implements HtmlTagInterface {
    /**
     * Value of the tag
     */
    value: string;

    /**
     * Key-value pair of the attributes
     */
    attributes: { key: string, value: string }[];

    /**
     * Values of the tag's class attribute
     */
    classes: string[];

    /**
     * Constructor for HtmlTag class
     *
     * @param string tag
     * @param string value
     * @return void
     */
    constructor(value: string) {
        this.value      = value;
        this.attributes = []; 
        this.classes    = [];
    }

    /**
     * Generates value of "class" attribute
     *
     * @access private
     * @return string
     */
    _generateClassAttribute(): string {
        let class_count = this.classes.length;
        if (class_count === 0) {
            return '';
        }

        let class_value = '';
        for (let i = 0; i < class_count; ++i) {
            let cur_class = this.classes[i];
            if (cur_class) {
                class_value += cur_class;
            }

            if (i < (class_count - 1)) {
                class_value += ' ';
            }
        }

        return ('class="' + class_value + '"');
    }

    /**
     * Generates HTML opening tag
     *
     * @access private
     * @return string
     */
    _generateOpeningTag(): string {
        let html = '',
            tag  = this.getTagName();

        if (tag && (tag.length > 0)) {
            html = '<' + tag;

            // Adds class attributes.
            let class_attr = this._generateClassAttribute();
            if (class_attr !== '') {
                html += ' ' + class_attr;
            }

            let attr_count = this.attributes.length;
            for (let i = 0; i < attr_count; ++i) {
                let attr = this.attributes[i];
                if (attr.value && (attr.key !== 'class')) {
                    html += ' ' + attr.key + '="' + attr.value + '"';
                }
            }

            html += '>';
        }

        return html;
    }

    /**
     * Generates HTML closing tag
     *
     * @access private
     * @return string
     */
    _generateClosingTag(): string {
        return ('</' + this.getTagName() + '>');
    }

    /**
     * Adds an attribute for HTML tag
     *
     * @access public 
     * @param string key
     * @param string value
     * @return void
     */
    addAttr(key: string, value: string) {
        // key cannot be an empty string, but value can.
        if ((key && key.length > 0) && (value)) {
            this.attributes.push({ key: key, value: value});
        }
    }

    /**
     * Adds a "class" attribute
     *
     * @access public 
     * @param string class_name
     * @return void
     */
    addClass(class_name: string): void {
        if (class_name && (class_name.length > 0)) {
            this.classes.push(class_name);
        }
    }

    /**
     * Get name of the tag
     *
     * @access public 
     * @return string
     */
    getTagName(): string {
        return '';
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @access public 
     * @return boolean
     */
    isSelfClosing(): boolean {
        return true;
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @access public 
     * @return boolean
     */
    isBlock(): boolean {
        return false;
    }

    /**
     * Gets an inner HTML of the tag
     *
     * @access public 
     * @return string
     */
    getInnerHtml(): string {
        return this.isSelfClosing() ? '' : this.value;
    }

    /**
     * Gets an outer HTML of the tag
     *
     * @access public 
     * @return string
     */
    getOuterHtml(): string {
        if (this.isSelfClosing() && this.value) {
            this.attributes.push({ key: 'value', value: this.value });
        }

        let html = this._generateOpeningTag();
        if (!this.isSelfClosing()) {
            html += this.value + this._generateClosingTag();
        }

        return html;
    }
}

