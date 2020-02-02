/**
 * Key Value Pair
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class KeyValuePair {
    /**
     * Key for retrieving a value
     */
    public key: string

    /**
     * Value to be retrieved
     */
    public value: string

    /**
     * Constructor for KeyValuePair class
     *
     * @param string key
     * @param string value
     * @return void
     */
    public constructor(key: string, value: string) {
        this.key = key
        this.value = value
    }
}
