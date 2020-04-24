import { check, Report } from './TextValidator'

// Validate
const resports: Report = check('true').isNumeric().isTrue().getReports()

// Get General Boolen
console.log(resports.ok)

// Get Each One Boolean
resports.errors.map(({message, code}) => console.log(message, code))
