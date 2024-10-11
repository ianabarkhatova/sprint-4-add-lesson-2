type MyComponentProps<I> = {
  items: I[]
  defaultItem: I
}

// если пишем стрелочную ф-ю, то делаем MyComponent<I, >
function MyComponent<I>(props: MyComponentProps<I>) {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      {/*если передаем массив строк в items, то в defaultItem можем передать только строку,*/}
      {/*а если массив юзеров, то только юзера*/}
      <MyComponent items={['react', 'typescript']} defaultItem={'9'} />
      <MyComponent items={users} defaultItem={{name: 'Bilbo', age: 111}} />
    </>
  )
}

type User = {
  name: string
  age: number
}


