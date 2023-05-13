import Feedback from '../Feedback/Feedback';

function App() {
  return (
    <div
      style={{
        fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
}

export default App;
