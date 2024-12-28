import "./DropArea.css";
function DropArea({ onDrop }) {
  return (
    <div
      className="hiddrop"
      onDrop={() => {
        onDrop();
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <div></div>
      <div></div>
    </div>
  );
}
export default DropArea;
