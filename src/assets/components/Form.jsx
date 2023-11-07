import "./styles/Form.css"

const Form = () => {
  return (
    <main>
        <h2>Interested in our <br/> business pricing?</h2>
        <br/>
        <h3>Fill out the form to view details and we’ll contact you as soon as possible.</h3>

        <form>
            <div className="form__inputs">

                <label>
                    Name
                    <input type="text" name="name" id="name" placeholder="Ethan Johnson"/>
                </label>
                <label>
                    Company Email
                    <input type="email" name="email" id="email" placeholder="ethan@johnson.com"/>
                </label>
            </div>
            <div className="form__inputs">
                <label>
                    Company Size
                    <select name="size">
                        <option value="50-100">50-100 employers</option>
                        <option value="100-150">100-150 employers</option>
                        <option value="150-200">150-200 employers</option>
                    </select>
                </label>
                <label>
                    Subject
                    <select name="subject">
                        <option value="landing">Building Landing pages</option>
                        <option value="apps">Bulding Apps</option>
                        <option value="e-commerces">Building E-commerces</option>
                    </select>
                </label>
            </div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="Contact Sales" />
        </form>
    </main>
  )
}

export default Form