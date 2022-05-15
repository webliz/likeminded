/** Types and constants */
import { EMAIL_REGEX } from 'components/App.constants';

export function validate(key: string, event: any):boolean {
  var target = event.target as HTMLSelectElement || HTMLInputElement;
  if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
    switch(key) {
      case "required":
        return target.value.trim().length === 0;
      case "role":
        return parseInt(target.value) === 0;;
      case "email":
        /** General Email Regex (RFC 5322 Official Standard) */
        return EMAIL_REGEX.test(event.target.value);
      default:
        return false;
    }
  } else {
    return false;
  }
}