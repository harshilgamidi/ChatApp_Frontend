import io from 'socket.io-client';
// const sockets = io('https://chatapp-backend-f2ny.onrender.com/', { autoConnect: true, forceNew: true });
const sockets = io('https://chatapp-backend-f2ny.onrender.com/');
export default sockets;
