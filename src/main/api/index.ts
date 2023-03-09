import '../config/module-alias'
import { PersonController } from '@/application/controllers'

const p = new PersonController()
console.log(p.speak('ronan'))
console.log(p.speak())
