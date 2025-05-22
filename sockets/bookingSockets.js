let ioInstance = null;

const bookingSocketsHandler = (io, socket) => {
  if (!ioInstance) {
    ioInstance = io;
  }

  console.log('Booking socket handler active for socket:', socket.id);
};

const emitNewBooking = (bookingData) => {
  if (ioInstance) {
    ioInstance.emit('new-booking', bookingData);
    console.log('✅ Emitted new-booking event');
  } else {
    console.warn('⚠️ Socket.IO not initialized');
  }
};

module.exports = {
  bookingSocketsHandler,
  emitNewBooking,
};
