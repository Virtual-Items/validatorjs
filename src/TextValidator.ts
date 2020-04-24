/**
 * @export
 * @interface Result
 */
export interface Result {
    message: string
    value: boolean
}

/**
 * @export
 * @interface Report
 */
export interface Report {
    ok: boolean,
    results: Result[]
}

/**
 * @export
 * @class Validator
 */
export class TextValidator {

    /**
     * @private
     * @readonly
     * @type {string}
     * @memberof Validator
     */
    private readonly data: string

    /**
     * @private
     * @readonly
     * @type {object}
     * @memberof Validator
     */
    private readonly messages: any

    /**
     * @private
     * @type {boolean}
     * @memberof Validator
     */
    private results: Result[]

    /**
     * @private
     * @type {boolean}
     * @memberof TextValidator
     */
    private ok: boolean

    /**
     * Creates an instance of Validator.
     * @param {string} data
     * @memberof Validator
     */
    public constructor(data: string) {
        this.data = data.toString().trim()
        
        this.messages = {
            ok: 'ok',
            between: 'is not between',
            endsWith: 'is not ends with',
            false: 'is not false',
            isAlpha: 'is not alpha',
            isAlphaNumeric: 'is not alphanumeric',
            isChecked: 'is not checked',
            isDate: 'is not date',
            isEmail: 'is not email',
            isEmpty: 'is not empty',
            isFloat: 'is not float',
            isHexColor: 'is not hex color',
            isInteger: 'is not integer',
            isNumber: 'is not number',
            isTel: 'is not telephone',
            isTime: 'is not time',
            isUrl: 'is not url',
            isWeek: 'is not week',
            match: 'is not match',
            max: 'is not max',
            min: 'is not min',
            startsWith: 'is not starts with',
            true: 'is not true'
        }

        this.reset()
    }

    /**
     * @memberof Validator
     */
    public reset() {
        this.results = []
        this.ok = true
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public between(min: number =0, max: number =0) {
        const number: number = Number(this.data)
        const value: boolean = number ? (number >= min && number <= max) : false
        const message: string = value ? this.messages.ok : this.messages.between
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public endsWith(text: string = '') {
        const value: boolean = RegExp(text + '$').test(this.data)
        const message: string = value ? this.messages.ok : this.messages.endsWith
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public false() {
        const value: boolean = (this.data === 'false')
        const message: string = value ? this.messages.ok : this.messages.false
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isAlpha() {
        const value: boolean = /^[A-Z]*$/i.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isAlpha
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isAlphaNumeric() {
        const value: boolean = /^[A-Z0-9]*$/i.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isAlphaNumeric
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isChecked() {
        const value: boolean = (this.data === 'true')
        const message: string = value ? this.messages.ok : this.messages.isChecked
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isDate() {
        const value: boolean = (new Date(this.data)).getTime() ? true : false
        const message: string = value ? this.messages.ok : this.messages.isDate
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isEmail() {
        const value: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isEmail
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isEmpty() {
        const value: boolean = this.data === ''
        const message: string = value ? this.messages.ok : this.messages.isEmpty
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isFloat() {
        const number: number = Number(this.data)
        const value: boolean = number ? !Number.isInteger(number) : false
        const message: string = value ? this.messages.ok : this.messages.isFloat
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isHexColor() {
        const value: boolean = /^\#[0-9A-F]{6}$/i.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isHexColor
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isInteger() {
        const number: number = Number(this.data)
        const value: boolean = number ? Number.isInteger(number) : false
        const message: string = value ? this.messages.ok : this.messages.isInteger
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isNumber() {
        const value: boolean = Number(this.data) ? true : false
        const message: string = value ? this.messages.ok : this.messages.isNumber
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isTel() {
        const value: boolean = /^(\d{7}|\d{10})$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isTel
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isTime() {
        const value: boolean = /^(0?[0-9]|[1-2][0-3]):(0?[0-9]|[1-5][0-9])$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isTime
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isUrl() {
        let value: boolean
        try {
            value = (new URL(this.data) ? true : false)
        } catch {
            value = false
        }
        const message: string = value ? this.messages.ok : this.messages.isUrl
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isWeek() {
        const value: boolean = /^(0?[1-9]|[1234][0-9]|5[0-3])$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isWeek
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public match(regexp: RegExp = /./) {
        const value: boolean = regexp.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.match
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public max(max: number =0) {
        const number: number = Number(this.data)
        const value: boolean = number ? number <= max : false
        const message: string = value ? this.messages.ok : this.messages.max
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public min(min: number =0) {
        const number: number = Number(this.data)
        const value: boolean = number ? number >= min : false
        const message: string = value ? this.messages.ok : this.messages.min
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public startsWith(text: string = '') {
        const value: boolean = RegExp('^' + text).test(this.data)
        const message: string = value ? this.messages.ok : this.messages.startsWith
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public true() {
        const value: boolean = (this.data === 'true')
        const message: string = value ? this.messages.ok : this.messages.true
        this.ok = !this.ok ? false : value
        this.results.push({message, value})
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public getReports(): Report {
        const info: Report = {
            ok: this.ok,
            results: this.results
        }

        this.reset()

        return info
    }
    
}

/**
 * @export
 * @param data 
 * @param regexp 
 */
export const matchRegex = (data: string, regexp: RegExp) => {
    return data.toString().match(regexp) !== null
}

/**
 * @export
 * @param data 
 * @param regexp 
 */
export const testRegex = (data: string, regexp: RegExp) => {
    return regexp.test(data.toString())
}

/**
 * @export
 * @param data 
 */
export const check = (data: string) => {
    return (new TextValidator(data))
}
