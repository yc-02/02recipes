import { useFormStatus } from 'react-dom'



export default function SigninButton() {
    const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="btn-secondary mr-4">
      {pending && <span>Submitting...</span>}
      {!pending && <span>Sign in</span>}
  </button>
  )
}

