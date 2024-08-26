import { TURNS } from '../constants';
import { resetGameStorage } from '../logic/storage';
import { Square } from './Square';

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const winnerText = winner === false ? 'Empate' : 'Gano';
  resetGameStorage();
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}:</h2>
        <header className="win">
          {winner ? (
            <Square>{winner}</Square>
          ) : (
            <div className="square">{TURNS.E}</div>
          )}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
