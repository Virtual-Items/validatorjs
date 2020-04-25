/**
 * @export
 * @interface Result
 */
export interface Result {
    code: string,
    message: string
}

/**
 * @export
 * @interface Report
 */
export interface Report {
    ok: boolean,
    success: Result[],
    errors: Result[]
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
     * @readonly
     * @type {object}
     * @memberof Validator
     */
    private readonly codes: any

    /**
     * @private
     * @type {boolean}
     * @memberof Validator
     */
    private success: Result[]

    /**
     * @private
     * @type {boolean}
     * @memberof Validator
     */
    private errors: Result[]

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
    public constructor(data: any = '') {
        this.data = data.toString().trim()
        
        this.messages = {
            ok: 'ok',
            endsWith: 'is not ends with',
            isAlpha: 'is not alpha',
            isAlphaNumeric: 'is not alphanumeric',
            isBetween: 'is not between',
            isBoolean: 'is not boolean',
            isChecked: 'is not checked',
            isDate: 'is not date',
            isEmail: 'is not email',
            isEmpty: 'is not empty',
            isFalse: 'is not false',
            isFloat: 'is not float',
            isHexColor: 'is not hex color',
            isInteger: 'is not integer',
            isMax: 'is not max',
            isMin: 'is not min',
            isMobilePhone: 'is not telephone',
            isNumeric: 'is not numeric',
            isTime: 'is not time',
            isTrue: 'is not true',
            isUrl: 'is not url',
            isWeek: 'is not week',
            lengthIsBetween: 'length is not between',
            lengthIsMax: 'length is not max',
            lengthIsMin: 'length is not min',
            matches: 'is not match',
            startsWith: 'is not starts with',
            isNotEmpty: 'is empty',
            equals: 'is not equals',
        }

        this.codes = {
            endsWith: 'endswith',
            isAlpha: 'alpha',
            isAlphaNumeric: 'alphanumeric',
            isBetween: 'between',
            isBoolean: 'boolean',
            isChecked: 'checked',
            isDate: 'date',
            isEmail: 'email',
            isEmpty: 'empty',
            isFalse: 'false',
            isFloat: 'float',
            isHexColor: 'hexcolor',
            isInteger: 'integer',
            isMax: 'max',
            isMin: 'min',
            isMobilePhone: 'mobilephone',
            isNumeric: 'numeric',
            isTime: 'time',
            isTrue: 'true',
            isUrl: 'url',
            isWeek: 'week',
            lengthIsBetween: 'lengthbetween',
            lengthIsMax: 'lengthmax',
            lengthIsMin: 'lengthmin',
            matches: 'matches',
            startsWith: 'startswith',
            isNotEmpty: 'notempty',
            equals: 'equals',
        }

        this.reset()
    }

