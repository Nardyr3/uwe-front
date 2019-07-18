import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  @Input() confirmText: string;
  constructor(protected ref: NbDialogRef<ConfirmationModalComponent>) {
  }

  ngOnInit() {
  }

  public closeConfirm() {
    this.ref.close(true);
  }

  public closeExit() {
    this.ref.close(false);
  }

}
