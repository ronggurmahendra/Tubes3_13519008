import { Component, OnInit } from '@angular/core';
import { ServerInterfaceService } from '../server-interface.service'
//import { StreamChat, ChannelData, Message, User } from 'stream-chat';
import axios from 'axios';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'angular-chat';
  //channel: ChannelData;
  username = '';
  //messages: Message[] = [];
  messages : String[];
  newMessage = '';
  //channelList: ChannelData[];
  chatClient: any;
  //currentUser: User;
  constructor(private serverInterfaceService : ServerInterfaceService) { }

  ngOnInit(): void {
    this.messages = ["wads","sadczx","sadjshakd"];
    this.serverInterfaceService.sendDummy();

    console.log(this.serverInterfaceService.getTasks());
  }

  sendMessage_(){
    console.log("pressed");
  }

  async sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    try {
      console.log(this.newMessage)
      this.messages[this.messages.length] = this.newMessage
      this.newMessage = '';
    } catch (err) {
      console.log(err);
    }
  }
}
