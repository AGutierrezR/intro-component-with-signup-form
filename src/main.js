import './styles.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
  Alpine.data('form', () => ({
    firstName: {
      value: '',
      valid: true,
      message: '',
    },
    lastName: {
      value: '',
      valid: true,
      message: '',
    },
    email: {
      value: '',
      valid: true,
      message: '',
    },
    password: {
      value: '',
      valid: true,
      message: '',
    },

    validateForm() {
      this.validate(this.firstName, 'First Name')
      this.validate(this.lastName, 'Last Name')
      this.validate(this.email, 'Email')
      this.validate(this.password, 'Password')
    },

    validate(field, label) {
      console.log(field, label)
      if (field.value.length === 0) {
        field.valid = false
        field.message = label + ' cannot be empty'
      } else if (!/.+\@.+\..+/.test(field.value) && label === 'Email') {
        field.valid = false
        field.message = 'Looks like this is not an email'
      } else {
        field.valid = true
        field.message = ''
      }
    },
  }))
})

Alpine.start()
