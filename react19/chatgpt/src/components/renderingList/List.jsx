import { peoples } from "./data"
console.log(peoples)
export default function List() {
  return (<>
    <ul>
      {peoples.map((people) => <li key={people?.id}>{people?.name}</li>)}
    </ul>
  </>)
}