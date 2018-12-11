import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

	private socket: WebSocket;

  constructor() { }

  public startSession() {
		if (!this.socket) {
      console.log('creating socket');
			this.socket = this.createSocket();
		}
	}

	public sendMessage(message) {
    console.log('sending message');
		this.socket.send(message);
	}

	public receiveMessage(callback: (inboundMessage) => void) {
		this.socket.onmessage = (message) => {
			console.log('received message: ' + message);
			callback(message);
		};
	}

	public destroySocket() {
		this.socket.close();
		this.socket = null;
  }
  
	private createSocket(): WebSocket {
		const HOST = location.origin.replace(/^http/, 'ws');
		const ws = new WebSocket(HOST);
		return ws;
	}
}
