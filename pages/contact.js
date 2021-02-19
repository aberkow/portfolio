import { useForm } from 'react-hook-form'

export default function Contact() {

  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log(res);
    }).catch(err => console.log(err))
    
  };
  return (
    <>
    <h1>Say hello <span aria-hidden="true">👋</span></h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="name"><span className="text-red-700">* </span>Name: </label>
        </div>
        <div>
          <input type="text" name="name" placeholder="Sam Smith" ref={register({ required: true })} />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="email"><span className="text-red-700">* </span>Email: </label>
        </div>
        <div>
          <input type="email" name="email" placeholder="hello@youremail.com" ref={register({ required: true })} />
        </div>
      </div>
        <div>
          <div>
            <label htmlFor="subject"><span className="text-red-700">* </span>Subject: </label>
          </div>
          <div>
            <input type="text" name="subject" placeholder="Subject" ref={register({ required: true })} />
          </div>
        </div>
      <div>
        <div>
          <label htmlFor="message">What would you like to talk about?</label>
        </div>
        <div>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message..." ref={register}></textarea>
        </div>
      </div>

      <div>
        <p>
          <span className="text-red-700">* </span>Indicates a required field.
        </p>
      </div>
      <input type="submit" value="Get in touch"/>
    </form>
    </>
  )
}