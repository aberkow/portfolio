import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Input from '../Components/Inputs/Input'
import TextArea from '../Components/Inputs/TextArea'
import Submit from '../Components/Inputs/Submit'

export default function Contact() {
  const [ showSuccess, setShowSuccess ] = useState(false)
  const { register, handleSubmit, reset } = useForm()
  
  const onSubmit = async (data) => {
    await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      reset()
      setShowSuccess(true)
    }).catch(err => console.log(err))
    
  };
  return (
    <>
    <h1>Say hello <span aria-hidden="true">👋</span></h1>
    <form className={showSuccess ? 'hidden' : 'max-w-prose'} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="name"><span className="text-red-700">* </span>Name: </label>
        </div>
        <div>
          <Input 
            type="text"
            name="name"
            id="name"
            placeholder="Sam Smith"
            ref={register({ required: true })}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="email"><span className="text-red-700">* </span>Email: </label>
        </div>
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="hello@youremail.com"
            ref={register({ required: true })}
          />
        </div>
      </div>
        <div>
          <div>
            <label htmlFor="subject"><span className="text-red-700">* </span>What would you like to talk about?</label>
          </div>
          <div>
            <Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              ref={register({ required: true })}
            />
          </div>
        </div>
      <div>
        <div>
          <label htmlFor="message">What's on your mind?</label>
        </div>
        <div>
          <TextArea 
            name="message"
            id="message"
            placeholder="Write your message..."
            ref={register}
          />
        </div>
      </div>

      <div>
        <p>
          <span className="text-red-700">* </span>Indicates a required field.
        </p>
      </div>
      <div>
        <Submit value="Get in touch" />
      </div>
    </form>
    {
      showSuccess && (
        <div className="max-w-prose">
          <h2>Thanks for reaching out!</h2>
            <p>While I get back to you, please feel free to <a href="https://twitter.com/adamjberkowitz">talk with me on twitter</a> or <a href="https://github.com/aberkow">checkout my work on github</a>.</p>
        </div>
      )
    }
    </>
  )
}