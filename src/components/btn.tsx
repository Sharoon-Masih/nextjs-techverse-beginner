// JSX
// 1- JSX always return single
// 2- Always put a closing tag
const Btn = (prop: { name: string }) => {
  console.log(prop)
  return (

    <button>{prop.name}</button>

  )
}

export default Btn
