
interface Icardprop {
  id: number,
  quote: string
}

function Card({ id, quote }: Icardprop) {

  return (
    <div className="flex justify-center items-center p-4 h-[300px] w-[250px] bg-yellow-200 rounded-md gap-2 flex-col">
      <span>{id}</span>
      <h1 className="line-clamp-1
      ">{quote}</h1>
    </div>
  )
}

export default Card



