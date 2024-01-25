import { useFormStatus } from 'react-dom'


export default function SignupButton() {
    const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="btn-secondary">
      {pending && <span>Submitting...</span>}
      {!pending && <span>Sign up</span>}
  </button>
  )
  }
