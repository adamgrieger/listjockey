import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Content } from 'ionic-angular';

import { ChatMessage } from '../../../core/api/listjockey/models/chat.models';

@Component({
  selector: 'chat-box',
  templateUrl: 'chat-box.html'
})
export class ChatBox implements OnInit {

  @Input() messages: ChatMessage[];
  @Output() onMessageSent = new EventEmitter<string>();

  @ViewChild(Content) content: Content;

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
      this.content.scrollToBottom();
    }
  }
}
