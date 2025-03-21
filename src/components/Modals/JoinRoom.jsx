export default function JoinRoomModal({ joinRoomDialogRef }) {
  return (
    <dialog ref={joinRoomDialogRef} className="join-room-dialog">
      <div className="join-room-modal">
        <h2>Join Room</h2>
        <form method="dialog">
          <label>
            Room Code:
            <input type="text" name="room-code" required />
          </label>
          <button type="submit">Join</button>
        </form>
        <button onClick={() => joinRoomDialogRef.current.close()}>Cancel</button>
      </div>
    </dialog>
  );
}
