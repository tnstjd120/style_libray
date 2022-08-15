import './SassExample.scss'

const SassExample = () => {
  return (
    <div>
      <p>Hello, world!</p>
      <p className="bold">Hello, world!</p>
      <p className="primary">Hello, world!</p>

      <nav>
        <ul>
          <li>List 01</li>
          <li>List 02</li>
          <li>List 03</li>
          <li>List 04</li>
        </ul>
      </nav>

      <ul>
        <li>List05</li>
        <li>List06</li>
        <li>List07</li>
        <li className="bgGreen">List08</li>
      </ul>

      <div>Basic</div>
      <div className="info">info</div>
      <div className="alert">alert</div>
      <div className="success">success</div>
    </div>
  )
}

export default SassExample
