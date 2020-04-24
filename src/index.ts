import { check, Report } from './TextValidator'

const a: Report = check('true').true().isAlpha().getReports()

console.log(a.ok)
a.results.map(({message, value}) => console.log(message, value))
