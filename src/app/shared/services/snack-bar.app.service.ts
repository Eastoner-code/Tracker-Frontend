import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarAppService {
  public constructor(private snackBar: MatSnackBar) {}

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000
    });
  }

  public showSaved() {
    this.showWithText('Saved');
  }

  public showRemoved() {
    this.showWithText('Removed');
  }

  public showWithText(text: string) {
    this.openSnackBar(text, 'Close');
  }
}
