export default function TodoItem({ id, status, title }) {
  return (
    <div>
      <span>{`${title}-${status}`}</span>
    </div>
  );
}
