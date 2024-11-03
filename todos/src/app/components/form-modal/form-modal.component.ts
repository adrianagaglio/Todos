import { Component, inject, TemplateRef } from '@angular/core';

import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { iUser } from '../../models/iuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-modal',

  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss',
})
export class FormModalComponent {
  newUser: iUser = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    title: '',
    todos: [],
  };

  private modalService = inject(NgbModal);
  closeResult = '';
  constructor(private userSvc: UserService) {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addNewUser() {
    this.userSvc.addNewUser(this.newUser).subscribe();
  }
}
