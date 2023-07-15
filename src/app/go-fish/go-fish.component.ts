import { Component, OnDestroy, OnInit } from '@angular/core';
import { connect, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

type player = { username: string; currentBid: number };

@Component({
  selector: 'app-go-fish',
  templateUrl: './go-fish.component.html',
  styleUrls: ['./go-fish.component.scss'],
})
export class GoFishComponent implements OnInit, OnDestroy {
  username: string;
  roomID: string;
  private socket: Socket;
  players: player[] = [];
  inRoom: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.socket = connect(environment.goFishUrl);
    this.socket.on(
      'player_joined',
      (players: player[], newPlayerName: string) => {
        this.players = players;
      }
    );
  }

  public joinRoom() {
    this.socket.emit(
      'join_room',
      this.username,
      this.roomID,
      (players: player[]) => {
        this.inRoom = true;
        this.players = players;
      }
    );
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }
}
