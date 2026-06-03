const name = true;

export default function Conditional() {
  return (<>
    <h1>
      {name && "condition true"}
    </h1>
    <hr />
    <hr />
    <h2>
      {name || "condition false"}
    </h2>
  </>)
}