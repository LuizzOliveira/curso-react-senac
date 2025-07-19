
type userProps = {
    id:number,
    name: string,
    username:string,
    email:string
  }
  
export default async function ChmadaAPI() {
const response = await fetch("https://jsonplaceholder.typicode.com/users")
const dados : userProps[] = await response.json()

return (
    <div>
    {dados.map((item)=> (
        <div key={item.id}>
        <ul className="p-5 border">
            <li>
            <h1>{item.id}</h1>
            </li>
            <li>
            <h1>{item.name}</h1>
            </li>
            <li>
            <h1>{item.username}</h1>
            </li>
            <li>
            <h1>{item.email}</h1>
            </li>
        </ul>
        </div>
    ))}

    </div>
);
}