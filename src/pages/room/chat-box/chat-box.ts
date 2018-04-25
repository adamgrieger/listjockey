import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ChatMessage } from '../../../core/api/listjockey/models/chat.models';

@Component({
  selector: 'chat-box',
  templateUrl: 'chat-box.html'
})
export class ChatBox implements OnInit {

  @Input() messages: ChatMessage[];
  @Output() onMessageSent = new EventEmitter<string>();

  private chatForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chatForm = this.formBuilder.group({
      message: ['']
    });
  }

  private sendMessage = () => {
    const message = this.chatForm.get('message').value;

    if (message) {
      this.onMessageSent.emit(message);
      this.chatForm.reset();
    }
  }
}
