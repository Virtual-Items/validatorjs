import { check, Report } from './TextValidator'

// Validate
const resports: Report = check('true').isNumber().true().getReports()

// Get General Boolen
console.log(resports.ok)

// Get Each One Boolean
resports.results.map(({message, value}) => console.log(message, value))