    /**
     * @memberof Validator
     */
    public reset() {
        this.success = []
        this.errors = []
        this.ok = true
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isBetween(min: number =0, max: number =0) {
        const number: number = Number(this.data)
        const value: boolean = number ? (number >= min && number <= max) : false
        const message: string = value ? this.messages.ok : this.messages.isBetween
        const code: string = this.codes.isBetween
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public endsWith(text: string = '') {
        const value: boolean = RegExp(text + '$').test(this.data)
        const message: string = value ? this.messages.ok : this.messages.endsWith
        const code: string = this.codes.endsWith
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isFalse() {
        const value: boolean = (this.data === 'false')
        const message: string = value ? this.messages.ok : this.messages.isFalse
        const code: string = this.codes.isFalse
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isAlpha() {
        const value: boolean = /^[A-Z]*$/i.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isAlpha
        const code: string = this.codes.isAlpha
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isAlphaNumeric() {
        const value: boolean = /^[A-Z0-9]*$/i.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isAlphaNumeric
        const code: string = this.codes.isAlphaNumeric
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isChecked() {
        const value: boolean = (this.data === 'true')
        const message: string = value ? this.messages.ok : this.messages.isChecked
        const code: string = this.codes.isChecked
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isDate() {
        const value: boolean = (new Date(this.data)).getTime() ? true : false
        const message: string = value ? this.messages.ok : this.messages.isDate
        const code: string = this.codes.isDate
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isEmail() {
        const value: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isEmail
        const code: string = this.codes.isEmail
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isEmpty() {
        const value: boolean = this.data.length == 0
        const message: string = value ? this.messages.ok : this.messages.isEmpty
        const code: string = this.codes.isEmpty
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isNotEmpty() {
        const value: boolean = this.data.length != 0
        const message: string = value ? this.messages.ok : this.messages.isNotEmpty
        const code: string = this.codes.isNotEmpty
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
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
        const code: string = this.codes.isFloat
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isHexColor() {
        const value: boolean = /^\#[0-9A-F]{6}$/i.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isHexColor
        const code: string = this.codes.isHexColor
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
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
        const code: string = this.codes.isInteger
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isNumeric() {
        const value: boolean = Number(this.data) ? true : false
        const message: string = value ? this.messages.ok : this.messages.isNumeric
        const code: string = this.codes.isNumeric
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isMobilePhone() {
        const value: boolean = /^[\+]? ?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isMobilePhone
        const code: string = this.codes.isMobilePhone
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isTime() {
        const value: boolean = /^(0?[0-9]|[1-2][0-3]):(0?[0-9]|[1-5][0-9])$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isTime
        const code: string = this.codes.isTime
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
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
        const code: string = this.codes.isUrl
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }
    
    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isWeek() {
        const value: boolean = /^(0?[1-9]|[1234][0-9]|5[0-3])$/.test(this.data)
        const message: string = value ? this.messages.ok : this.messages.isWeek
        const code: string = this.codes.isWeek
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @param {string} [regexp='']
     * @returns {Validator}
     * @memberof Validator
     */
    public matches(regexp: string = '') {
        const value: boolean = RegExp(regexp).test(this.data)
        const message: string = value ? this.messages.ok : this.messages.matches
        const code: string = this.codes.matches
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

     /**
     * @param {string} [regexp='']
     * @returns {Validator}
     * @memberof Validator
     */
    public equals(regexp: string = '') {
        const value: boolean = RegExp('^' + regexp + '$').test(this.data)
        const message: string = value ? this.messages.ok : this.messages.equals
        const code: string = this.codes.equals
        this.ok = !this.ok ? false : value
        console.log(regexp, this.data, value)
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @param {number} [max=0]
     * @returns {Validator}
     * @memberof Validator
     */
    public isMax(max: number =0) {
        const number: number = Number(this.data)
        const value: boolean = number ? number <= max : false
        const message: string = value ? this.messages.ok : this.messages.isMax
        const code: string = this.codes.isMax
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @param {number} [min=0]
     * @returns {Validator}
     * @memberof Validator
     */
    public isMin(min: number =0) {
        const number: number = Number(this.data)
        const value: boolean = number ? number >= min : false
        const message: string = value ? this.messages.ok : this.messages.isMin
        const code: string = this.codes.isMin
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public startsWith(text: string = '') {
        const value: boolean = RegExp('^' + text).test(this.data)
        const message: string = value ? this.messages.ok : this.messages.startsWith
        const code: string = this.codes.startsWith
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isTrue() {
        const value: boolean = (this.data === 'true')
        const message: string = value ? this.messages.ok : this.messages.isTrue
        const code: string = this.codes.isTrue
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public isBoolean() {
        const value: boolean = (this.data === 'true' || this.data === 'false')
        const message: string = value ? this.messages.ok : this.messages.isBoolean
        const code: string = this.codes.isBoolean
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @param {number} [min=0]
     * @param {number} [max=0]
     * @returns {Validator}
     * @memberof Validator
     */
    public lengthIsBetween(min: number =0, max: number =0) {
        const number: number = this.data.length
        const value: boolean = number ? (number >= min && number <= max) : false
        const message: string = value ? this.messages.ok : this.messages.lengthIsBetween
        const code: string = this.codes.lengthIsBetween
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @param {number} [max=0]
     * @returns {Validator}
     * @memberof Validator
     */
    public lengthIsMax(max: number =0) {
        const number: number = this.data.length
        const value: boolean = number ? number <= max : false
        const message: string = value ? this.messages.ok : this.messages.lengthIsMax
        const code: string = this.codes.lengthIsMax
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @param {number} [min=0]
     * @returns {Validator}
     * @memberof Validator
     */
    public lengthIsMin(min: number =0) {
        const number: number = this.data.length
        const value: boolean = number ? number >= min : false
        const message: string = value ? this.messages.ok : this.messages.lengthIsMin
        const code: string = this.codes.lengthIsMin
        this.ok = !this.ok ? false : value
        if (value) {
            this.success.push({message, code})
        } else {
            this.errors.push({message, code})
        }
        return this
    }

    /**
     * @returns {Validator}
     * @memberof Validator
     */
    public getReports(): Report {
        const info: Report = {
            ok: this.ok,
            errors: this.errors,
            success: this.success
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
