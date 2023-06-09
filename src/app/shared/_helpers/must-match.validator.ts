import { FormGroup } from '@angular/forms';

// Custom validator to check that two fields match
export const mustMatch = (controlName: string, matchingControlName: string) => (formGroup: FormGroup) => {
  const control = formGroup.controls[controlName];
  const matchingControl = formGroup.controls[matchingControlName];

  if (matchingControl.errors && !matchingControl.errors.mustMatch) {
    return;
  }

  // Set error on matchingControl if validation fails
  if (control.value !== matchingControl.value) {
    matchingControl.setErrors({ mustMatch: true });
  } else {
    matchingControl.setErrors(null);
  }
};
