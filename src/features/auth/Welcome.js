import { Link } from "react-router-dom"

const Welcome = () => {

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long'}).format(date) ;

  return (
    <section>
        <p>Welcome enter username </p>
        <p>Today : {today}</p>
    </section>
  )
}

export default Welcome