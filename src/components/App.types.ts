
interface User {
  username: string,
  email: string,
  password: string,
  role: number
}

export const initialUser: User = {
  username: "",
  email: "",
  password: "",
  role: 0
}

/** Validation */

interface FormValidation {
  username: {
    required: boolean,
    max: boolean,
  },
  email: {
    required: boolean,
    valid: boolean
  },
  password: {
    required: boolean,
    min: boolean,
    valid: boolean
  },
  role: {
    required: boolean
  }
}
  
export const initialValidation: FormValidation = {
  username: {
    required: false,
    max: false
  },
  email: {
    required: false,
    valid: true
  },
  password: {
    required: false,
    min: false,
    valid: true
  },
  role: {
    required: false
  }
}