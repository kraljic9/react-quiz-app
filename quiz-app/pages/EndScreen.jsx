function EndScreen() {
  return (
    <div className="end-screen-container">
      <div className="end-scree-text-container">
        <h1>Quiz completed</h1>

        <p>Congratulations you answered 5/5 questions correctly!</p>
      </div>

      <div className="play-again-container">
        <p>Would you like to play again?</p>
        <button>Restart</button>
      </div>
    </div>
  );
}

export default EndScreen;
